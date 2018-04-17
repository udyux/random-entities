import generate from './generate'

export default (min, max, precision = 2) =>
  parseFloat(((generate() * (max - min)) + min).toFixed(parseInt(precision)))
