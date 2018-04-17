import generator from './generator'

export default () =>
  'xxyyxyxy'
    .replace(/[xy]/g, (char) =>
      ((char === 'x') ? (generator() * 16 | 0) : ((generator() * 16 | 0) & 0x3 | 0x8))
        .toString(16))
