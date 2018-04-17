import generate from './core-rng'

export default (arr) =>
  arr[generate() * arr.length >> 0]
