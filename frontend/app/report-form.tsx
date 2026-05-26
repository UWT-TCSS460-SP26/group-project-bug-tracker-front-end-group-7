'use client';

import { FormEvent, useCallback, useEffect, useEffectEvent, useRef, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

type ViewMode = 'report' | 'admin';

type BugReportFormProps = {
  initialView?: ViewMode;
};

type FormValues = {
  title: string;
  description: string;
  reporterFirstName: string;
  reporterLastName: string;
  reproSteps: string;
  reporterContact: string;
  priority: string;
};

type FieldName = keyof FormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

type Issue = {
  id: number;
  priority: number;
  title: string;
  description: string;
  reporterName?: string | null;
  reproSteps?: string | null;
  reporterContact: string;
  status: 'UNSOLVED' | 'IN_PROGRESS' | 'FIXED';
  createdAt: string;
  authorId?: number | null;
};

type IssueStatusFilter = 'ALL' | Issue['status'];
type IssuePriorityFilter = 'ALL' | '0' | '1' | '2';

type ApiErrorDetails = {
  errors?: string[];
  properties?: Partial<Record<FieldName | 'reporterName', ApiErrorDetails>>;
};

const INITIAL_VALUES: FormValues = {
  title: '',
  description: '',
  reporterFirstName: '',
  reporterLastName: '',
  reproSteps: '',
  reporterContact: '',
  priority: '2',
};

const PRIORITY_OPTIONS = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
] as const;

const PRIORITY_LABELS: Record<number, string> = {
  0: '0-24 hr',
  1: '24-48 hr',
  2: '48+ hr',
};

const LAST_SEEN_ISSUE_AT_KEY = 'bugViewerLastSeenIssueAt';
const BUG_REPORT_POSTED_EVENT = 'bug-report-posted';
const TRIAGE_PREVIEW_ENABLED = process.env.NEXT_PUBLIC_TRIAGE_PREVIEW === 'true';
const TRIAGE_PREVIEW_BUTTON_BYPASS_ENABLED =
  process.env.NEXT_PUBLIC_TRIAGE_PREVIEW_BUTTON_BYPASS === 'true';
const MOBILE_USER_AGENT_PATTERN =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const TRIAGE_PREVIEW_ISSUES: Issue[] = [
  {
    id: 1042,
    priority: 0,
    title: 'Status update endpoint returns 500 after refresh',
    description:
      'Refreshing the page and then updating an issue status causes the API to return a server error instead of saving the new state.',
    reporterName: 'Jordan Ramos',
    reproSteps:
      '1. Open the triage queue. 2. Refresh the browser. 3. Open any issue. 4. Change the status to in progress.',
    reporterContact: 'jordan.ramos@example.com',
    status: 'UNSOLVED',
    createdAt: '2026-05-22T16:18:00.000Z',
    authorId: 77,
  },
  {
    id: 1041,
    priority: 1,
    title: 'Bug reports disappear after applying priority filter',
    description:
      'Selecting priority 1 briefly shows matching reports, but the list clears after the next render.',
    reporterName: 'Skyler Chen',
    reproSteps:
      '1. Load queue. 2. Pick Priority 1. 3. Click another issue. 4. Watch the list collapse to zero.',
    reporterContact: 'skyler.chen@example.com',
    status: 'IN_PROGRESS',
    createdAt: '2026-05-21T20:42:00.000Z',
    authorId: 42,
  },
  {
    id: 1038,
    priority: 2,
    title: 'Reporter contact wraps outside card on narrow screens',
    description:
      'Long email addresses overflow the detail panel on smaller laptop widths and make the action row jump.',
    reporterName: 'Le Nguyen',
    reproSteps:
      '1. Resize browser to around 1100px wide. 2. Open an issue with a long email address. 3. Check the detail card layout.',
    reporterContact: 'very-long-contact-address-for-layout-testing@example.com',
    status: 'FIXED',
    createdAt: '2026-05-20T09:05:00.000Z',
    authorId: 18,
  },
];

function collectFieldErrors(details?: ApiErrorDetails): FieldErrors {
  if (!details?.properties) {
    return {};
  }

  const errors: FieldErrors = {};

  const nameMessage = details.properties.reporterName?.errors?.[0];
  if (nameMessage) {
    errors.reporterFirstName = nameMessage;
    errors.reporterLastName = nameMessage;
  }

  for (const field of Object.keys(INITIAL_VALUES) as FieldName[]) {
    const fieldDetails = details.properties[field];
    const firstMessage = fieldDetails?.errors?.[0];
    if (firstMessage) {
      errors[field] = firstMessage;
    }
  }

  return errors;
}

function splitReporterName(name?: string | null): { firstName: string; lastName: string } {
  const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);

  if (parts.length <= 1) {
    return {
      firstName: parts[0] ?? '',
      lastName: '',
    };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

function getLatestIssueCreatedAt(issues: Issue[]): string | null {
  let latestTimestamp = Number.NEGATIVE_INFINITY;
  let latestCreatedAt: string | null = null;

  for (const issue of issues) {
    const timestamp = new Date(issue.createdAt).getTime();
    if (!Number.isNaN(timestamp) && timestamp > latestTimestamp) {
      latestTimestamp = timestamp;
      latestCreatedAt = issue.createdAt;
    }
  }

  return latestCreatedAt;
}

function validateRequiredReportFields(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.title.trim()) {
    errors.title = 'Bug title is required.';
  }

  if (!values.description.trim()) {
    errors.description = 'What happened is required.';
  }

  if (!values.reporterFirstName.trim()) {
    errors.reporterFirstName = 'First name is required.';
  }

  if (!values.reporterLastName.trim()) {
    errors.reporterLastName = 'Last name is required.';
  }

  if (!values.reporterContact.trim()) {
    errors.reporterContact = 'Contact info is required.';
  }

  return errors;
}

