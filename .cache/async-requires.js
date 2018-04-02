// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-about-page-js": require("gatsby-module-loader?name=component---src-templates-about-page-js!/Users/inerc/jsdaddy.tech/src/templates/about-page.js"),
  "component---src-templates-product-page-js": require("gatsby-module-loader?name=component---src-templates-product-page-js!/Users/inerc/jsdaddy.tech/src/templates/product-page.js"),
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/inerc/jsdaddy.tech/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/inerc/jsdaddy.tech/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/inerc/jsdaddy.tech/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/inerc/jsdaddy.tech/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/inerc/jsdaddy.tech/.cache/json/layout-index.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/inerc/jsdaddy.tech/.cache/json/about.json"),
  "products.json": require("gatsby-module-loader?name=path---products!/Users/inerc/jsdaddy.tech/.cache/json/products.json"),
  "hooy.json": require("gatsby-module-loader?name=path---hooy!/Users/inerc/jsdaddy.tech/.cache/json/hooy.json"),
  "intro.json": require("gatsby-module-loader?name=path---intro!/Users/inerc/jsdaddy.tech/.cache/json/intro.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/inerc/jsdaddy.tech/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/inerc/jsdaddy.tech/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/inerc/jsdaddy.tech/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/inerc/jsdaddy.tech/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/inerc/jsdaddy.tech/.cache/layouts/index.js")
}