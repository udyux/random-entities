export default () =>
  'xxyyxyxy'.replace(/[xy]/g, (char) =>
    ((char === 'x') ? (Math.random() * 16 | 0) : ((Math.random() * 16 | 0) & 0x3 | 0x8))
      .toString(16))
