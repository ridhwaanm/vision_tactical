import * as server from '../entries/pages/community/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/community/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/community/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.CNx4NqPB.js","_app/immutable/chunks/nPGqUycI.js","_app/immutable/chunks/DP09CrDi.js","_app/immutable/chunks/CNNTl8oO.js","_app/immutable/chunks/Duxtk_8A.js","_app/immutable/chunks/CbKmPift.js","_app/immutable/chunks/B2xLjGvy.js","_app/immutable/chunks/D-nJ2jHH.js","_app/immutable/chunks/RZNh_Yg8.js","_app/immutable/chunks/DaUIHOnu.js","_app/immutable/chunks/ClfkrkAz.js","_app/immutable/chunks/C4a5aOXz.js","_app/immutable/chunks/BWVC8gsI.js","_app/immutable/chunks/XAI2U3q_.js","_app/immutable/chunks/DU_PYDJh.js","_app/immutable/chunks/C-Ds7PEn.js","_app/immutable/chunks/DEC1WGMS.js"];
export const stylesheets = [];
export const fonts = [];
