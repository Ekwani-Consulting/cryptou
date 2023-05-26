# cryptou

A modern, zero-dependency, single-file, pure-JavaScript, UMD cryptography library that supports AMD, Node, CommonJS, modulejs, YUI, and browsers.

Security is paramount:

- Random strings include upper case, lower case, numbers, and special characters
- SHA-256 (32-byte) keys
- Salt and IV are one-time use and randomly generated
- Encryption is AES-CBC (Cipher-Block Chaining)

In addition, the random number generator leverages native platform options if they exist, such as the browser's `window.crypto` or Node's `Crypto`; otherwise graceful degradation via `Math.random()` for older systems, such as NetSuite SuiteScript.

## Installation

#### AMD

```javascript
define(["./cryptou.min.js"], function (cryptou) {
  console.log("version", cryptou.version());
});
```

#### Node

```javascript
const cryptou = require("./cryptou.min.js");
console.log("version", cryptou.version());
```

#### Browser

```html
<script src="https://cdn.jsdelivr.net/gh/Ekwani-Consulting/cryptou@0.1.0/cryptou.min.js"></script>
<script>
  console.log("version", cryptou.version());
</script>
```

## Public Methods

#### 🟢 version()

@returns {String} cryptou version

#### 🟢 random(size)

@param {Integer} size - in bytes; default = 32

@returns {Uint8Array} random entropy in specified byte size

#### 🟢 randomString(size)

@param {Integer} size - in chars; default = 32

@returns {String} random alphanumeric+special string of char length specified

#### 🟢 sha256(data)

@param {String|Object} data - UTF-8 string or Uint8Array

@returns {String} hex-encoded SHA-256 hash of data

#### 🟢 sha256hmac(data, key)

@param {String|Object} data - UTF-8 string or Uint8Array

@param {String|Object} key - UTF-8 string or Uint8Array

@returns {String} hex-encoded SHA-256 hash of data with secret key applied

#### 🟢 encode(data)

@param {String|Object|Boolean} data - anything JSON.stringify() can process

@returns {String} hex-encoded string

#### 🟢 decode(data)

@param {String} data - hex-encoded string

@returns {String|Object|Boolean} anything JSON.parse() can return

#### 🟢 encrypt(data, secret)

@param {String|Object|Boolean} data - anything JSON.stringify() can process

@param {String|Uint8Array} secret - pre-shared secret

@returns {String} concatenated hex-encoded string in the form of SALT_IV_ENCRYPTEDDATA

#### 🟢 decrypt(data, secret)

@param {String} data - concatenated hex-encoded string in the form of SALT_IV_ENCRYPTEDDATA

@param {String|Uint8Array} secret - pre-shared secret

@returns {String|Object|Boolean} anything JSON.parse() can return
