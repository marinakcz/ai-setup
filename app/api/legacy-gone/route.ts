/**
 * Returns 410 Gone for legacy PHP URLs (old forum that used to run on this domain).
 * Tells Google Search Console to de-index these pages.
 */
export function GET() {
  return new Response("Gone", { status: 410 });
}

export function POST() {
  return new Response("Gone", { status: 410 });
}
