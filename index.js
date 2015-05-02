
/**
 * @author Juliano Castilho <julianocomg@gmail.com>
 */
var UdpTransport = require('./transport/Udp');

 /*
 * @param {String} host
 * @param {Number} port
 */
function Horus(host, port) {
  var protocol = host.match(/(.[^:]+):\/\//)[1];

  switch(protocol) {
    case 'udp':
      this.transport = new UdpTransport(host, port);
      break;
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
      if(typeof tag === 'array') {
        tag = tag.join('\0\0');
      }

      if(typeof tag === 'string') {
        tag = tag.split(' ').join('\0\0');
      }

      transport.send(tag + '\0' + message);
    });
  }
};

module.exports = Horus;
