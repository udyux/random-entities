import rngPolyfill from 'polyfill-crypto.getrandomvalues'

const native = (!window) ? null : window.crypto || window.msCrypto
const rng = (!native) ? rngPolyfill : native.getRandomValues.bind(native)

export default () =>
    Math.pow(2,-52) * rng(new Uint32Array(2))
      .reduce((mantissa, n, i) =>
        ((!i) ? n * Math.pow(2,20) : n >>> 12) + mantissa, 0)
