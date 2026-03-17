import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CWu911VM.js","_app/immutable/chunks/qOwbebx3.js","_app/immutable/chunks/BNd7ZQhY.js","_app/immutable/chunks/COdc4Jxt.js","_app/immutable/chunks/MCMJmmqY.js","_app/immutable/chunks/BgKzVlKP.js","_app/immutable/chunks/7v2K_oIr.js","_app/immutable/chunks/BMlnev5_.js","_app/immutable/chunks/CzW7KYhn.js","_app/immutable/chunks/C5Ik7Scl.js","_app/immutable/chunks/B2wMcwuN.js","_app/immutable/chunks/CtFNzoCZ.js","_app/immutable/chunks/CzWz9Re5.js","_app/immutable/chunks/zaoE4Lxp.js","_app/immutable/chunks/BPBz8pjO.js","_app/immutable/chunks/CnU7SXo-.js","_app/immutable/chunks/DsHiVAyT.js","_app/immutable/chunks/CZkwk4Ny.js","_app/immutable/chunks/BSczw2iZ.js","_app/immutable/chunks/COTcwhXL.js","_app/immutable/chunks/CfKmZJNe.js","_app/immutable/chunks/C3m0Ss_O.js"];
export const stylesheets = [];
export const fonts = [];
