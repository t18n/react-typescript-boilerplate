## React SASS Boilerplate

A simple React boilerplate that allow you to understand easily, embrace good practices and workflow, optimizing for production and does not do any magic.

### Features
1. SEO optimized
  * robots.txt
  * Auto generate sitemap
  * `meta` tags added allow easy configuration
  * Social media sharing optimized
2. Easy development experience with hot-loader
3. Add `Polyfill` automatically to browser (This is redundant since Babel 7)
4. Automatically resolve stastic path (like `Assets/images/img.png` instead of `../../assets/images/img.png`)
5. `SASS` / `SCSS` compiler (easy to customize predecesor of your own with `LESS`, `Stylus`... using the same format)
6. `CSS` bundle with option to easily hash className with CSS module
7. Minify `CSS`, `JS`
8. Automaticaly create `Analyzer` file after build
9. Create `/compressed` folder for extra optimization (use optionally)
10. Add Image optimization
11. Split build to chunks for caching and fast loading
12. Lazy-loading enabled

### Get started
- To run the app: `yarn start`
- To build the app: `yarn build`

### License
MIT license