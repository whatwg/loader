# Loader Spec: The Road Ahead

![The Road Ahead](http://img.archiwumallegro.pl/?1187401430)

_note: A good chunk of this spec is out of date and is undergoing revision to realign it with Service Worker, the JS Realms API, and the dynamic import() feature._

## Milestone 0: Basic Static Loading

- Name resolution (relative URLs, maybe absolute URLs)
- Fetch integration
- &lt;script type="module"&gt;
- memoization

## Milestone 1: Basic Dynamic Loading

- Worker invocation API
- Dynamic (async) import API
- Module instance object reflection
- Relative import syntax (`import local from this;`)

## Milestone 2: Extensibility

- registry reflection
- loading pipeline hooks

## Milestone 3: Conveniences

- Site packages

