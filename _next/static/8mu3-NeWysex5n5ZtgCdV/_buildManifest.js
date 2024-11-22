(self.__BUILD_MANIFEST = (function (s, c, e, a, t) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    },
    "/": [
      s,
      "static/css/6c1906b629893d77.css",
      "static/chunks/pages/index-9af0172d4c2d4a36.js",
    ],
    "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
    "/blog": [s, c, "static/chunks/pages/blog-530cc86a1557658f.js"],
    "/blog/[articleSlug]": [
      s,
      e,
      a,
      t,
      "static/chunks/pages/blog/[articleSlug]-dfb657a459280069.js",
    ],
    "/foundations": ["static/chunks/pages/foundations-a20a40d19762bc88.js"],
    "/projects": [s, c, "static/chunks/pages/projects-d6b71c2526dd8c79.js"],
    "/projects/[projectSlug]": [
      s,
      e,
      a,
      t,
      "static/chunks/pages/projects/[projectSlug]-8b637283accf6e9f.js",
    ],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/blog",
      "/blog/[articleSlug]",
      "/foundations",
      "/projects",
      "/projects/[projectSlug]",
    ],
  };
})(
  "static/chunks/d9067523-6c6847c79b6ba89a.js",
  "static/css/afed203cf5d2edb3.css",
  "static/chunks/812cee03-3835b10ffed85c5c.js",
  "static/css/aa647a6959cea8ba.css",
  "static/chunks/667-f06d74166337a43b.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
