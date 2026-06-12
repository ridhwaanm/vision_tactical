import * as server from '../entries/pages/community/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/community/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/community/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CLZyJAry.js","_app/immutable/chunks/nPGqUycI.js","_app/immutable/chunks/DP09CrDi.js","_app/immutable/chunks/CNNTl8oO.js","_app/immutable/chunks/Duxtk_8A.js","_app/immutable/chunks/CbKmPift.js","_app/immutable/chunks/B2xLjGvy.js","_app/immutable/chunks/D-nJ2jHH.js","_app/immutable/chunks/RZNh_Yg8.js","_app/immutable/chunks/CUqmskBD.js","_app/immutable/chunks/DfdnN9Sq.js","_app/immutable/chunks/BsOaL8qa.js","_app/immutable/chunks/BKAFe5NC.js","_app/immutable/chunks/DU_PYDJh.js","_app/immutable/chunks/CRcfDE4M.js","_app/immutable/chunks/ClfkrkAz.js"];
export const stylesheets = [];
export const fonts = [];
