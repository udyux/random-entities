/*! crypto-helpers v0.1.0 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('CryptoHelpers', factory) :
	(global.CryptoHelpers = factory());
}(this, (function () { 'use strict';

var crypto = window.crypto.getRandomValues.bind(window.crypto) || window.msCrypto.getRandomValues.bind(window.msCrypto);

var generator = (function () {
  return !crypto ? Math.random() : Math.pow(2, -52) * crypto(new Uint32Array(2)).reduce(function (mantissa, n, i) {
    return (!i ? n * Math.pow(2, 20) : n >>> 12) + mantissa;
  }, 0);
});

var uid = (function () {
  return 'xxyyxyxy'.replace(/[xy]/g, function (char) {
    return (char === 'x' ? generator() * 16 | 0 : (generator() * 16 | 0) & 0x3 | 0x8).toString(16);
  });
});

var guid = (function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    return (char === 'x' ? generator() * 16 | 0 : (generator() * 16 | 0) & 0x3 | 0x8).toString(16);
  });
});

var fromArray = (function (arr) {
  return arr[generator() * arr.length >> 0];
});

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var alpha = (function () {
	var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	return Array(length).fill(uppercase ? alphabet.toUpperCase() : alphabet).map(function (alpha) {
		return fromArray(alpha);
	}).join('');
});

var float = (function (min, max) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return parseFloat((generator() * (max - min) + min).toFixed(parseInt(precision)));
});

var int = (function (min, max, inc) {
  return (generator() * (max - min + ~~inc) | 0) + min;
});

// return a string of alphanumeric characters
var alphaNumeric = (function () {
	var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
	var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	return Array(length).fill(null).map(function (n, i) {
		return !i ? alpha(1, uppercase) : fromArray([alpha(1, uppercase), int(0, 10)]);
	}).join('');
});

var index = { uid: uid, guid: guid, alpha: alpha, float: float, integer: int, generator: generator, fromArray: fromArray, alphaNumeric: alphaNumeric };

return index;

})));

//# sourceMappingURL=crypto-helpers.js.map
