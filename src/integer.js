import generator from './generator'

export default (min, max, inc) =>
  (generator() * (max - min + ~~(inc)) | 0) + min
