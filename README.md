# `Horus.js`
A simple nodejs client for [Horus](https://github.com/CotaPreco/Horus).

#### Just install with npm
```
npm install horusjs
```

#### Example
```javascript
var Horus = require('horusjs');
var client = new Horus('udp://0.0.0.0', 7600);

client.send({
  message: 'Hey! This is an awesome message.'
});
```

The example above will attempt to connect on `0.0.0.0:7600` and send the message. Very simple, and also you can:

```javascript
client.send({
  tags: ['iOS'],
  message: 'ANDROID IS BETTER!'
});
```

And you're ready to go. **Horus** will delivery *ANDROID IS BETTER!* to everyone tagged with `iOS`.

##### ...and what about a message to multiple tags?
Just push how many tags you want to `tags`, and voilà!

```javascript
client.send({
  tags: [
    'Android', 
    'WindowsPhone', 
    'Blackberry'
  ],
  message: 'Bitch, please, we have React Native.'
});
```

### Currently supported transport strategies
For now we only support UDP as the default protocol.
