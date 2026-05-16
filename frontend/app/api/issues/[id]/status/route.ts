import { NextRequest, NextResponse } from 'next/server';
import { buildApiUrl, jsonHeaders } from '../../_shared';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const body = await request.text();
  const response = await fetch(buildApiUrl(`/v1/issues/${id}/status`), {
    method: 'PATCH',
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
