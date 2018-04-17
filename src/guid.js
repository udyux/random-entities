import generator from './generator'

export default () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (char) =>
  	  ((char === 'x') ? generator() * 16 | 0 : ((generator() * 16 | 0) & 0x3 | 0x8))
        .toString(16))
