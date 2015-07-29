# Loader

This repository provides the [JavaScript Loader Standard](http://whatwg.github.io/loader). This consolidates work on the ECMAScript module loading semantics with the integration points of Web browsers, as well as Node.js.

The main spec is available at http://whatwg.github.io/loader, generated from the `index.bs` file.

## Building the spec

Building the spec is a two-step process. First, the majority of the conversion work is done via [Bikeshed](https://github.com/tabatkins/bikeshed). Second, we run a custom portion of the [Ecmarkup](https://github.com/bterlson/ecmarkup) pipeline to convert the algorithms from [Ecmarkdown](https://github.com/domenic/ecmarkdown) syntax into HTML, and to automatically add cross-references. This second step requires [io.js](https://iojs.org/) to be installed.

### Bikeshed

To run Bikeshed locally, [install Bikeshed](https://github.com/tabatkins/bikeshed/blob/master/docs/install.md) and then run `bikeshed spec` in the working directory.

Alternately, you can use the command

```
curl https://api.csswg.org/bikeshed/ -F file=@index.bs > index.tmp.html
```

to use Bikeshed's web interface without installing anything.

### Ecmarkup

To run the Ecmarkup step, be sure you've done `npm install` in the root directory, then run

```
npm run ecmarkupify index.tmp.html index.html
```

### Local Watch

If you have Bikeshed installed locally, and have run `npm install`, you can try running

```
npm run local-watch
```

to start a watcher on `index.bs` that will update `index.html` as you edit.
