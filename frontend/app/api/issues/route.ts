import { NextRequest, NextResponse } from 'next/server';
import { buildApiUrl, jsonHeaders } from './_shared';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const search = url.searchParams.toString();
  const response = await fetch(buildApiUrl(`/v1/issues${search ? `?${search}` : ''}`), {
    method: 'GET',
    headers: jsonHeaders(request.headers.get('authorization')),
    cache: 'no-store',
  });

  return new NextResponse(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') ?? 'application/json',
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const response = await fetch(buildApiUrl('/v1/issues'), {
    method: 'POST',
    headers: jsonHeaders(request.headers.get('authorization')),
    body,
    cache: 'no-store',
  });

  return new NextResponse(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') ?? 'application/json',
    },
  });
}
