const BUG_REPORT_API_URL = 'https://tcss-460-group-7.onrender.com';

export const buildApiUrl = (path = ''): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BUG_REPORT_API_URL}${normalizedPath}`;
};

export const jsonHeaders = (authorization?: string | null): HeadersInit => {
  return {
    ...(authorization ? { Authorization: authorization } : {}),
    'Content-Type': 'application/json',
  };
};
