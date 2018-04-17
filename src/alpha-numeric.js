import int from './integer'
import alpha from './alpha'
import fromArray from './from-array'

export default (length, uppercase) => {
	let result = ''
	if (!length) length = 8
	else if (typeof length === 'boolean') [length, uppercase] = [8, length]
	for (let i = 0; i < length; i++) result += !i ? alpha() : fromArray([alpha(), int(0,10)])
	return uppercase ? result.toUpperCase() : result
}
