// Check if arrow function is supported
function arrowCheck() {
    "use strict";

    try { eval("var foo = (x)=>x+1"); }
    catch (e) { return false; }
    return true;
}

var button = document.getElementById('button');

if (arrowCheck()) {
	// If arrow function is supported, use a promise
	button.addEventListener('click', () => {
        alert('click');
    });

} else {
	// If arrow function is not supported, use a callback
	button.addEventListener('click', function() {
        alert('click');
    });
}