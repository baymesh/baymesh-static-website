// Analytics proxy for the site Worker (src/worker.ts).
// Plausible events go through our own origin so ad blockers that block plausible.io still count visits.

export const EVENT_PATH = '/m/e';
const PLAUSIBLE_EVENT = 'https://plausible.io/api/event';

export async function handle(request: Request, upstream: typeof fetch = fetch): Promise<Response> {
  const { pathname } = new URL(request.url);
  if (pathname !== EVENT_PATH) return new Response('Not found', { status: 404 });
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  // Plausible needs the visitor's IP and user agent to count unique visitors; it never stores the IP.
  const headers = new Headers({
    'Content-Type': request.headers.get('Content-Type') ?? 'text/plain',
    'User-Agent': request.headers.get('User-Agent') ?? '',
    'X-Forwarded-For': request.headers.get('CF-Connecting-IP') ?? '',
  });
  const res = await upstream(PLAUSIBLE_EVENT, { method: 'POST', headers, body: await request.text() });
  return new Response(res.body, { status: res.status, headers: { 'Content-Type': res.headers.get('Content-Type') ?? 'text/plain' } });
}
