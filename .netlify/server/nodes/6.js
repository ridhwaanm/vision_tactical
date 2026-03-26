import * as server from '../entries/pages/community/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/community/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/community/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.-fFFdSGI.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/CxEDsKB9.js","_app/immutable/chunks/C9L_BY2i.js","_app/immutable/chunks/ZTSuq1sf.js","_app/immutable/chunks/BsnaDXOc.js","_app/immutable/chunks/PbsquPcA.js","_app/immutable/chunks/DMBfGIqZ.js","_app/immutable/chunks/D64gtuHi.js","_app/immutable/chunks/DLbROpcE.js","_app/immutable/chunks/ClfkrkAz.js"];
export const stylesheets = [];
export const fonts = [];
