var enc = require('../lib/text/encoding'),
    vows = require('vows'),
    assert = require('assert');

vows.describe('Encoding').addBatch({
  'encoding binary': {
    topic: "\u008b\u00e7",

    'normal encoding': {
      topic: enc.encode64,
      'uses /+': expect('i+c=')
    },

    'urlsafe encoding': {
      topic: enc.urlsafeEncode64,
      'uses _-': expect('i-c=')
    }
  },

  'decoding': {
    topic: function() { return enc.decode64('i+c='); },
    'returns a string': expect("\u008b\u00e7")
  },

  'urlsafe decoding': {
    topic: function() { return enc.urlsafeDecode64('i-c='); },
    'returns a string': expect("\u008b\u00e7")
  }

}).export(module);

// Create a vow for synchronous literal data.
function expect(value) {
  return function(obj) {
    assert.equal(obj, value);
  };
}
