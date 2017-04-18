This repository hosts the [JavaScript Loader Standard](http://whatwg.github.io/loader).

### Code of conduct

We are committed to providing a friendly, safe and welcoming environment for all. Please read and
respect the [WHATWG Code of Conduct](https://wiki.whatwg.org/wiki/Code_of_Conduct).

# Status

A good chunk of this spec is out of date and is undergoing revision to realign it with Service Worker, the JS Realms API, and the dynamic import() feature.

# Loader

Section 15.2 of the [ES2015 specification](http://www.ecma-international.org/ecma-262/6.0/) describes the syntax for the new `import` and `export` declarations, but does not specify how modules are to be loaded. This repository consolidates work on the ECMAScript module loading semantics with the integration points of Web browsers, as well as Node.js.

The main spec is available at https://whatwg.github.io/loader, generated from the `index.bs` file.

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

This spec is currently undergoing potentially-large redesigns (see [#147](https://github.com/whatwg/loader/issues/147) and [#149](https://github.com/whatwg/loader/issues/149)) and is not ready for implementations. You can see one possible way to break down the work in our old [roadmap](https://github.com/whatwg/loader/blob/master/roadmap.md) document, but that does not reflect the latest changes.

Various browsers are implementing module syntax parsing and `<script type="module">` loading ([Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=568953), [Chrome](https://code.google.com/p/v8/issues/detail?id=1569), [WebKit](https://bugs.webkit.org/show_bug.cgi?id=147340), [Edge](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)). However, none of them have begun work on the ideas prototyped here, since they are not ready for implementations yet.

### Feedback

Please feel free to open a new issue, or send a pull request!
