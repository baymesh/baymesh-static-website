import { init } from '@plausible-analytics/tracker';

// Bundled into our own JS and proxied through our own origin by src/worker.ts, so blockers of plausible.io
// don't drop the script or the events. The package ignores localhost, file: and automation by default.
try {
  init({ domain: 'bayme.sh', endpoint: '/m/e' });
} catch (error) {
  console.warn('Analytics failed to start', error);
}
