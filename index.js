
/**
 * @author Juliano Castilho <julianocomg@gmail.com>
 */
var UdpTransport = require('./transport/Udp');
var url = require('url');

 /*
 * @param {String} urlString
 */
function Horus(urlString) {
  var parsed = url.parse(urlString, false);

  if (!(parsed.hostname && parsed.port && parsed.protocol)) {
    throw '...invalid url `' + urlString + '`';
  }

  switch (parsed.protocol) {
    case 'udp:':
      this.transport = new UdpTransport(parsed.hostname, parsed.port);
      break;

    default:
      throw '...`' + parsed.protocol + '` is not supported!';
  }
}

Horus.prototype = {
  /**
   * @param {Object} payload
   */
  send: function(payload) {
    var tags = payload.tags;
    var message = payload.message;
    var transport = this.transport;

    if (!tags || tags.length < 1) {
      return transport.send(message);
    }

    tags.map(function(tag) {
      if (typeof tag === 'array') {
        tag = tag.join('\0\0');
      }

      if (typeof tag === 'string') {
        tag = tag.split(' ').join('\0\0');
      }

      transport.send(tag + '\0' + message);
    });
  }
};

module.exports = Horus;
