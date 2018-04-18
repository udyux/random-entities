# Random-Entities

`window.crypto` randomization utility with a fallback when the environment doesn't support it. About as cryptographically secure as you'll get natively.

> _Disclaimer_: This lib does not claim to be fully cryptographically secure. Use at your own risk. No guarantee of output uniqueness or contextual suitability is given or implied.

## Install

```bash
npm install crypto-rng
```

### Basic usage

```javascript
import random from 'random-entities'
random.generate()
// => 0.181188155933931
```

## Methods

Seven methods are provided which can also be imported stand-alone

- `generate`
- `char`
- `id `
- `uuid`
- `integer`
- `float`
- `fromArray`

### `generate`

Generates a 52-bit mantissa number, similar to `Math.random()`, using `window.crypto.getRandomNumbers`.

> `RandomEntities.generate(<void>)`
>
> *Module import:* `random-entities/core-rng`

#### Returns

`<Number>` between 0 and 1 (exclusively)

#### Example

```javascript
RandomEntities.generate()
// => 0.7676222995416488
```

### `char`

Generates a string of one or more characters.

> `RandomEntities.char(length)`
>
> *Module import:* `random-entities/char`

#### Arguments

- `length <Number>`| *optional* | *default*: `1`

  The length of the string to generate.

#### Returns

`<String>` 

A string of random characters.

#### Example

```javascript
RandomEntities.char()
// => "z"
RandomEntities.char(12)
// => "bjdzywvmatsb"
```

### `id`

Generates a unique alpha-numeric identifier string. The first character is always a letter. Optionally, numeric characters can be omitted.

> `RandomEntities.id(length, alpha)`
>
> *Module import:* `random-entities/id`

#### Arguments

- `length <Number>` | *optional* | *default:* `8` | *minimum:* `4`

  The length of the string to generate.

- `alpha <Boolean>` | *optional* | *default:* `false`

  If `true`, only letters will be returned (equivalent to the `char()` method)

#### Returns

`<String>` 

A string of random characters.

#### Example

```javascript
RandomEntities.id()
// => "w29a892b"
RandomEntities.id(3)
// => "v489"
RandomEntities.id(6, true)
// => "ryvadn"
```

### `uuid`

Generates a 128-bit hexadecimal universally unique identifier*

*_Although effort has been put into making this as close as possible to a true UUID, no guarantees are made in regards to their true uniqueness. Use at your own risk._

> `RandomEntities.uuid(<void>)`
>
> *Module import:* `random-entities/uuid`

#### Returns

`<String>` 

A 128-bit hexadecimal UUID

#### Example

```javascript
RandomEntities.uuid()
// => "ba4eb3e4-9d35-424c-9513-f7cbbc69070b"
```

### `integer`

Generates a random whole-number integer between the given limits, ceiling optionally inclusive. Limits may be positive or negative numbers, but may not be logically reversed (eg min: 4, max: 2)

> `RandomEntities.integer(min, max, inclusive)`
>
> *Module import:* `random-entities/integer`

#### Arguments

- `min <Number>` | **required**

  The lowest possible result, inclusively

- `max <Number>` | **required**

  The highest possible result, exclusively by default

- `inclusive <Boolean>` | *optional* | *default:* `false`

  If `true`, the highest possible number is included in the result pool

#### Returns

`<Number>` 

A random number between the given minimum and maximum, exclusively by default.

#### Example

```javascript
RandomEntities.integer(0, 100)
// => 41
RandomEntities.integer(1, 2)
// => always 1 since 2 is exclusive
RandomEntities.integer(15, 20, true)
// => 17 but could return 20
```

### `float`

Generates a random floating-point number between the given limits, ceiling optionally inclusive. Limits may be positive or negative numbers, but may not be logically reversed (eg min: 0.4, max: 0.6)

> `RandomEntities.float(min, max, prevision, inclusive)`
>
> *Module import:* `random-entities/float`

#### Arguments

- `min <Number>` | **required**

  The lowest possible result, inclusively

- `max <Number>` | **required**

  The highest possible result, exclusively by default

- `max <Number>` | *optional* | *default:* `2`

  The number of decimals to keep.

- `inclusive <Boolean>` | *optional* | *default:* `false`

  If `true`, the highest possible number is included in the result pool.

#### Returns

`<Number>` 

A random floating-point number between the given minimum and maximum, exclusively by default.

#### Example

```javascript
RandomEntities.float(2, 3)
// => 2.07
RandomEntities.float(200, 300, 6)
// => 268.887126
RandomEntities.float(0, 10, 1, true)
// => 8.5 but could return 10.0
```

### `fromArray`

Selects a random entry from an array or string.

> `RandomEntities.fromArray(list)`
>
> *Module import:* `random-entities/from-array`

#### Arguments

- `list <Array|String>` | **required**

  The array from which to select an item.

#### Returns

`<Any>` 

A random selection from the array.

#### Example

```javascript
RandomEntities.fromArray(['one', 'two', 1, 2])
// => "two"
RandomEntities.fromArray([{ prop: 'value' }, [1, 2, 3]])
// => { prop: "value" }
RandomEntities.fromArray('antidisestablishmentarianism')
// => "r"
```

