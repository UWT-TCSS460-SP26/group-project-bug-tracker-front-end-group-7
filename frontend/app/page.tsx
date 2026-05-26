import { BugReportForm } from './report-form';

type PageProps = {
  searchParams?: Promise<{
    view?: string | string[];
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const viewParam = Array.isArray(resolvedSearchParams?.view)
    ? resolvedSearchParams.view[0]
    : resolvedSearchParams?.view;
  const initialView = viewParam === 'admin' ? 'admin' : 'report';

  return <BugReportForm initialView={initialView} />;
}
