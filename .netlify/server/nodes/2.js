import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.cbbYrYH3.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/CxEDsKB9.js","_app/immutable/chunks/ZTSuq1sf.js","_app/immutable/chunks/BsnaDXOc.js","_app/immutable/chunks/D64gtuHi.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/DMBfGIqZ.js","_app/immutable/chunks/PbsquPcA.js","_app/immutable/chunks/DLbROpcE.js","_app/immutable/chunks/zaoE4Lxp.js","_app/immutable/chunks/D-hpDpqb.js","_app/immutable/chunks/oaxmyzfe.js","_app/immutable/chunks/CgX2JKOw.js","_app/immutable/chunks/C9L_BY2i.js","_app/immutable/chunks/CVf5pf7k.js","_app/immutable/chunks/BMQWQbEr.js","_app/immutable/chunks/DSWQVfsc.js","_app/immutable/chunks/BOS2c9Pe.js"];
export const stylesheets = [];
export const fonts = [];
