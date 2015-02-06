This page will capture design decisions and their rationale.

### No locate hook.

Earlier drafts had an additional "locate" hook between resolution and fetching. But in the interest of maximum NPM compatibility, the system has evolved away from modules having user-facing "abstract names" towards their canonical representation being an absolute path or URL. Specifically, in the browser the registry key is going to be absolute URL, and in Node the registry key should be the absolute path. Relative lookups are understood in terms of the referrer's location, not an abstract name. So the locate hook just isn't serving any role there. AMD compatibility should still be achievable by doing derelativization in the initial resolve step.

### Dynamic modules do not have tracked dependencies.

**Discussed in [issue 9](issues/9).**

Earlier drafts had an intricate "zebra stripe" algorithm that managed dependencies between normal modules and dynamic modules and back again. But if dynamic modules depend on normal modules, this can be implemented simply by using the reflective `import` API. So this can all be implemented in userland.
