# Loader

This repository provides the [JavaScript Loader specification](http://tc39.github.io/loader).
This consolidates work on the ECMAScript module loading semantics with the integration
points of Web browsers, as well as Node.js.

# Building

Building the specification requires [Bikeshed](http://github.com/tabatkins/bikeshed).
First make sure to [install Bikeshed](https://github.com/tabatkins/bikeshed/blob/master/docs/install.md)
and then build the spec by running make. The output will be in `index.html`.

If you run issues installing Bikeshed on OS X Mavericks (e.g., `lxml` failing to install because it can't find `libxml`), you might need to [upgrade to the latest Xcode CLI tools](http://stackoverflow.com/questions/19548011/cannot-install-lxml-on-mac-os-x-10-9):

```
$ xcode-select --install
```

If you have trouble running `make` in this repo on OS X Mavericks (e.g., seeing `pkg_resources.DistributionNotFound: six`), you might need to [install `six` via `easy_install`](http://stackoverflow.com/questions/21814416/getting-distributionnotfound-error-but-package-exists):

```
$ sudo easy_install six
```
