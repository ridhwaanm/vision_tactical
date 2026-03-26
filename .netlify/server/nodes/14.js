import * as server from '../entries/pages/services/_slug_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.7Bm1FiZc.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/CxEDsKB9.js","_app/immutable/chunks/C9L_BY2i.js","_app/immutable/chunks/ZTSuq1sf.js","_app/immutable/chunks/BsnaDXOc.js","_app/immutable/chunks/PbsquPcA.js","_app/immutable/chunks/DMBfGIqZ.js","_app/immutable/chunks/D64gtuHi.js","_app/immutable/chunks/DLbROpcE.js"];
export const stylesheets = [];
export const fonts = [];
