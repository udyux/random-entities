import generate from './core-rng'

export default (min, max, inc) =>
  (generate() * (max - min + ~~(inc)) | 0) + min
