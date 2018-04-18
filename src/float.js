import generate from './core-rng'

export default (min, max, precision = 2, inclusive = false) =>
  parseFloat(((generate() * (max - min + ~~(inclusive))) + min).toFixed(parseInt(precision)))
