const test = (name, fn, args, test) => {
  console.log(name, ((!!test(fn(...args))) ? 'passed' : 'failed'))
}

test('uid', CryptoHelpers.uid, [], res => /^[a-z0-9]{8}$/.test(res))
test('guid', CryptoHelpers.guid, [], res => /^[^-]{8}-[^-]{4}-4[^-]{3}-[^-]{4}-[^-]{12}$/.test(res))
test('alpha', CryptoHelpers.alpha, [8, true], res => /^[A-Z]{8}$/.test(res))
test('float', CryptoHelpers.float, [2.1, 2.9], res => 2.1 <= res && res <= 2.9)
test('integer', CryptoHelpers.integer, [99, 100], res => res === 99)
test('generator', CryptoHelpers.generator, [], res => 0 < res && res < 1)
test('fromArray', CryptoHelpers.fromArray, [['one', 'two', 'three']], res => typeof res === 'string' && /one|two|three/.test(res))
