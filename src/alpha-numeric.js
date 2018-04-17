import int from './integer'
import alpha from './alpha'
import fromArray from './from-array'

// return a string of alphanumeric characters
export default (length = 8, uppercase = false) =>
	Array(length)
		.fill(null)
		.map((n, i) => (!i) ? alpha(1, uppercase) : fromArray([alpha(1, uppercase), int(0, 10)]))
		.join('')
