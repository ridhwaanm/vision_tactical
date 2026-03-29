import * as server from '../entries/pages/services/_slug_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.CBASwYCf.js","_app/immutable/chunks/efX7Jo3u.js","_app/immutable/chunks/Dx8LSs_Z.js","_app/immutable/chunks/CB5ZmUrC.js","_app/immutable/chunks/u4KQCPcU.js","_app/immutable/chunks/C_gu3PWN.js","_app/immutable/chunks/C6eod3rc.js","_app/immutable/chunks/Ci5vIdZl.js","_app/immutable/chunks/BQ91JTEr.js","_app/immutable/chunks/C6WDgR1H.js","_app/immutable/chunks/BoGo-Jqr.js","_app/immutable/chunks/DGYcUn2U.js","_app/immutable/chunks/BynWNHh3.js"];
export const stylesheets = [];
export const fonts = [];
