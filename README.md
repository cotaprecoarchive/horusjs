# Horus.js
A simple nodejs client for [Horus](https://github.com/CotaPreco/Horus).

<br />
#### Install with npm
```
npm install horusjs
```

<br />

#### Examples
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

<br />

##### You can delivery to multiple tags, just pushing them into the array

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

<br />

##### And also you can build a tag with multiple arguments, using an `array` or a simple `string`

```javascript
client.send({
  tags: [
    ['a', 'b', 'c'],
    'one two three'
  ],
  message: 'Full match!'
});
```

The example above will delivery the message to everyone with the tags *`a b c`* and *`one two tree`*.
Here, "**a b c**" and "**one two three**" are considered as 2 tags.

<br />

### Currently supported transport strategies
For now we only support UDP as the default protocol.
