# Crypto RNG

`window.crypto` randomization utilities with `Math.random` fallback. About as cryptographically secure as you'll get natively in the browser.

> _Disclaimer_: This lib does not claim to be fully cryptographically secure. Use at your own risk. No guarantee of output uniqueness or contextual suitability is given or implied.

## Install

```bash
npm install crypto-rng
```

## Methods

Eight methods are provided:

- `generate`
- `uuid`
- `id`
- `integer`
- `float`
- `alpha`
- `alphaNumeric`
- `fromArray`

### Generate

Generates a 52-bit floating point number (like `Math.random`) using `window.crypto.getRandomNumbers`, falling back on `Math.random` when not available.

#### Example

```javascript
import rng from 'crypto-rng'

console.log(rng.generate())
// => 0.181188155933931
```

### guid | uuid

Generates a 128-bit 

### uid

### integer

### float

### alpha

### alphaNumeric

### fromArray

