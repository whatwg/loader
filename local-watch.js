var fs = require('fs');
var childProcess = require('child_process');
var promiseDebounce = require('promise-debounce');
var ecmarkupify = require('./ecmarkupify.js');

var build = promiseDebounce(function () {
  log('Building with bikeshed...');
  childProcess.execSync(
    'bikeshed spec index.bs index.html',
    { encoding: 'utf-8' }
  );
  log('(bikeshed done)');

  log('Building with ecmarkup...');
  return ecmarkupify('index.html', 'index.html').then(function () {
    log('Build complete');
  }, function (err) {
    error('Error executing ecmarkupify:\n');
    console.error(err);
  });
});

fs.watch('index.bs', build);
build();

function log(s) {
  console.log('[' + (new Date()).toISOString() + '] ' + s);
}

function error(s) {
  console.error('[' + (new Date()).toISOString() + '] ' + s);
}
