// Put everything in an IFFE so there are no global variables
(function() {
	'use strict'; // Use strict mode so no global variables can be declared

	// The application object
	var app = (function() {
		var init = function() {
			renderContacts.init();
		}
		// Return public functions
		return {
			init: init
		}
	}());

	// Render function
	var renderContacts = (function() {
		var letter = [];
		var init = function() {
			render()
		};
		var capitalize = function(str) {
			return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}; // Source: http://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
		var render = function() {
			for (var i = 0; i < contacts.length; i++) {
				var info = contacts[i].user;
				var first = info.name.first;	
				var last = info.name.last;
				var name = capitalize(first + ' ' + last);
				var email = info.email;
				var picture = info.picture.thumbnail;
				var adres = info.location.street + ', ' + info.location.city;
				var phone = info.cell;

				var ul = document.getElementById('contact-list');

				// FIRST CHARACTER
				var firstLetter = info.name.first.charAt(0);	
				if (letter[0] != firstLetter) {
					// LETTER
					var div0 = document.createElement('li');
					div0.className = 'letter';
					var firstt = document.createTextNode(firstLetter.toUpperCase());
					ul.appendChild(div0).appendChild(firstt);
				}
				letter = [];
				letter.push(firstLetter);

				// LI
				var li = document.createElement('li');
				li.className = 'contact';
				li.tabIndex = '0'
				// TITLE
				var div2 = document.createElement('div');
				div2.className = 'contact-title';
				// NAME
				var h2 = document.createElement('h2')
				h2.className = 'contact-name';
				var name = document.createTextNode(name);
				// IMG
				var img = document.createElement('img');
				img.className = 'contact-img';
				img.src = picture;
				img.alt = first;
				// DIV
				var div = document.createElement('div')
				div.className = 'contact-info hide';
				// INFO
				var h3 = document.createElement('h3')
				var info = document.createTextNode('Info');
				// PHONE
				var p = document.createElement('p')
				var img2 = document.createElement('img')
				img2.src = 'static/img/phone.jpg';
				img2.alt = 'Phone icon';
				var number = document.createTextNode(phone);
				// EMAIL
				var p2 = document.createElement('p')
				var img3 = document.createElement('img')
				img3.src = 'static/img/email.jpg';
				img3.alt = 'Email icon'
				var email = document.createTextNode(email);
				// ADRESS
				var p3 = document.createElement('p')
				var img4 = document.createElement('img')
				img4.src = 'static/img/adress.jpg';
				img4.alt = 'Adress icon';
				var adres = document.createTextNode(adres);
				// Append
				li.appendChild(div2).appendChild(img);
				div2.appendChild(h2).appendChild(name);
				div.appendChild(h3).appendChild(info);

				p.appendChild(img2);
				p.appendChild(number);

				p2.appendChild(img3);
				p2.appendChild(email);

				p3.appendChild(img4);
				p3.appendChild(adres);

				div.appendChild(p);
				div.appendChild(p2);
				div.appendChild(p3);
				li.appendChild(div);
				ul.appendChild(li); 
			}
			drawer.init();
		}
		// Return public functions
		return {
			init: init
		};
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
					listItems[i].onclick = function() {
						var child = this.getElementsByTagName('div')[1];
						drawer(child)
					}
				}

				if (listItems[i].className.indexOf('contact') != -1) {
					listItems[i].onenter = function() {
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