import * as server from '../entries/pages/community/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/community/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/community/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Cl37P3Nv.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/CxEDsKB9.js","_app/immutable/chunks/C9L_BY2i.js","_app/immutable/chunks/ZTSuq1sf.js","_app/immutable/chunks/BsnaDXOc.js","_app/immutable/chunks/PbsquPcA.js","_app/immutable/chunks/ClfkrkAz.js"];
export const stylesheets = [];
export const fonts = [];
