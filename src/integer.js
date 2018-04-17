import generate from './generate'

export default (min, max, inc) =>
  (generate() * (max - min + ~~(inc)) | 0) + min
