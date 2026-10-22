// Site Worker. Static assets serve every page; wrangler.jsonc routes only the analytics path here.
// Only the default export: workerd treats every named export as an entrypoint.
import { handle } from './lib/analytics-proxy';

export default { fetch: (request: Request) => handle(request) };
