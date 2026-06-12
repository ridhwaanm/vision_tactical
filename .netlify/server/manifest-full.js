export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/awards/cio-bulletin-2022.jpg","images/awards/excellence-award-2025.jpg","images/awards/g20-partner-2024.jpg","images/awards/psira-2026.jpg","images/blog/aku-award.jpg","images/blog/drone-operations.jpg","images/blog/g20-operations.jpg","images/hero/main-1280.webp","images/hero/main-2560.webp","images/hero/main.jpg","images/hero/placeholder.jpg","images/logo/vision-tactical-logo-dark.png","images/logo/vision-tactical-logo-dark.svg","images/logo/vision-tactical-logo-light.svg","images/logo/vision-tactical-logo.eps","images/logo-navbar.svg","images/logos/E2-Logo.svg","images/logos/PSIRAVerticallogo.png","images/logos/Snipr.svg","images/logos/er24.svg","images/logos/help24-logo.webp","images/logos/medi_response.svg","images/logos/tracker.svg","images/services/armed-response.jpg","images/services/cctv-alarms.jpg","images/services/dog-handling.jpg","images/services/drone-surveillance.jpg","images/services/emergency-medical.jpg","images/services/event-security.jpg","images/services/manned-guarding.jpg","images/services/vip-protection.jpg","images/team/group.jpg","images/team/operations.jpg","images/team/yaseen-theba.jpg","images/vt.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".eps":"application/postscript",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.DijOeXdS.js",app:"_app/immutable/entry/app.CnP5Si15.js",imports:["_app/immutable/entry/start.DijOeXdS.js","_app/immutable/chunks/bzgC0V9p.js","_app/immutable/chunks/DP09CrDi.js","_app/immutable/chunks/XAI2U3q_.js","_app/immutable/chunks/z02FesT0.js","_app/immutable/entry/app.CnP5Si15.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DP09CrDi.js","_app/immutable/chunks/CNNTl8oO.js","_app/immutable/chunks/nPGqUycI.js","_app/immutable/chunks/z02FesT0.js","_app/immutable/chunks/Duxtk_8A.js","_app/immutable/chunks/DEC1WGMS.js","_app/immutable/chunks/CRcfDE4M.js","_app/immutable/chunks/C4a5aOXz.js","_app/immutable/chunks/BWVC8gsI.js","_app/immutable/chunks/XAI2U3q_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/contact/_server.ts.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/get-a-quote/_server.ts.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/robots.txt/_server.ts.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
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
})();
