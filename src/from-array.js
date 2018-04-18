import generate from './core-rng'

export default (list) =>
  list[generate() * list.length >> 0]
