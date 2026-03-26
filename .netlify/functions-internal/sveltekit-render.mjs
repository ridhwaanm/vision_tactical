import { init } from '../serverless.js';

export default init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/awards/cio-bulletin-2022.jpg","images/awards/excellence-award-2025.jpg","images/awards/g20-partner-2024.jpg","images/awards/psira-2026.jpg","images/blog/aku-award.jpg","images/blog/drone-operations.jpg","images/blog/g20-operations.jpg","images/hero/main-1280.webp","images/hero/main-2560.webp","images/hero/main.jpg","images/hero/placeholder.jpg","images/logo/Vision Tactical Logo.eps","images/logo/Vision Tactical Logo_dark.png","images/logo/Vision Tactical Logo_dark.svg","images/logo/Vision Tactical Logo_light.svg","images/logo-navbar.svg","images/logo.svg","images/og-default.jpg","images/services/anti-kidnapping.jpg","images/services/armed-response.jpg","images/services/cctv-alarms.jpg","images/services/dog-handling.jpg","images/services/drone-surveillance.jpg","images/services/emergency-medical.jpg","images/services/event-security.jpg","images/services/manned-guarding.jpg","images/services/vip-protection.jpg","images/team/group.jpg","images/team/operations.jpg","images/team/yaseen-theba.jpg","images/vt.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".eps":"application/postscript",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.DVe7JIAx.js",app:"_app/immutable/entry/app.CleOZFPb.js",imports:["_app/immutable/entry/start.DVe7JIAx.js","_app/immutable/chunks/DSWQVfsc.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/CgX2JKOw.js","_app/immutable/chunks/BOS2c9Pe.js","_app/immutable/entry/app.CleOZFPb.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/BCwVSjA7.js","_app/immutable/chunks/hHA1Ch9r.js","_app/immutable/chunks/RraW0l7z.js","_app/immutable/chunks/k9PEMYCF.js","_app/immutable/chunks/BOS2c9Pe.js","_app/immutable/chunks/DHm-dDPL.js","_app/immutable/chunks/DLbROpcE.js","_app/immutable/chunks/CVf5pf7k.js","_app/immutable/chunks/oaxmyzfe.js","_app/immutable/chunks/CgX2JKOw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/awards",
				pattern: /^\/awards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/careers",
				pattern: /^\/careers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/community",
				pattern: /^\/community\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/community/[slug]",
				pattern: /^\/community\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: __memo(() => import('../server/entries/endpoints/contact/_server.ts.js'))
			},
			{
				id: "/coverage-areas",
				pattern: /^\/coverage-areas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/get-a-quote",
				pattern: /^\/get-a-quote\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: __memo(() => import('../server/entries/endpoints/get-a-quote/_server.ts.js'))
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/robots.txt",
				pattern: /^\/robots\.txt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/robots.txt/_server.ts.js'))
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/services/[slug]",
				pattern: /^\/services\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/terms-of-service",
				pattern: /^\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: ["/*"],
	excludedPath: ["/.netlify/*"],
	preferStatic: true
};
