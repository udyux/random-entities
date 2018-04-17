import generate from './core-rng'

export default (min, max, precision = 2) =>
  parseFloat(((generate() * (max - min)) + min).toFixed(parseInt(precision)))