function detectMobileDevice() {
  if (typeof window === 'undefined') {
    return false;
  }

  const { navigator } = window;
  const userAgentData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } })
    .userAgentData;
  if (typeof userAgentData?.mobile === 'boolean') {
    return userAgentData.mobile;
  }

  const isMobileUserAgent = MOBILE_USER_AGENT_PATTERN.test(navigator.userAgent);
  const hasCompactViewport = window.matchMedia('(max-width: 820px)').matches;
  const prefersCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  return isMobileUserAgent || (hasCompactViewport && prefersCoarsePointer);
}

export function BugReportForm({ initialView = 'report' }: BugReportFormProps) {
  const [activeView, setActiveView] = useState<ViewMode>(initialView);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isPreviewAccessRequested, setIsPreviewAccessRequested] = useState(false);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssueId, setSelectedIssueId] = useState<number | null>(null);
  const [issueSearch, setIssueSearch] = useState('');
  const [issueStatusFilter, setIssueStatusFilter] = useState<IssueStatusFilter>('ALL');
  const [issuePriorityFilter, setIssuePriorityFilter] = useState<IssuePriorityFilter>('ALL');
  const [isLoadingIssues, setIsLoadingIssues] = useState(false);
  const [isUpdatingIssue, setIsUpdatingIssue] = useState(false);
  const [isDeletingIssue, setIsDeletingIssue] = useState(false);
  const [isReportPriorityMenuOpen, setIsReportPriorityMenuOpen] = useState(false);
  const [isViewerStatusMenuOpen, setIsViewerStatusMenuOpen] = useState(false);
  const [isViewerPriorityMenuOpen, setIsViewerPriorityMenuOpen] = useState(false);
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const [issueLoadMessage, setIssueLoadMessage] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const tokenSummaryRef = useRef<HTMLDivElement>(null);
  const statusMenuRef = useRef<HTMLDivElement>(null);
  const reportPriorityMenuRef = useRef<HTMLDivElement>(null);
  const viewerStatusMenuRef = useRef<HTMLDivElement>(null);
  const viewerPriorityMenuRef = useRef<HTMLDivElement>(null);
  const hasAutoLoadedIssuesRef = useRef(false);

  const apiUrl = '/api';
  const { data: session, status: sessionStatus } = useSession();
  const accessToken = session?.accessToken?.trim() ?? '';
  const isSignedIn = sessionStatus === 'authenticated' && accessToken.length > 0;
  const isCheckingSession = sessionStatus === 'loading';
  const isPreviewMode =
    !isSignedIn &&
    (TRIAGE_PREVIEW_ENABLED ||
      (TRIAGE_PREVIEW_BUTTON_BYPASS_ENABLED && isPreviewAccessRequested));
  const hasTriageAccess = isSignedIn || isPreviewMode;
  const adminCallbackUrl =
    typeof window === 'undefined' ? '/?view=admin' : `${window.location.origin}/?view=admin`;

  const resetAdminViewState = useCallback(() => {
    setIssues([]);
    setSelectedIssueId(null);
    setIssueLoadMessage(null);
    setTokenError(null);
    hasAutoLoadedIssuesRef.current = false;
    setIssueSearch('');
    setIssueStatusFilter('ALL');
    setIssuePriorityFilter('ALL');
  }, []);

  useEffect(() => {
    if (activeView !== 'admin') {
      hasAutoLoadedIssuesRef.current = false;
    }
  }, [activeView]);

  useEffect(() => {
    hasAutoLoadedIssuesRef.current = false;
  }, [accessToken, isPreviewMode]);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 820px)');
    const pointerMediaQuery = window.matchMedia('(pointer: coarse)');

    function updateMobileState() {
      setIsMobileDevice(detectMobileDevice());
    }

    updateMobileState();

    mobileMediaQuery.addEventListener('change', updateMobileState);
    pointerMediaQuery.addEventListener('change', updateMobileState);
    window.addEventListener('resize', updateMobileState);

    return () => {
      mobileMediaQuery.removeEventListener('change', updateMobileState);
      pointerMediaQuery.removeEventListener('change', updateMobileState);
      window.removeEventListener('resize', updateMobileState);
    };
  }, []);

  const loadIssues = useCallback(async () => {
    setIsLoadingIssues(true);
    setTokenError(null);
    setIssueLoadMessage(null);

    if (isPreviewMode) {
      setIssues(TRIAGE_PREVIEW_ISSUES);
      setSelectedIssueId(TRIAGE_PREVIEW_ISSUES[0]?.id ?? null);
      setIssueLoadMessage('Preview mode is on. Showing sample triage data without authentication.');
      setIsLoadingIssues(false);
      return;
    }

    if (!accessToken) {
      setTokenError('Sign in through Auth2 to view the protected bug-report queue.');
      setIsLoadingIssues(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/issues`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const body = (await response.json().catch(() => null)) as
        | {
            error?: string;
          }
        | Issue[]
        | null;

      if (response.ok && Array.isArray(body)) {
        const previousLastSeenIssueAt = localStorage.getItem(LAST_SEEN_ISSUE_AT_KEY);
        const previousLastSeenTimestamp = previousLastSeenIssueAt
          ? new Date(previousLastSeenIssueAt).getTime()
          : Number.NaN;
        const latestIssueCreatedAt = getLatestIssueCreatedAt(body);
        const newIssueCount = Number.isNaN(previousLastSeenTimestamp)
          ? body.length
          : body.filter((issue) => new Date(issue.createdAt).getTime() > previousLastSeenTimestamp)
              .length;

        setIssues(body);
        setSelectedIssueId(body[0]?.id ?? null);
        setIssueLoadMessage(
          body.length === 0
            ? 'No bug reports are waiting right now.'
            : Number.isNaN(previousLastSeenTimestamp)
              ? `${body.length} bug report${body.length === 1 ? '' : 's'} loaded.`
              : newIssueCount === 0
                ? 'No new bug reports since your last access.'
                : `${newIssueCount} new bug report${newIssueCount === 1 ? '' : 's'} since your last access.`
        );

        if (latestIssueCreatedAt) {
          localStorage.setItem(LAST_SEEN_ISSUE_AT_KEY, latestIssueCreatedAt);
        }
        return;
      }

      if (response.status === 401) {
        setTokenError(
          typeof body === 'object' && body && 'error' in body && body.error
            ? body.error
            : 'That bearer token could not be authenticated.'
        );
        return;
      }

      if (response.status === 403) {
        setTokenError(
          'That token is valid, but it does not have permission to view the bug-report queue.'
        );
        return;
      }

      if (typeof body === 'object' && body && 'error' in body && typeof body.error === 'string') {
        setTokenError(body.error);
        return;
      }

      setTokenError('We could not load bug reports right now. Please try again in a moment.');
    } catch {
      setTokenError('We could not reach the bug report service. Check the API URL or try again.');
    } finally {
      setIsLoadingIssues(false);
    }
  }, [accessToken, apiUrl, isPreviewMode]);

  useEffect(() => {
    if (
      activeView === 'admin' &&
      hasTriageAccess &&
      issues.length === 0 &&
      !isLoadingIssues &&
      !hasAutoLoadedIssuesRef.current
    ) {
      hasAutoLoadedIssuesRef.current = true;
      const timeoutId = window.setTimeout(() => {
        void loadIssues();
      }, 0);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }
  }, [activeView, hasTriageAccess, isLoadingIssues, issues.length, loadIssues]);

  useEffect(() => {
    if (activeView !== 'report') {
      return;
    }

    if (successMessage) {
      successRef.current?.focus();
      return;
    }

    if (serverError || Object.keys(fieldErrors).length > 0) {
      summaryRef.current?.focus();
    }
  }, [activeView, fieldErrors, serverError, successMessage]);

  useEffect(() => {
    if (activeView === 'admin' && tokenError) {
      tokenSummaryRef.current?.focus();
    }
  }, [activeView, tokenError]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!statusMenuRef.current?.contains(event.target as Node)) {
        setIsStatusMenuOpen(false);
      }
      if (!reportPriorityMenuRef.current?.contains(event.target as Node)) {
        setIsReportPriorityMenuOpen(false);
      }
      if (!viewerStatusMenuRef.current?.contains(event.target as Node)) {
        setIsViewerStatusMenuOpen(false);
      }
      if (!viewerPriorityMenuRef.current?.contains(event.target as Node)) {
        setIsViewerPriorityMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  function updateValue(field: FieldName, nextValue: string) {
    setValues((current) => ({ ...current, [field]: nextValue }));
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function syncViewToUrl(nextView: ViewMode) {
    const url = new URL(window.location.href);
    if (nextView === 'admin') {
      url.searchParams.set('view', 'admin');
    } else {
      url.searchParams.delete('view');
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function switchView(nextView: ViewMode) {
    syncViewToUrl(nextView);
    setActiveView(nextView);
    setTokenError(null);
    setIssueLoadMessage(null);
  }

  function handleAdminAuthenticate() {
    if (TRIAGE_PREVIEW_BUTTON_BYPASS_ENABLED) {
      setIsPreviewAccessRequested(true);
      setTokenError(null);
      return;
    }

    void signIn('tcss460', { callbackUrl: adminCallbackUrl });
  }

  const refreshIssuesOnPostedEvent = useEffectEvent(() => {
    if (
      activeView !== 'admin' ||
      !hasTriageAccess ||
      !apiUrl ||
      isLoadingIssues ||
      isDeletingIssue ||
      isUpdatingIssue
    ) {
      return;
    }

    void loadIssues();
  });

  useEffect(() => {
    const broadcastChannel =
      typeof BroadcastChannel === 'undefined'
        ? null
        : new BroadcastChannel(BUG_REPORT_POSTED_EVENT);

    function handlePostedEvent() {
      refreshIssuesOnPostedEvent();
    }

    function handleStorage(event: StorageEvent) {
      if (event.key === BUG_REPORT_POSTED_EVENT && event.newValue) {
        refreshIssuesOnPostedEvent();
      }
    }

    broadcastChannel?.addEventListener('message', handlePostedEvent);
    window.addEventListener('storage', handleStorage);

    return () => {
      broadcastChannel?.removeEventListener('message', handlePostedEvent);
      broadcastChannel?.close();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setServerError(null);
    setSuccessMessage(null);
    setFieldErrors({});

    const requiredFieldErrors = validateRequiredReportFields(values);
    if (Object.keys(requiredFieldErrors).length > 0) {
      setFieldErrors(requiredFieldErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      title: values.title.trim(),
      description: values.description.trim(),
      reporterName: `${values.reporterFirstName.trim()} ${values.reporterLastName.trim()}`.trim(),
      ...(values.reproSteps.trim() ? { reproSteps: values.reproSteps.trim() } : {}),
      reporterContact: values.reporterContact.trim(),
      ...(values.priority !== '' ? { priority: Number(values.priority) } : {}),
    };

    try {
      const response = await fetch(`${apiUrl}/issues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => null)) as {
        error?: string;
        details?: ApiErrorDetails;
      } | null;

      if (response.ok) {
        setValues(INITIAL_VALUES);
        setSuccessMessage('Thanks. Your bug report was submitted successfully.');
        localStorage.setItem(BUG_REPORT_POSTED_EVENT, String(Date.now()));
        if (typeof BroadcastChannel !== 'undefined') {
          const broadcastChannel = new BroadcastChannel(BUG_REPORT_POSTED_EVENT);
          broadcastChannel.postMessage({ type: BUG_REPORT_POSTED_EVENT });
          broadcastChannel.close();
        }
        return;
      }

      if (response.status === 400) {
        setFieldErrors(collectFieldErrors(body?.details));
        return;
      }

      if (body?.error) {
        if (response.status === 401) {
          setServerError(
            `${body.error} The deployed API is currently requiring authentication for new bug reports, so public submission is blocked until that backend route is made public again.`
          );
        } else {
          setServerError(body.error);
        }
        return;
      }

      setServerError(
        'We could not submit your report right now because the service is unavailable. Your details are still here, so please try again in a moment.'
      );
    } catch {
      setServerError(
        'We could not reach the bug report service. Check your connection and try again. Your report details have been kept so you can retry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleIssueAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loadIssues();
  }

  async function updateIssueStatus(issueId: number, status: Issue['status']) {
    if (isPreviewMode) {
      setIssues((current) =>
        current.map((issue) => (issue.id === issueId ? { ...issue, status } : issue))
      );
      setIsStatusMenuOpen(false);
      setIssueLoadMessage(
        `Preview mode: issue #${issueId} status changed to ${formatStatus(status)} locally only.`
      );
      return;
    }

    if (!accessToken) {
      setTokenError('Sign in before updating a bug report.');
      return;
    }

    setIsUpdatingIssue(true);
    setTokenError(null);
    setIssueLoadMessage(null);

    try {
      const response = await fetch(`${apiUrl}/issues/${issueId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ status }),
      });

      const body = (await response.json().catch(() => null)) as
        | {
            error?: string;
          }
        | Issue
        | null;

      if (response.ok && body && !Array.isArray(body) && 'id' in body) {
        setIssues((current) =>
          current.map((issue) => (issue.id === issueId ? { ...issue, status: body.status } : issue))
        );
        setIsStatusMenuOpen(false);
        setIssueLoadMessage(`Issue #${issueId} status updated to ${formatStatus(body.status)}.`);
        return;
      }

      setTokenError(
        typeof body === 'object' && body && 'error' in body && body.error
          ? body.error
          : 'We could not update that bug report right now.'
      );
    } catch {
      setTokenError('We could not reach the bug report service while updating this report.');
    } finally {
      setIsUpdatingIssue(false);
    }
  }

  async function deleteIssue(issueId: number) {
    if (isPreviewMode) {
      const remainingIssues = issues.filter((issue) => issue.id !== issueId);
      setIssues(remainingIssues);
      setSelectedIssueId(remainingIssues[0]?.id ?? null);
      setIssueLoadMessage(
        remainingIssues.length === 0
          ? 'Preview mode: all sample bug reports have been cleared.'
          : `Preview mode: issue #${issueId} removed locally only.`
      );
      return;
    }

    if (!accessToken) {
      setTokenError('Sign in before deleting a bug report.');
      return;
    }

    const confirmed = window.confirm(`Delete issue #${issueId}? This cannot be undone.`);
    if (!confirmed) {
      return;
    }

    setIsDeletingIssue(true);
    setTokenError(null);
    setIssueLoadMessage(null);

    try {
      const response = await fetch(`${apiUrl}/issues/${issueId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const body = (await response.json().catch(() => null)) as
        | {
            error?: string;
          }
        | Issue
        | null;

      if (response.ok) {
        const remainingIssues = issues.filter((issue) => issue.id !== issueId);
        setIssues(remainingIssues);
        setSelectedIssueId(remainingIssues[0]?.id ?? null);
        setIssueLoadMessage(
          remainingIssues.length === 0
            ? 'No bug reports are waiting right now.'
            : `Issue #${issueId} was deleted.`
        );
        return;
      }

      setTokenError(
        typeof body === 'object' && body && 'error' in body && body.error
          ? body.error
          : 'We could not delete that bug report right now.'
      );
    } catch {
      setTokenError('We could not reach the bug report service while deleting this report.');
    } finally {
      setIsDeletingIssue(false);
    }
  }

  function formatCreatedAt(value: string) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
  }

  function formatStatus(value: Issue['status']) {
    return value.toLowerCase().replace('_', ' ');
  }

  function formatViewerStatusFilter(value: IssueStatusFilter) {
    if (value === 'ALL') {
      return 'All statuses';
    }

    return formatStatus(value);
  }

  function formatViewerPriorityFilter(value: IssuePriorityFilter) {
    if (value === 'ALL') {
      return 'All priorities';
    }

    return value;
  }

  const visibleIssues = issues
    .filter((issue) => {
      const matchesStatus = issueStatusFilter === 'ALL' || issue.status === issueStatusFilter;
      const matchesPriority =
        issuePriorityFilter === 'ALL' || issue.priority === Number(issuePriorityFilter);
      const searchValue = issueSearch.trim().toLowerCase();
      const matchesSearch =
        searchValue.length === 0 ||
        issue.title.toLowerCase().includes(searchValue) ||
        issue.description.toLowerCase().includes(searchValue) ||
        issue.reporterContact?.toLowerCase().includes(searchValue) ||
        String(issue.id).includes(searchValue);

      return matchesStatus && matchesPriority && matchesSearch;
    })
    .sort((left, right) => {
      const leftFixedRank = left.status === 'FIXED' ? 1 : 0;
      const rightFixedRank = right.status === 'FIXED' ? 1 : 0;
      if (leftFixedRank !== rightFixedRank) {
        return leftFixedRank - rightFixedRank;
      }

      if (left.priority !== right.priority) {
        return left.priority - right.priority;
      }

      return new Date(left.createdAt).getTime() - new Date(right.createdAt).getTime();
    });

  const selectedIssue =
    visibleIssues.find((issue) => issue.id === selectedIssueId) ?? visibleIssues[0] ?? null;
  const selectedIssueName = selectedIssue ? splitReporterName(selectedIssue.reporterName) : null;
  const selectedIssueReporterLabel = selectedIssue?.reporterName?.trim() || 'Reporter unavailable';

  return (
    <main className={isMobileDevice ? 'page-shell is-mobile-device' : 'page-shell'}>
      {activeView === 'report' ? (
        <section
          className="hero-card"
          role="tabpanel"
          id="bug-report-panel"
          aria-labelledby="bug-report-tab"
        >
          <div className="hero-topbar">
            <p className="eyebrow">TCSS 460 Group 7</p>
            <div className="hero-topbar-right">
              <div
                className="tab-list"
                role="tablist"
                aria-label="Bug tracker workflows"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={true}
                  aria-controls="bug-report-panel"
                  id="bug-report-tab"
                  className="tab-button is-active"
                  onClick={() => switchView('report')}
                >
                  Submit a bug report
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={false}
                  aria-controls="bug-queue-panel"
                  id="bug-queue-tab"
                  className="tab-button"
                  onClick={() => switchView('admin')}
                >
                  Get bug reports
                </button>
              </div>

              <div
                className="hero-pills report-pills"
                aria-label="Bug report highlights"
              >
                <span>Public form</span>
                <span>Fast triage</span>
              </div>
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Report a bug</h1>
              <p className="intro">
                Found something broken in the API? Send the details here and the team can triage it
                without making you create an account first.
              </p>
            </div>

            <div className="hero-side">
              <aside
                className="hero-aside"
                aria-label="What happens next"
              >
                <p className="aside-label">What happens next</p>
                <ul className="aside-list">
                  <li>Your report is sent straight to the API team for triage.</li>
                  <li>
                    Validation feedback appears inline so your team can correct issues quickly.
                  </li>
                  <li>If the service is unavailable, your draft stays here so you can retry.</li>
                </ul>
              </aside>
            </div>
          </div>

          {successMessage ? (
            <div
              ref={successRef}
              tabIndex={-1}
              className="status-panel status-success"
              aria-live="polite"
            >
              <h2>Report received</h2>
              <p>{successMessage}</p>
            </div>
          ) : null}

          {serverError ? (
            <div
              ref={summaryRef}
              tabIndex={-1}
              className="status-panel status-error"
              aria-live="assertive"
            >
              <h2>There was a problem</h2>
              <p>{serverError}</p>
            </div>
          ) : null}

          <form
            className="report-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="field">
              <label htmlFor="title">Bug title</label>
              <input
                id="title"
                name="title"
                value={values.title}
                onChange={(event) => updateValue('title', event.target.value)}
                aria-invalid={Boolean(fieldErrors.title)}
                aria-describedby={fieldErrors.title ? 'title-error' : undefined}
              />
              {fieldErrors.title ? (
                <p
                  className="field-error"
                  id="title-error"
                >
                  {fieldErrors.title}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="description">What happened?</label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={values.description}
                onChange={(event) => updateValue('description', event.target.value)}
                aria-invalid={Boolean(fieldErrors.description)}
                aria-describedby={fieldErrors.description ? 'description-error' : undefined}
              />
              {fieldErrors.description ? (
                <p
                  className="field-error"
                  id="description-error"
                >
                  {fieldErrors.description}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="reproSteps">Steps to reproduce (optional)</label>
              <textarea
                id="reproSteps"
                name="reproSteps"
                rows={5}
                value={values.reproSteps}
                onChange={(event) => updateValue('reproSteps', event.target.value)}
                aria-invalid={Boolean(fieldErrors.reproSteps)}
                aria-describedby={fieldErrors.reproSteps ? 'reproSteps-error' : undefined}
              />
              {fieldErrors.reproSteps ? (
                <p
                  className="field-error"
                  id="reproSteps-error"
                >
                  {fieldErrors.reproSteps}
                </p>
              ) : null}
            </div>

            <div className="split-fields">
              <div className="field">
                <label htmlFor="reporterFirstName">First name</label>
                <input
                  id="reporterFirstName"
                  name="reporterFirstName"
                  value={values.reporterFirstName}
                  onChange={(event) => updateValue('reporterFirstName', event.target.value)}
                  aria-invalid={Boolean(fieldErrors.reporterFirstName)}
                  aria-describedby={
                    fieldErrors.reporterFirstName ? 'reporterFirstName-error' : undefined
                  }
                />
                {fieldErrors.reporterFirstName ? (
                  <p
                    className="field-error"
                    id="reporterFirstName-error"
                  >
                    {fieldErrors.reporterFirstName}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="reporterLastName">Last name</label>
                <input
                  id="reporterLastName"
                  name="reporterLastName"
                  value={values.reporterLastName}
                  onChange={(event) => updateValue('reporterLastName', event.target.value)}
                  aria-invalid={Boolean(fieldErrors.reporterLastName)}
                  aria-describedby={
                    fieldErrors.reporterLastName ? 'reporterLastName-error' : undefined
                  }
                />
                {fieldErrors.reporterLastName ? (
                  <p
                    className="field-error"
                    id="reporterLastName-error"
                  >
                    {fieldErrors.reporterLastName}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="split-fields">
              <div className="field">
                <label htmlFor="reporterContact">Contact info</label>
                <input
                  id="reporterContact"
                  name="reporterContact"
                  value={values.reporterContact}
                  onChange={(event) => updateValue('reporterContact', event.target.value)}
                  aria-invalid={Boolean(fieldErrors.reporterContact)}
                  aria-describedby={
                    fieldErrors.reporterContact ? 'reporterContact-error' : undefined
                  }
                />
                {fieldErrors.reporterContact ? (
                  <p
                    className="field-error"
                    id="reporterContact-error"
                  >
                    {fieldErrors.reporterContact}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <div className="label-with-key">
                  <label htmlFor="priority">Priority</label>
                  <details className="info-key">
                    <summary aria-label="Priority code key">i</summary>
                    <div className="info-key-panel">
                      <p>0: 0-24 hr</p>
                      <p>1: 24-48 hr</p>
                      <p>2: 48+ hr</p>
                    </div>
                  </details>
                </div>
                <div
                  className="custom-filter"
                  ref={reportPriorityMenuRef}
                >
                  <button
                    type="button"
                    id="priority"
                    className="status-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={isReportPriorityMenuOpen}
                    aria-describedby={fieldErrors.priority ? 'priority-error' : undefined}
                    onClick={() => setIsReportPriorityMenuOpen((current) => !current)}
                  >
                    <span>
                      {PRIORITY_OPTIONS.find((option) => option.value === values.priority)?.label ??
                        values.priority}
                    </span>
                    <span
                      className="status-caret"
                      aria-hidden="true"
                    >
                      v
                    </span>
                  </button>
                  {isReportPriorityMenuOpen ? (
                    <div
                      className="status-menu status-menu-up"
                      role="listbox"
                      aria-labelledby="priority"
                    >
                      {PRIORITY_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={values.priority === option.value}
                          className={
                            values.priority === option.value
                              ? 'status-option is-selected'
                              : 'status-option'
                          }
                          onClick={() => {
                            updateValue('priority', option.value);
                            setIsReportPriorityMenuOpen(false);
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                {fieldErrors.priority ? (
                  <p
                    className="field-error"
                    id="priority-error"
                  >
                    {fieldErrors.priority}
                  </p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit bug report'}
            </button>
          </form>
        </section>
      ) : (
        <section
          className="hero-card admin-card"
          role="tabpanel"
          id="bug-queue-panel"
          aria-labelledby="bug-queue-tab"
        >
          <div className="hero-topbar">
            <p className="eyebrow">TCSS 460 Group 7</p>
            <div className="hero-topbar-right">
              <div
                className="tab-list"
                role="tablist"
                aria-label="Bug tracker workflows"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={false}
                  aria-controls="bug-report-panel"
                  id="bug-report-tab"
                  className="tab-button"
                  onClick={() => switchView('report')}
                >
                  Submit a bug report
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={true}
                  aria-controls="bug-queue-panel"
                  id="bug-queue-tab"
                  className="tab-button is-active"
                  onClick={() => switchView('admin')}
                >
                  Get bug reports
                </button>
              </div>

              <div
                className="hero-pills admin-pills"
                aria-label="Admin access highlights"
              >
                <span>Admin queue</span>
                <span>Auth2 sign-in</span>
              </div>
            </div>
          </div>

          <div className="hero-grid">
            <div className={hasTriageAccess ? 'hero-copy hero-copy-with-illustration' : 'hero-copy'}>
              <h1>View bug reports</h1>
              <p className="intro">
                Review submitted bug reports and manage triage for your API team.
              </p>
              {hasTriageAccess ? (
                <div
                  className="triage-illustration-banner"
                  aria-hidden="true"
                >
                  <div className="auth-illustration auth-illustration-triage">
                    <svg
                      viewBox="0 0 220 160"
                      role="presentation"
                    >
                      <defs>
                        <linearGradient
                          id="triageGlow"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ffd54a"
                          />
                          <stop
                            offset="100%"
                            stopColor="#f5c518"
                          />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="62"
                        cy="54"
                        r="34"
                        fill="rgba(255, 213, 74, 0.08)"
                      />
                      <circle
                        cx="162"
                        cy="112"
                        r="30"
                        fill="rgba(255, 213, 74, 0.06)"
                      />
                      <rect
                        x="44"
                        y="26"
                        width="104"
                        height="122"
                        rx="18"
                        fill="rgba(12, 12, 12, 0.94)"
                        stroke="rgba(255, 213, 74, 0.6)"
                        strokeWidth="4"
                      />
                      <rect
                        x="66"
                        y="18"
                        width="60"
                        height="24"
                        rx="12"
                        fill="url(#triageGlow)"
                      />
                      <rect
                        x="62"
                        y="58"
                        width="68"
                        height="8"
                        rx="4"
                        fill="rgba(255, 248, 231, 0.9)"
                      />
                      <rect
                        x="62"
                        y="78"
                        width="54"
                        height="8"
                        rx="4"
                        fill="rgba(255, 248, 231, 0.65)"
                      />
                      <rect
                        x="62"
                        y="98"
                        width="46"
                        height="8"
                        rx="4"
                        fill="rgba(255, 248, 231, 0.65)"
                      />
                      <path
                        d="M70 120l10 10 24-26"
                        fill="none"
                        stroke="url(#triageGlow)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="162"
                        cy="62"
                        r="24"
                        fill="rgba(12, 12, 12, 0.94)"
                        stroke="rgba(255, 213, 74, 0.6)"
                        strokeWidth="4"
                      />
                      <path
                        d="M151 62h22M162 51v22"
                        stroke="url(#triageGlow)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="hero-side">
              <aside
                className="hero-aside"
                aria-label="Access notes"
              >
                <p className="aside-label">Access notes</p>
                <ul className="aside-list">
                  <li>
                    Sign in to review newly submitted bug reports in the protected triage queue.
                  </li>
                  <li>
                    Use the queue to inspect report details, reproduction steps, and reporter
                    contact info.
                  </li>
                  <li>
                    From here, triage admins can refresh, update statuses, and remove resolved or
                    invalid reports.
                  </li>
                </ul>
              </aside>
            </div>
          </div>

          {tokenError ? (
            <div
              ref={tokenSummaryRef}
              tabIndex={-1}
              className="status-panel status-error"
              aria-live="assertive"
            >
              <h2>Access failed</h2>
              <p>{tokenError}</p>
            </div>
          ) : null}

          {issueLoadMessage ? (
            <div
              className="status-panel status-success"
              aria-live="polite"
            >
              <h2>{isSignedIn ? 'Access verified' : 'Queue updated'}</h2>
              <p>{issueLoadMessage}</p>
            </div>
          ) : null}

          <form
            className={hasTriageAccess ? 'report-form' : 'report-form report-form-signed-out'}
            onSubmit={handleIssueAccess}
          >
            {!hasTriageAccess ? (
              <div
                className="auth-illustration"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 220 160"
                  role="presentation"
                >
                  <defs>
                    <linearGradient
                      id="lockGlow"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ffd54a"
                      />
                      <stop
                        offset="100%"
                        stopColor="#f5c518"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="64"
                    cy="68"
                    r="42"
                    fill="rgba(255, 213, 74, 0.08)"
                  />
                  <circle
                    cx="150"
                    cy="108"
                    r="34"
                    fill="rgba(255, 213, 74, 0.06)"
                  />
                  <path
                    d="M62 48c0-14 11-25 25-25s25 11 25 25v14H97V48c0-6-4-10-10-10s-10 4-10 10v14H62V48Z"
                    fill="url(#lockGlow)"
                    opacity="0.9"
                  />
                  <rect
                    x="52"
                    y="58"
                    width="70"
                    height="54"
                    rx="18"
                    fill="rgba(12, 12, 12, 0.92)"
                    stroke="rgba(255, 213, 74, 0.6)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="87"
                    cy="82"
                    r="8"
                    fill="url(#lockGlow)"
                  />
                  <rect
                    x="83"
                    y="88"
                    width="8"
                    height="14"
                    rx="4"
                    fill="url(#lockGlow)"
                  />
                  <circle
                    cx="150"
                    cy="102"
                    r="18"
                    fill="none"
                    stroke="url(#lockGlow)"
                    strokeWidth="8"
                  />
                  <path
                    d="M165 102h28c6 0 10 4 10 10s-4 10-10 10h-7v10h-10v-10h-7v10h-10v-30h6Z"
                    fill="url(#lockGlow)"
                  />
                </svg>
              </div>
            ) : null}
            <div
              className={
                hasTriageAccess
                  ? 'viewer-toolbar'
                  : 'viewer-toolbar viewer-toolbar-signed-out viewer-toolbar-auth-block'
              }
            >
              {isSignedIn ? (
                <div
                  className="verified-token-banner"
                  aria-live="polite"
                >
                  Signed in through Auth2. Triage actions now use your session token.
                </div>
              ) : isPreviewMode ? (
                <div
                  className="verified-token-banner"
                  aria-live="polite"
                >
                  Preview mode is active. This queue is using sample data and local-only actions.
                </div>
              ) : (
                <div className="field token-field token-field-signed-out">
                  <div className="viewer-actions viewer-actions-centered">
                    <button
                      type="button"
                      className="auth-sign-in-button"
                      onClick={handleAdminAuthenticate}
                      disabled={isCheckingSession}
                    >
                      {isCheckingSession
                        ? 'Checking session...'
                        : TRIAGE_PREVIEW_BUTTON_BYPASS_ENABLED
                          ? 'Authenticate preview'
                          : 'Authenticate'}
                    </button>
                  </div>
                  <p className="intro signed-out-auth-intro">
                    {TRIAGE_PREVIEW_BUTTON_BYPASS_ENABLED
                      ? 'Use the button to open a local triage preview without real sign-in.'
                      : 'Sign in to open the protected issue queue.'}
                  </p>
                </div>
              )}

              <div
                className={
                  hasTriageAccess ? 'viewer-actions' : 'viewer-actions viewer-actions-centered'
                }
              >
                {hasTriageAccess ? (
                  <>
                    <button
                      type="submit"
                      disabled={isLoadingIssues}
                    >
                      {isLoadingIssues ? 'Loading queue...' : 'Refresh queue'}
                    </button>
                    {isSignedIn ? (
                      <button
                        type="button"
                        className="ghost-button"
                        onClick={() => {
                          resetAdminViewState();
                          void signOut({ callbackUrl: adminCallbackUrl });
                        }}
                      >
                        Sign out
                      </button>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          </form>

          {issues.length > 0 ? (
            <>
              <div className="viewer-filterbar">
                <div className="field viewer-search">
                  <label htmlFor="issueSearch">Search reports</label>
                  <input
                    id="issueSearch"
                    name="issueSearch"
                    value={issueSearch}
                    onChange={(event) => setIssueSearch(event.target.value)}
                    placeholder="Search by id, title, description, or contact"
                  />
                </div>

                <div className="field viewer-filter">
                  <label htmlFor="issueStatusFilter">Status</label>
                  <div
                    className="custom-filter"
                    ref={viewerStatusMenuRef}
                  >
                    <button
                      type="button"
                      id="issueStatusFilter"
                      className="status-trigger"
                      aria-haspopup="listbox"
                      aria-expanded={isViewerStatusMenuOpen}
                      onClick={() => setIsViewerStatusMenuOpen((current) => !current)}
                    >
                      <span>{formatViewerStatusFilter(issueStatusFilter)}</span>
                      <span
                        className="status-caret"
                        aria-hidden="true"
                      >
                        v
                      </span>
                    </button>
                    {isViewerStatusMenuOpen ? (
                      <div
                        className="status-menu"
                        role="listbox"
                        aria-labelledby="issueStatusFilter"
                      >
                        {(['ALL', 'UNSOLVED', 'IN_PROGRESS', 'FIXED'] as IssueStatusFilter[]).map(
                          (statusOption) => (
                            <button
                              key={statusOption}
                              type="button"
                              role="option"
                              aria-selected={issueStatusFilter === statusOption}
                              className={
                                issueStatusFilter === statusOption
                                  ? 'status-option is-selected'
                                  : 'status-option'
                              }
                              onClick={() => {
                                setIssueStatusFilter(statusOption);
                                setIsViewerStatusMenuOpen(false);
                              }}
                            >
                              {formatViewerStatusFilter(statusOption)}
                            </button>
                          )
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="field viewer-filter">
                  <label htmlFor="issuePriorityFilter">Priority</label>
                  <div
                    className="custom-filter"
                    ref={viewerPriorityMenuRef}
                  >
                    <button
                      type="button"
                      id="issuePriorityFilter"
                      className="status-trigger"
                      aria-haspopup="listbox"
                      aria-expanded={isViewerPriorityMenuOpen}
                      onClick={() => setIsViewerPriorityMenuOpen((current) => !current)}
                    >
                      <span>{formatViewerPriorityFilter(issuePriorityFilter)}</span>
                      <span
                        className="status-caret"
                        aria-hidden="true"
                      >
                        v
                      </span>
                    </button>
                    {isViewerPriorityMenuOpen ? (
                      <div
                        className="status-menu status-menu-down"
                        role="listbox"
                        aria-labelledby="issuePriorityFilter"
                      >
                        {(['ALL', '0', '1', '2'] as IssuePriorityFilter[]).map((priorityOption) => (
                          <button
                            key={priorityOption}
                            type="button"
                            role="option"
                            aria-selected={issuePriorityFilter === priorityOption}
                            className={
                              issuePriorityFilter === priorityOption
                                ? 'status-option is-selected'
                                : 'status-option'
                            }
                            onClick={() => {
                              setIssuePriorityFilter(priorityOption);
                              setIsViewerPriorityMenuOpen(false);
                            }}
                          >
                            {formatViewerPriorityFilter(priorityOption)}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                className="viewer-layout"
                aria-label="Bug report viewer"
              >
                <div className="issue-list-panel">
                  <div className="issue-list-panel-header">
                    <h3>Issue queue</h3>
                    <p>{visibleIssues.length} visible</p>
                  </div>

                  <div
                    className="issue-list"
                    role="list"
                  >
                    {visibleIssues.map((issue) => {
                      const isSelected = selectedIssue?.id === issue.id;

                      return (
                        <button
                          key={issue.id}
                          type="button"
                          className={isSelected ? 'issue-list-item is-selected' : 'issue-list-item'}
                          onClick={() => setSelectedIssueId(issue.id)}
                        >
                          <div className="issue-list-item-top">
                            <p className="issue-meta">Issue #{issue.id}</p>
                            <span className="issue-chip">
                              {PRIORITY_LABELS[issue.priority] ?? `Priority ${issue.priority}`}
                            </span>
                          </div>
                          <h3>{issue.title}</h3>
                          <p>{issue.description}</p>
                          <div className="issue-list-item-bottom">
                            <span className="issue-chip">{formatStatus(issue.status)}</span>
                            <span>{formatCreatedAt(issue.createdAt)}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="issue-detail">
                  {selectedIssue ? (
                    <>
                      <div className="issue-card-top">
                        <div>
                          <p className="issue-meta">Issue #{selectedIssue.id}</p>
                          <h3>{selectedIssue.title}</h3>
                        </div>
                        <div className="issue-tags">
                          <span>{formatStatus(selectedIssue.status)}</span>
                          <span>
                            {PRIORITY_LABELS[selectedIssue.priority] ??
                              `Priority ${selectedIssue.priority}`}
                          </span>
                        </div>
                      </div>

                      <p className="issue-description">{selectedIssue.description}</p>

                      {selectedIssue.reproSteps ? (
                        <div className="issue-section">
                          <h4>Steps to reproduce</h4>
                          <p>{selectedIssue.reproSteps}</p>
                        </div>
                      ) : null}

                      {selectedIssue.reporterContact ? (
                        <div className="issue-section">
                          <h4>Contact</h4>
                          <p>{selectedIssue.reporterContact}</p>
                        </div>
                      ) : null}

                      <div className="issue-detail-meta">
                        <p className="issue-footnote">
                          Submitted {formatCreatedAt(selectedIssue.createdAt)}
                        </p>
                        <p className="issue-footnote">
                          Author:{' '}
                          {selectedIssueName
                            ? [selectedIssueName.firstName, selectedIssueName.lastName]
                                .filter(Boolean)
                                .join(' ')
                            : selectedIssueReporterLabel}
                        </p>
                      </div>

                      <div className="issue-action-row">
                        <div
                          className="field status-field"
                          ref={statusMenuRef}
                        >
                          <label htmlFor="issueStatusSelect">Issue status</label>
                          <button
                            type="button"
                            id="issueStatusSelect"
                            className="status-trigger"
                            aria-haspopup="listbox"
                            aria-expanded={isStatusMenuOpen}
                            disabled={isUpdatingIssue}
                            onClick={() => setIsStatusMenuOpen((current) => !current)}
                          >
                            <span>{formatStatus(selectedIssue.status)}</span>
                            <span
                              className="status-caret"
                              aria-hidden="true"
                            >
                              v
                            </span>
                          </button>
                          {isStatusMenuOpen ? (
                            <div
                              className="status-menu status-menu-up"
                              role="listbox"
                              aria-labelledby="issueStatusSelect"
                            >
                              {(['UNSOLVED', 'IN_PROGRESS', 'FIXED'] as Issue['status'][]).map(
                                (statusOption) => (
                                  <button
                                    key={statusOption}
                                    type="button"
                                    role="option"
                                    aria-selected={selectedIssue.status === statusOption}
                                    className={
                                      selectedIssue.status === statusOption
                                        ? 'status-option is-selected'
                                        : 'status-option'
                                    }
                                    onClick={() => {
                                      void updateIssueStatus(selectedIssue.id, statusOption);
                                    }}
                                  >
                                    {formatStatus(statusOption)}
                                  </button>
                                )
                              )}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="issue-action-row delete-row">
                        <button
                          type="button"
                          className="delete-button"
                          disabled={isDeletingIssue}
                          onClick={() => {
                            void deleteIssue(selectedIssue.id);
                          }}
                        >
                          {isDeletingIssue ? 'Deleting...' : 'Delete issue'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="empty-detail">
                      <h3>No matching report</h3>
                      <p>Adjust the filters or search terms to find a bug report to inspect.</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : null}
        </section>
      )}
    </main>
  );
}
