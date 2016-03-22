# Opdracht 3.1 - Contact lijst

### Use case
Ik wil in een lijst contacten kunnen zoeken, en details kunnen bekijken.

De web-app die ik voor deze opdracht gemaakt heb, bestaat uit een lijst contacten die bij het klikken van een contactperoon openklapt voor meer informatie. Hierin zitten de volgende functionaliteiten:

### Functionaliteiten

###### Sticky position
Position sticky zet een element op position fixed wanneer het de viewport in komt en op relative wanneer het de viewport verlaat. Deze functionaliteit heb ik toegepast op het moment dat een contactpersoon openklapt voor meer informatie en om de huide letter te laten zien.

Browser support:
![alt tag](https://github.com/RaymondKorrel/bt/blob/master/opdracht3-1/static/img/sticky-bs.jpg)

###### Drawer (in-en-uitklap systeem)
Wanneer op een contactpersoon wordt geklikt, klapt deze open en wordt meer informatie getoond. Dit systeem is op meerdere manieren te maken. De beste manier is uiteraard onderzocht en is te zien in het proces:

### Proces

###### Rendering
De eerste stap is het renderen van de contactpersonen. De contactpersonen staan als objecten in een array in een apart bestand en hoeven dus niet meer extern worden opgehaald. 

In dit geval is het niet handig om het renderen van de data met een library te doen omdat de meeste libraries maar een beperkt aantal browsers ondersteunen. Daarom gebruik ik createElement en appendChild omdat deze door elke browser wordt ondersteund:

```javascript
// Create the element
var h2 = document.createElement('h2')
h2.setAttribute('class', 'contact-name');
var name = document.createTextNode(name); 
// Append it in de HTML
li.appendChild(h2).appendChild(name);
```

De code is lelijk, maar het werkt overal.

###### Styling the list
Voor de styling van de list wil ik de <img> tag de hoogte laten bepalen van de <li> tag. Normaal zou ik dat zo doen:

```css
li {
	height: max-content;
}
```

Browser support:
![alt tag](https://github.com/RaymondKorrel/bt/blob/master/opdracht3-1/static/img/max-content.jpg)

Jammer genoeg wordt deze feature nog niet overal ondersteund. Daarom de volgende oplossing:
```css
li {
	overflow: auto;
	height: auto;
}

li > img {
	width: 20%;
	padding: 10px;
	float: left;
}
```

Om de lijst items te kunnen onderscheiden, gebruik ik, om het item, een andere kleur. Dat doe ik op de volgende manier:
```css
ul > li:nth-of-type(even) {
	background: #F9F9F9;
}
```

Browser support:
![alt tag](https://github.com/RaymondKorrel/bt/blob/master/opdracht3-1/static/img/selector.jpg)

Maar de nth-of-type() selector wordt niet ondersteund in IE8 en onder. Om toch onderscheid te kunnen maken gebruik ik een border-bottom van dezelfde kleur als de achtergrond van het item. Hierdoor zie je de border alleen als de nth-of-type() selector niet ondersteund wordt.
```css
ul > li {
	border-bottom: 2px solid #F9F9F9;
}
```

Tijdens het stijlen van de contactenlijst kwam ik achter een rare bug in IE6 en IE7. De browser paste geen CSS toe aan de dynamisch toegevoegde HTML. Dit kwam omdat ik de de class op een verkeerde manier toevoegde:
```javascript
elem.setAttribute('class','list-item');
```

Dit wordt door IE6 en IE7 niet herkent terwijl het de feature wel zou moeten ondersteunen. De oplossing:
```javascript
elem.className = 'list-item';
```

###### Drawer
Om de drawer te kunnen maken, moeten eerst alle listitems geselecteerd worden. Dit kan niet met querySelector omdat deze niet ondersteund worden in IE8 en lager.
```javascript
var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {
	if (listItems[i].className.indexOf('contact') != -1) {
		// Do something with each listitem
	}
}
```

Op deze manier selecteer je alle listitems met de class 'contact' zonder querySelector, en werkt het nog steeds in alle browsers. De volgende stap is een click event maken. addEventListener wordt niet ondersteund door alle browsers, dus gebruik ik de 'onclick' methode:
```javascript
listItems[i].onclick = function() {
	// Do something when clicked
}
```

Nu moet worden herkent wanneer het geklikte element opengeklapt is en wanneer niet. Hierna moeten er classes worden toegevoegd en verwijderd. Normaal doe ik dat met classList:
```javascript
// Add
elem.add.classList('class');
// Remove
elem.remove.classList('class');
```

Browser support:
![alt tag](https://github.com/RaymondKorrel/bt/blob/master/opdracht3-1/static/img/classlist.jpg)

ClassList wordt niet ondersteund in alle IE en Opera Mini browsers.
```javascript
// Add
elem.className = ' class';
// Remove
var classes = elem.className;
var newClasses = classes.replace('class', 'newClass');
elem.className = newClasses;
```

Het in en uitklap systeem werkt nu in alle browsers! Tijd voor enhancement: animaties.

```css
.show {
	visibility: visible;
	height: 220px;
	transition: height 0.3s;
	-webkit-transition: height 0.3s;
	-moz-transition: height 0.3s;
}

.hide {
	visibility: hidden;
	height: 0px;
	padding: 0;
	overflow: hidden;
	transition: height 0.3s;
	-webkit-transition: height 0.3s;
	-moz-transition: height 0.3s;
}
```

Browser support:
![alt tag](https://github.com/RaymondKorrel/bt/blob/master/opdracht3-1/static/img/transitions.jpg)

Wanneer de browser 'transition' niet ondersteunt, zal er geen animatie plaatsvinden en komt de informatie instant tevoorschijn.

###### Position sticky
De listitems moeten nu nog worden gecategoriseerd op de eerste letter. Voor elke eerste letter maak ik een titel die een position sticky krijgt waardoor je altijd ziet bij welke letter je bent. Maar ook als een item is opengeklapt, is het fijn als tijdens het scrollen de naam van de persoon bovenaan blijft hangen zodat je niet vergeet van wie de informatie is. Met position sticky kan dit doel gemakkelijk bereikt worden.

```css
.letter {
	position: sticky;
	position: -webkit-sticky;
	position: -moz-sticky;
	position: -ms-sticky;
	position: -o-sticky;
	top: 32px;
}
```

De web-app werkt nu in alle browsers!