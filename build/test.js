const RandomEntities = require('../random-entities')

console.log('\n[ Starting tests ]\n')

let pass = [
  test('id-numeric', RandomEntities.id, [], res => /^[a-z0-9]{8}$/.test(res)),
  test('id-alpha', RandomEntities.id, [12, true], res => /^[a-z]{12}$/.test(res)),
  test('uuid', RandomEntities.uuid, [], res => /^[^-]{8}-[^-]{4}-4[^-]{3}-[^-]{4}-[^-]{12}$/.test(res)),
  test('char', RandomEntities.char, [], res => /^[a-z]$/.test(res)),
  test('float', RandomEntities.float, [2.1, 2.9], res => 2.1 <= res && res <= 2.9),
  test('integer', RandomEntities.integer, [99, 100], res => res === 99),
  test('generate', RandomEntities.generate, [], res => 0 < res && res < 1),
  test('fromArray', RandomEntities.fromArray, [['one', 'two', 'three']], res => typeof res === 'string' && /one|two|three/.test(res))
].every(result => result)

function test(name, fn, args, ev) {
  let output = fn(...args)
  let passes = !!ev(output)
  console.log(name, ((passes) ? 'passed' : 'failed'), '->', output)
  return passes
}

console.log((pass) ? '\n[ All tests passed ]' : '\n[ One or more tests failed ]')
