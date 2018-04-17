import generate from './core-rng'

export default () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (char) =>
      ((char === 'x') ? generate() * 16 | 0 : ((generate() * 16 | 0) & 0x3 | 0x8))
        .toString(16))
