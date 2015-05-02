/**
 * @author Juliano Castilho <julianocomg@gmail.com>
 */
var dgram     = require('dgram');
var Transport = require('./Transport');

/**
 * @param {String} host
 * @param {Number} port
 */
function Udp(host, port) {
  this.host = host;
  this.port = port;
};

Udp.prototype = new Transport();

/**
 * @param {String} payload
 */
Udp.prototype.send = function(payload) {
  var client  = dgram.createSocket('udp4');
  var payload = new Buffer(payload);

  client.send(payload, 0, payload.length, this.port, this.host, function(error) {
    client.close();

    if (error) {
      throw error;
    }
  });
};

module.exports = Udp;
