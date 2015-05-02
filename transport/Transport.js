/**
 * @author Juliano Castilho <julianocomg@gmail.com>
 */
function Transport() {
};

/**
 * @param  {string} payload
 * @return {mixed}
 */
Transport.prototype.send = function(payload) {
  throw 'Method not implemented!';
}

module.exports = Transport;
