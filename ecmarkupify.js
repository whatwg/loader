// Usage: node ecmarkupify.js input.html output.html

var fs = require('fs');
var jsdom = require('jsdom');
var EmuSpec = require('ecmarkup/lib/Spec');

module.exports = ecmarkupify;

if (module.parent === null) {
  ecmarkupify(process.argv[2], process.argv[3]);
}

function ecmarkupify(inputFile, outputFile) {
  var inputText = fs.readFileSync(inputFile, { encoding: 'utf-8' });
  var doc = jsdom.jsdom(inputText);

  var spec = new EmuSpec(inputFile, fetch, doc);

  return Promise.all([
    spec.loadES6Biblio(),
    spec.loadBiblios()
  ])
  .then(function () {
    addAllAOIDsToBiblio(spec);
    spec.buildAlgs();

    fs.writeFileSync(outputFile, jsdom.serializeDocument(spec.doc));
  });
}

function fetch(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, contents) {
      if (err) {
        reject(err);
      }
      resolve(contents);
    });
  });
}

function addAllAOIDsToBiblio(spec) {
  // Allow aoid="" anywhere. Ecmarkup's default configuration only scans for them when building, and even then only on
  // <emu-clause> and <emu-alg>.

  var aos = spec.doc.querySelectorAll('[aoid]');
  var len = aos.length;

  for (var i = 0; i < len; i++) {
    spec.biblio.ops[aos[i].getAttribute('aoid')] = '#' + aos[i].id;
  }
}
