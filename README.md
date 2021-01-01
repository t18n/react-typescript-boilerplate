## React Typescript Boilerplate

A simple React Typescript boilerplate that allow you to understand easily, embrace good practices and workflow, optimizing for production and does not do any magic.

### Features
- [x] React with Typescript minimal config
- [x] Hot-loader
- [x] Absolute import (like `src/assets/images/img.png` instead of `../../assets/images/img.png`)
- [x] Style with `SASS` / `SCSS`
- [x] Bundle optimization:
  * `CSS` bundle with option to easily hash className with CSS module
  * Automaticaly create `Analyzer` file after build
  * Create `/compressed` folder for extra optimization (use optionally)
  * Add Image optimization
  * Split build to chunks for caching and fast loading
  * Lazy-loading modules enabled
- [x] SEO optimized
  * robots.txt
  * Auto generate sitemap
  * `meta` tags added allow easy configuration
  * Social media sharing optimized
- [x] Netlify config for easy deployment

### Get started
- To run the app: `yarn start`
- To build the app: `yarn build`.

### License
MIT license