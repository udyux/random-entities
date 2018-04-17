const crypto = window.crypto.getRandomValues.bind(window.crypto)
  || window.msCrypto.getRandomValues.bind(window.msCrypto)

export default () =>
  (!crypto)
    ? Math.random()
    : Math.pow(2,-52) * crypto(new Uint32Array(2))
      .reduce((mantissa, n, i) =>
        ((!i) ? n * Math.pow(2,20) : n >>> 12) + mantissa, 0)
