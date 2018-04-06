# Vue.js Template

This repository will get you up and running with Vue.js in the simplest way possible. Use it if you need a very opinionated template that uses the latest versions of today's standard frontend tools. It is not meant to be comprehensive or extremely configurable (outside of the configurability of the tools included).

No generators, no commands, just clone and go.

## What's Included

Out of the box, this template has the following tools included and configured. Each tool was chosen to optimize for value per line of configuration.

We use the latest version of tools with as little configuration as needed. This keeps the config small, readable, and editable.

## Main Components

### Vue.js

Vue.js is a barebones front end framework. Unlike a lot of other frameworks, it does not include anything other than the minimum required to use components and templates with two-way binding.

Docs: https://vuejs.org/v2/api/

### WebPack

WebPack allows us to do a lot of advanced techniques for keeping our builds small while providing very little config out of the box. WebPack comes with a lot of powerful and sane defaults. Tweaking the config for WebPack can be a little tricky, so check the docs.

This template is using WebPack v4, which introduces some breaking changes, so we are not using ExtractTextPlugin, but MiniCSSExtractPlugin, which provides most of the same functionality.

The main thing that WebPack does is bundle all our dozens of JavaScript files into one (or few) file(s). For this template, it is kept at one since the rest of the template does not use the benefits of having multiple "chunks". This can be easily added later (see the docs).

Beyond bundling, WebPack also:

 - takes the place of a minifier (it uses Uglify under the hood)
 - CommonJS/et al. (allows you to use require/import in your front end scripts)
 - does "tree shaking" which can significantly reduce the size (and interpret time) for your scripts
 - can be configured to let you use ES6 on older browsers (via a Babel plugin)
 - can be configured to compile your LESS and Sass styles to CSS

Docs: https://webpack.js.org/concepts/

### Jest  -- Not yet added!

Jest is a low-configuration testing framework from Facebook. It provides sane defaults and doesn't require much more than including and running it.

Historically, you likely had to piece together your testing framework for every project. Each tool did a very small part, which is a [great concept](https://en.wikipedia.org/wiki/Unix_philosophy)! However, in reality, you would often set up the same pieces over and over again -- no real need for modularity.

Docs: https://facebook.github.io/jest/docs/en/getting-started.html

### Twitter Bootstrap

Bootstrap has been the main frontend style framework for the past several years and virtually needs no introduction. It has both followed and defined interface trends in that time. It provides a ton of great features out the box and can often be used as mostly plug and play. It does require a bit of upfront knowledge on how to properly use its styles and classes, so be sure to at least read about its grid system and utility classes.

Specifically, we are using Bootstrap v4 as it is now out of beta and will very likely see increasing adoption going forward.

Docs: https://getbootstrap.com/docs/4.0/getting-started/introduction/

## Extras

### Axios

Unlike Angular/React/etc., Vue does not provide a built-in utility for AJAX requests. To fill in that piece, we are using axios, which is a relatively new but very powerful and easy to use AJAX library. It supports all modern browsers and allows you to use Promises as well as async/await -- both of which make handling asynchronous code much easier (async/await is not supported in all browsers, currently).

Do keep in mind that it has not reached v1.0 as of this writing, so updates will very likely include breaking changes.

Docs: https://github.com/axios/axios

### Lo-Dash

There are several tools in the family of JavaScript utility packages (e.g. alternatives include Underscore and Ramda). We've chosen Lo-Dash as it balances power, flexibility, and learning curve quite nicely.

Docs: https://lodash.com/docs/4.17.5

### eslint

Eslint is a highly configurable linter. It will let you know when it sees something in your code that breaks one of the rules you have configured. Most editors have plugins to use your eslint config to highlight issues right in the file.

When using it's "extends" functionality, you can very easily pull in others' configurations for best practices.

Docs: https://eslint.org/docs/user-guide/getting-started

### EditorConfig

EditorConfig is not specific to a front end or even a JavaScript environment, but it fits very well. The goal of EditorConfig is to keep certain editor settings as part of your code. You can set things like indentation that will be standardized across your team (assuming everyone has the EditorConfig plugin for their editor).

Docs: http://editorconfig.org/
