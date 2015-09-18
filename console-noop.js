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