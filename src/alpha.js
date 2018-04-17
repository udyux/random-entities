import fromArray from './from-array'

export default (length, uppercase) => {
	const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let result = ''
	if (!length) length = 1
	else if (typeof length === 'boolean') [length, uppercase] = [1, length]
	for (let i = 0; i < length; i++) result += fromArray(alpha)
	return uppercase ? result.toUpperCase() : result
}
