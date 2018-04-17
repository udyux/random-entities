import fromArray from './from-array'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export default (length = 1, uppercase = false) =>
	Array(length)
		.fill((uppercase) ? alphabet.toUpperCase() : alphabet)
		.map(alpha => fromArray(alpha))
		.join('')
