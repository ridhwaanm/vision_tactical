export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/awards/cio-bulletin-2022.jpg","images/awards/excellence-award-2025.jpg","images/awards/g20-partner-2024.jpg","images/blog/aku-award.jpg","images/blog/drone-operations.jpg","images/blog/g20-operations.jpg","images/hero/main.jpg","images/hero/placeholder.jpg","images/logo.svg","images/og-default.jpg","images/services/anti-kidnapping.jpg","images/services/armed-response.jpg","images/services/cctv-alarms.jpg","images/services/dog-handling.jpg","images/services/drone-surveillance.jpg","images/services/emergency-medical.jpg","images/services/event-security.jpg","images/services/manned-guarding.jpg","images/services/vip-protection.jpg","images/team/group.jpg","images/team/operations.jpg","images/team/yaseen-theba.jpg","images/vt.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.w2Cv3Y1P.js",app:"_app/immutable/entry/app.Bv-otzny.js",imports:["_app/immutable/entry/start.w2Cv3Y1P.js","_app/immutable/chunks/CfKmZJNe.js","_app/immutable/chunks/BNd7ZQhY.js","_app/immutable/chunks/DsHiVAyT.js","_app/immutable/chunks/C3m0Ss_O.js","_app/immutable/entry/app.Bv-otzny.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/BNd7ZQhY.js","_app/immutable/chunks/COdc4Jxt.js","_app/immutable/chunks/MCMJmmqY.js","_app/immutable/chunks/qOwbebx3.js","_app/immutable/chunks/C3m0Ss_O.js","_app/immutable/chunks/C5Ik7Scl.js","_app/immutable/chunks/CzWz9Re5.js","_app/immutable/chunks/BSczw2iZ.js","_app/immutable/chunks/CnU7SXo-.js","_app/immutable/chunks/DsHiVAyT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
