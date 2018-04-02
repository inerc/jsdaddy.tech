// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/inerc/jsdaddy.tech/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-about-page-js": preferDefault(require("/Users/inerc/jsdaddy.tech/src/templates/about-page.js")),
  "component---src-templates-product-page-js": preferDefault(require("/Users/inerc/jsdaddy.tech/src/templates/product-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/inerc/jsdaddy.tech/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/inerc/jsdaddy.tech/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/inerc/jsdaddy.tech/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/inerc/jsdaddy.tech/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/inerc/jsdaddy.tech/.cache/json/layout-index.json"),
  "about.json": require("/Users/inerc/jsdaddy.tech/.cache/json/about.json"),
  "products.json": require("/Users/inerc/jsdaddy.tech/.cache/json/products.json"),
  "hooy.json": require("/Users/inerc/jsdaddy.tech/.cache/json/hooy.json"),
  "intro.json": require("/Users/inerc/jsdaddy.tech/.cache/json/intro.json"),
  "dev-404-page.json": require("/Users/inerc/jsdaddy.tech/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/inerc/jsdaddy.tech/.cache/json/404.json"),
  "index.json": require("/Users/inerc/jsdaddy.tech/.cache/json/index.json"),
  "404-html.json": require("/Users/inerc/jsdaddy.tech/.cache/json/404-html.json")
}