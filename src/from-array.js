import generate from './generate'

export default (arr) =>
  arr[generate() * arr.length >> 0]
