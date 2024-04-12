const assert = require('assert');
const JSDOM = require('jsdom').JSDOM;
const WMT =  require('web-midi-test');
const version = require('../package.json').version;
const JZZ = require('jzz');
require('..')(JZZ);

var midi_out = new WMT.MidiDst('VIRTUAL MIDI-Out');
midi_out.connect();

global.__coverage__ = {};

describe('Info', function() {
  it('version ' + version, function() {
    assert.equal(JZZ.input.Kbd.version(), version);
  });
});

describe('In browser', function() {
  before(function() {
    return new Promise(function(resolve) {
      JSDOM.fromFile('test/demo.html', {
        resources: 'usable',
        runScripts: 'dangerously',
        beforeParse: function(window) {
          window.__coverage__ = global.__coverage__;
          window.navigator.requestMIDIAccess = WMT.requestMIDIAccess;
        }
      }).then(function(dom) {
        global.window = dom.window;
        setTimeout(resolve, 1500);
      });
    });
  });
  it('it works!', function() {
    assert.equal(0, 0);
  });
  after(function() {
    try {
      global.window.close();
    }
    catch(e) { console.log(e); }
  });
});
