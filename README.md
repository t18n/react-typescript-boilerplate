## React Turbo Boilerplate

As I am getting more ad more comfortable working with `React` and `Webpack` over time, I see a need of having a boilerplate that is scalable, customizable and experimentable. The boilerplate that does not requires you to `eject` and panic seeing hundred of packages installed, bunch of advanced script written to serve all purposes. The boilerplate that allow you to understand easily, but powerful and embrace good practices and workflow, optimizing for production, and most of all, does not do any magic.

### Prerequisite
1. Package manager: Preferably `yarn` but `npm` is also compatible
2. `Node` >=8.9.0 - Use `nvm` if you want to use different `node` version
   
### Specs
1. `Webpack 4`
2. `Babel 7`
3. `SASS` / `SCSS`
4. `React-router`
5. `Props-type`
6. `React-Helmet`

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
7. Uglify `CSS`, `JS`
8. Automaticaly create `Analyzer` file after build
9. Create `/compressed` folder for extra optimization (use optionally)
10. Add Image optimization
11. Split build to chunks for caching and fast loading
12. Lazy-loading enabled

### Get started
*React Turbo Boilerplate* using  Component Container architecture, which help you to manage `stateful` and `stateless` component yet making it super flexible.
1. Know the structure
  * `/src/components` -> Where holds all dummies components and components stylesheets. Preferrably stateless
  * `/src/containers` -> Where holds all smart components and **NO** components stylesheets. Supposably for React classes with data manipulation ability
  * `/src/routes.js` -> Defines all routes/pages within the app
2. Personalize the app
  * `/src/robots.txt` -> Change `Sitemap` to your sitemap url, or remove it if you don't have one.\
  * `package.json` -> Change App name

### Author words
The boilerplate is under MIT license, you can use it for all purposes without hesitation, as long as you keep the LICENSE file notice. If you like this boilerplate, feel free leave a stars.
If you can contribute to the repo, I am more than happy to accept the pull request.
