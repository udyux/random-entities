import MarsenneTwister from 'mersenne-twister'

const native = (typeof window === 'undefined') ? false : window.crypto || window.msCrypto
const rng = (native) ? native.getRandomValues.bind(native) : new MarsenneTwister()

export default () =>
  (!native)
    ? rng.random()
    : Math.pow(2,-52) * rng(new Uint32Array(2))
      .reduce((mantissa, n, i) =>
        ((!i) ? n * Math.pow(2,20) : n >>> 12) + mantissa, 0)
