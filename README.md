## React Turbo Boilerplate

Hey all,

As I am getting more ad more comfortable working with `React` and `Webpack` over time, I see a need of having a boilerplate that is scalable, customizable and experimentable. The boilerplate that does not requires you to `eject` and panic seeing hundred of packages installed, bunch of advanced script written to serve all purposes. The boilerplate that allow you to understand easily, but powerful and embrace good practices and workflow, optimizing for production, and most of all, does not do any magic.

I present you *React Turbo Boilerplate*

### Specs
1. `Webpack 4`
2. `Bootstrap 4`
3. `SASS` / `SCSS`
4. `React-router`

### Structure
*React Turbo Boilerplate* using  Component Container architecture, which help you to manage `stateful` and `stateless` component yet making it super flexible.
1. `/src/components`
2. `/src/containers`
3. `/src`

### Build
1. Add `Polyfill` automatically to browser
2. Automatically resolve stastic path (like `Assets/images/img.png` instead of `../../assets/images/img.png`)
3. `SASS` / `SCSS` compiler (easy to customize predecesor of your own with `LESS`, `Stylus`... using the same format)
4. `CSS` bundle with option to easily hash className with CSS module
5. Uglify `CSS`, `JS`
6. Automaticaly create `Analyzer` file after build
7. Create `/compressed` folder for extra optimization (use optionally)