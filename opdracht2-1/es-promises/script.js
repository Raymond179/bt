// Check if promise is supported
function promiseCheck() {
    "use strict";

    try { eval("var promise = new Promise(function (x, y) {});"); }
    catch (e) { return false; }
    return true;
}


if (promiseCheck()) {
	// If promises are supported, use a promise
	var promiseTest = function() {
		var promise = new Promise(function(resolve, reject) {
			setInterval(function(){ 
				resolve('hoi');
			}, 3000);
		});	
		return promise;
	}

	promiseTest().then(function(result) {
		alert(result);
	})

} else {
	// If promises are not supported, use a callback
	var promiseTest = function(callback) {
		setInterval(function(){ 
			callback('hoi');
		}, 3000);
	}

	var callback = function(result) {
		alert(result)
	}
	promiseTest(callback)
}