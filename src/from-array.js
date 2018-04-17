import generator from './generator'

export default (arr) =>
  arr[generator() * arr.length >> 0]
