import * as server from '../entries/pages/services/_slug_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.U9grLs7V.js","_app/immutable/chunks/nPGqUycI.js","_app/immutable/chunks/DP09CrDi.js","_app/immutable/chunks/CNNTl8oO.js","_app/immutable/chunks/Duxtk_8A.js","_app/immutable/chunks/CbKmPift.js","_app/immutable/chunks/B2xLjGvy.js","_app/immutable/chunks/D-nJ2jHH.js","_app/immutable/chunks/RZNh_Yg8.js","_app/immutable/chunks/CjkxJFmT.js","_app/immutable/chunks/DU_PYDJh.js","_app/immutable/chunks/DaUIHOnu.js","_app/immutable/chunks/CRcfDE4M.js"];
export const stylesheets = [];
export const fonts = [];
