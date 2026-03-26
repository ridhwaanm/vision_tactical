import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.COW-RsYC.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/D64gtuHi.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/oaxmyzfe.js","_app/immutable/chunks/CgX2JKOw.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/CxEDsKB9.js","_app/immutable/chunks/BsnaDXOc.js","_app/immutable/chunks/PbsquPcA.js","_app/immutable/chunks/BMQWQbEr.js","_app/immutable/chunks/DSWQVfsc.js","_app/immutable/chunks/BOS2c9Pe.js","_app/immutable/chunks/CwYQEmyA.js","_app/immutable/chunks/BM3xC1iJ.js"];
export const stylesheets = ["_app/immutable/assets/0.Bm1GG7C_.css"];
export const fonts = [];
