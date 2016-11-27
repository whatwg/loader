This repository hosts the [JavaScript Loader Standard](http://whatwg.github.io/loader).

### Code of conduct

We are committed to providing a friendly, safe and welcoming environment for all. Please read and
respect the [WHATWG Code of Conduct](https://wiki.whatwg.org/wiki/Code_of_Conduct).

# Loader

Section 15.2 of the [ES2015 specification](http://www.ecma-international.org/ecma-262/6.0/) describes the syntax for the new `import` and `export` declarations, but does not specify how modules are to be loaded. This repository consolidates work on the ECMAScript module loading semantics with the integration points of Web browsers, as well as Node.js.

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

### Implementation status

This spec will be implemented in several stages/milestones. See the [roadmap](https://github.com/whatwg/loader/blob/master/roadmap.md) for more details.

As the various milestones of the roadmap are completed, browsers will be able to implement them. See the following trackers for the current status of the main browsers:

 * IE/Edge: [In progress](https://status.modern.ie/moduleses6?term=modules)
 * Firefox: [In progress](https://bugzilla.mozilla.org/show_bug.cgi?id=568953)
 * Chrome: [In progress](https://code.google.com/p/v8/issues/detail?id=1569)
 * Webkit: [Meta Bug](https://bugs.webkit.org/show_bug.cgi?id=147340)

### Feedback

Please feel free to open a new issue, or send a pull request!
