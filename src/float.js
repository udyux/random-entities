import generator from './generator'

export default (min, max, precision = 2) =>
  parseFloat(((generator() * (max - min)) + min).toFixed(parseInt(precision)))
