// Put everything in an IFFE so there are no global variables
(function() {
	'use strict'; // Use strict mode so no global variables can be declared

	// The application object
	var app = (function() {
		var init = function() {
			drawer.init();
		}
		// Return public functions
		return {
			init: init
		}
	}());

	// Drawer function
	var drawer = (function() {
		var init = function() {
			events();
		};
		var events = function() {
			var listItems = document.getElementsByTagName('li');

			for (var i = 0; i < listItems.length; i++) {
				if (listItems[i].className.indexOf('contact') != -1) {
					listItems[i].getElementsByTagName('div')[1].className += ' hide';
					listItems[i].onclick = function() {
						var child = this.getElementsByTagName('div')[1];
						drawer(child)
					}
				}
			}
		};
		var drawer = function(elem) {
			if(elem.className.indexOf('hide') != -1) {
				var classes = elem.className;
				var newClasses = classes.replace('hide', 'show');
				elem.className = newClasses;
			} else {
				var classes = elem.className;
				var newClasses = classes.replace('show', 'hide');
				elem.className = newClasses;
			}
		}
		// Return public functions
		return {
			init: init
		};
	}());

	// Fire app.init
	app.init();

})();




// SORTED 
// var sorted = contacts.sort(function IHaveAName(a, b) { // non-anonymous as you ordered...
//     return b.user.name.first < a.user.name.first ?  1 // if b should come earlier, push a to end
//          : b.user.name.first > a.user.name.first ? -1 // if b should come later, push a to begin
//          : 0;                   // a and b are equal
// });
// console.log(JSON.stringify(sorted))