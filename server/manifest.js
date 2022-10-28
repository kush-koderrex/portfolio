const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.svg","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","fonts/Ubuntu Mono/ubuntumono-bold-webfont.woff","fonts/Ubuntu Mono/ubuntumono-bold-webfont.woff2","fonts/Ubuntu Mono/ubuntumono-bolditalic-webfont.woff","fonts/Ubuntu Mono/ubuntumono-bolditalic-webfont.woff2","fonts/Ubuntu Mono/ubuntumono-italic-webfont.woff","fonts/Ubuntu Mono/ubuntumono-italic-webfont.woff2","fonts/Ubuntu Mono/ubuntumono-regular-webfont.woff","fonts/Ubuntu Mono/ubuntumono-regular-webfont.woff2","fonts/Wotfard/wotfard-bold-webfont.woff","fonts/Wotfard/wotfard-bold-webfont.woff2","fonts/Wotfard/wotfard-bolditalic-webfont.woff","fonts/Wotfard/wotfard-bolditalic-webfont.woff2","fonts/Wotfard/wotfard-light-webfont.woff","fonts/Wotfard/wotfard-light-webfont.woff2","fonts/Wotfard/wotfard-lightitalic-webfont.woff","fonts/Wotfard/wotfard-lightitalic-webfont.woff2","fonts/Wotfard/wotfard-regular-webfont.woff","fonts/Wotfard/wotfard-regular-webfont.woff2","fonts/Wotfard/wotfard-regularitalic-webfont.woff","fonts/Wotfard/wotfard-regularitalic-webfont.woff2","fonts/Wotfard/wotfard-semibold-webfont.woff","fonts/Wotfard/wotfard-semibold-webfont.woff2","fonts/Wotfard/wotfard-semibolditalic-webfont.woff","fonts/Wotfard/wotfard-semibolditalic-webfont.woff2","fonts/ubuntu-mono.css","fonts/wotfard.css","images/posts/kivy-python/cover.jpg","images/posts/nao-robot/cover.jpg","images/projects/doctor.png","images/projects/doctor.xcf","images/projects/ml.jpg","images/projects/ml.png","images/projects/ml.xcf","images/projects/personal-website.JPG","images/projects/personal-website.png","images/projects/personal-website.xcf","images/projects/robot.png","images/projects/robot.xcf","images/resume-avatar-dark.png","images/resume-avatar-dark2.png","images/resume-avatar-dark5.png","images/resume-avatar.png","images/resume-avatar1.png","images/reviews/elden-ring/cover.png","images/reviews/elden-ring/liurnia.jpg","images/reviews/elden-ring/malenia-and-radahn.jpg","images/reviews/elden-ring/tree-sentinel.jpg","images/site-preview.png","images/site-preview.xcf","kushresume.pdf","logos/Full Logo.svg","logos/Small Logo.svg","optimized-images/posts/kivy-python/cover.avif","optimized-images/posts/kivy-python/cover.png","optimized-images/posts/kivy-python/cover.webp","optimized-images/posts/nao-robot/cover.avif","optimized-images/posts/nao-robot/cover.png","optimized-images/posts/nao-robot/cover.webp","optimized-images/projects/doctor.avif","optimized-images/projects/doctor.png","optimized-images/projects/doctor.webp","optimized-images/projects/ml.avif","optimized-images/projects/ml.png","optimized-images/projects/ml.webp","optimized-images/projects/personal-website.avif","optimized-images/projects/personal-website.png","optimized-images/projects/personal-website.webp","optimized-images/projects/robot.avif","optimized-images/projects/robot.png","optimized-images/projects/robot.webp","optimized-images/resume-avatar-dark.avif","optimized-images/resume-avatar-dark.png","optimized-images/resume-avatar-dark.webp","optimized-images/resume-avatar.avif","optimized-images/resume-avatar.png","optimized-images/resume-avatar.webp","optimized-images/reviews/elden-ring/cover.avif","optimized-images/reviews/elden-ring/cover.png","optimized-images/reviews/elden-ring/cover.webp","optimized-images/reviews/elden-ring/liurnia.avif","optimized-images/reviews/elden-ring/liurnia.png","optimized-images/reviews/elden-ring/liurnia.webp","optimized-images/reviews/elden-ring/malenia-and-radahn.avif","optimized-images/reviews/elden-ring/malenia-and-radahn.png","optimized-images/reviews/elden-ring/malenia-and-radahn.webp","optimized-images/reviews/elden-ring/tree-sentinel.avif","optimized-images/reviews/elden-ring/tree-sentinel.png","optimized-images/reviews/elden-ring/tree-sentinel.webp","optimized-images/site-preview.avif","optimized-images/site-preview.png","optimized-images/site-preview.webp"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".jpg":"image/jpeg",".JPG":"image/jpeg",".pdf":"application/pdf",".avif":"image/avif",".webp":"image/webp"},
	_: {
		entry: {"file":"immutable/start-b07dc96d.js","imports":["immutable/start-b07dc96d.js","immutable/chunks/index-2b41e3ee.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-c45838c3.js'),
			() => import('./chunks/1-da077a35.js'),
			() => import('./chunks/4-649a4dde.js'),
			() => import('./chunks/6-e36e98aa.js')
		],
		routes: [
			{
				type: 'endpoint',
				id: "posts.json",
				pattern: /^\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('./chunks/posts.json-e24c43bd.js')
			},
			{
				type: 'endpoint',
				id: "blog.json",
				pattern: /^\/blog\.json$/,
				names: [],
				types: [],
				load: () => import('./chunks/index.json-c6312580.js')
			},
			{
				type: 'endpoint',
				id: "[slug].json",
				pattern: /^\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				load: () => import('./chunks/index.json-8789ba71.js')
			},
			{
				type: 'page',
				id: "[slug]@blog-article",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,2,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
