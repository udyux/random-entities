import generate from './core-rng'

export default (min, max, inclusive) =>
  (generate() * (max - min + ~~(inclusive)) | 0) + min
