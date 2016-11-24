# <%= name %>

A toolkit created with the yeoman
[fabricator-starter generator](https://github.com/dietergeerts/generator-fabricator-starter).

## Using this toolkit

**You only need to consider this section if you just want to use this toolkit into your project.**

- This toolkit has all it's files generated into the folder: `build/assets/toolkit/`.
- When making this a npm module, your project can easily include the toolkit files through gulp.

## Tools

- [Fabricator Builder](https://github.com/dietergeerts/fabricator) - 
    used for building the toolkit, has a wiki.
- [fabricator-starter generator](https://github.com/dietergeerts/generator-fabricator-starter) - 
    used to add extra stuff.

## Development

The Toolkit requires [node.js](http://nodejs.org). Make sure you have `v6` or higher installed before proceeding.

Starting the local development environment, includes live reload: 

```
$ npm start
```

## Build/Release Process

1. **Testing** this toolkit on all relevant browsers.
2. **Commit** all your changes!
2. **Release** new version: `$ npm version (major|minor|path) -m "Release"`.
4. **Build** for production release: `$ npm run build`  
5. **Publish** your package for easier use in your projects.
6. **Deploy** the documentation site for easy access for developers.      
