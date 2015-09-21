(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(window, console){
	if (console || (window && window.console)) return

	var noop = function(){},
			methods = [
				'assert',
				'clear',
				'count',
				'debug',
				'dir',
				'dirxml',
				'error',
				'group',
				'groupCollapsed',
				'groupEnd',
				'info',
				'log',
				'profile',
				'profileEnd',
				'time',
				'timeEnd',
				'timeStamp',
				'trace',
				'warn'
			]

	window.console = {}

	for (var index = 0, length = methods.length; index < length; index++)
		window.console[methods[index]] = noop
}
},{}],2:[function(require,module,exports){
(function (window, console) {
	require('../console-noop.js')(window, console);
})(window, window.console);
},{"../console-noop.js":1}]},{},[2])