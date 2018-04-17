import fromArray from './from-array'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export default (length = 1) =>
	Array(length)
		.fill(alphabet)
		.map(alpha => fromArray(alpha))
		.join('')
