import generate from './generate'
import fromArray from './from-array'
import char from './char'

export default (count = 8, alpha = false) => {
  let length = (count < 4) ? 4 : count
  if (alpha) return char(length)

  return char() + ('xyy' + Array(length - 4).fill('xy').map(xy => fromArray(xy)).join(''))
    .replace(/[xy]/g, (xy) =>
      ((xy === 'x') ? (generate() * 16 | 0) : ((generate() * 16 | 0) & 0x3 | 0x8)).toString(16))
}
