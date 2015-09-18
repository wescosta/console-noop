'use strict'

describe('console-noop (no operation)', function(){
	var consolenoop = require('../console-noop')
	
	describe('is a fallback for the most common console methods', function(){
		var window

		beforeAll(function(){
			window = {}
			window.console = undefined

			consolenoop(window, window.console)
		})

		it('console should be defined after console-noop loads on browsers which does not support console', function(){
			expect(window).toBeDefined()
			expect(window.console).toBeDefined()
		})

		it('should have a noop function for console.assert', function(){
			expect(window.console.assert).toBeDefined()
		})

		it('should have a noop function for console.clear', function(){
			expect(window.console.clear).toBeDefined()
		})

		it('should have a noop function for console.count', function(){
			expect(window.console.count).toBeDefined()
		})

		it('should have a noop function for console.debug', function(){
			expect(window.console.debug).toBeDefined()
		})

		it('should have a noop function for console.dir', function(){
			expect(window.console.dir).toBeDefined()
		})

		it('should have a noop function for console.dirxml', function(){
			expect(window.console.dirxml).toBeDefined()
		})

		it('should have a noop function for console.error', function(){
			expect(window.console.error).toBeDefined()
		})

		it('should have a noop function for console.group', function(){
			expect(window.console.group).toBeDefined()
		})

		it('should have a noop function for console.groupCollapsed', function(){
			expect(window.console.groupCollapsed).toBeDefined()
		})

		it('should have a noop function for console.groupEnd', function(){
			expect(window.console.groupEnd).toBeDefined()
		})

		it('should have a noop function for console.info', function(){
			expect(window.console.info).toBeDefined()
		})

		it('should have a noop function for console.log', function(){
			expect(window.console.log).toBeDefined()
		})

		it('should have a noop function for console.profile', function(){
			expect(window.console.profile).toBeDefined()
		})

		it('should have a noop function for console.profileEnd', function(){
			expect(window.console.profileEnd).toBeDefined()
		})

		it('should have a noop function for console.time', function(){
			expect(window.console.time).toBeDefined()
		})

		it('should have a noop function for console.timeEnd', function(){
			expect(window.console.timeEnd).toBeDefined()
		})

		it('should have a noop function for console.timeStamp', function(){
			expect(window.console.timeStamp).toBeDefined()
		})

		it('should have a noop function for console.trace', function(){
			expect(window.console.trace).toBeDefined()
		})

		it('should have a noop function for console.warn', function(){
			expect(window.console.warn).toBeDefined()
		})

	})

	describe('when the browser natively supports the console', function(){
		var window,
				browserConsole = {specialMethod: function awesomeness(){}}

		beforeEach(function(){
			window = {}
			window.console = browserConsole
		})

		it('should not re-define the browsers\' console', function(){
			consolenoop(window, window.console)

			expect(window.console).toBeDefined()
			expect(window.console).toBe(browserConsole)
			expect(window.console.specialMethod).toBeDefined()
		})

		it('should not try re-define window.console', function(){
			consolenoop(window)
			expect(window.console).toBe(browserConsole)
		})
	})
})