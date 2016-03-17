# Opdracht 2.2

### Core functionaliteit
Mijn funda web-app bestaat uit een soort 'tinder' systeem waarbij je een huis kan liken of disliken. De gelikede huizen komen in je lijst te staan. De core functionaliteit is het overzichtscherm, waarin je de huizen ziet en kan kiezen of je hem wil bewaren of niet. Hiervoor heb ik de app ontleed en geminimaliseerd tot alleen deze functionaliteit.

### Proces
Ik ben begonnen met het opnieuw uitwerken van de functionaliteit. De app was namelijk opgebouwd vanuit het idee om te swipen en met fancy animaties de afbeeldingen weg te laten vliegen.

###### 1. Uitgaan van de functionaliteit
Als eerst moet de web-app simpelweg werken op een klik van de ja of nee knop. Geen fancy animaties, geen swipes, gewoon een klik en dan de volgende laten zien.

```javascript
el.circle.addEventListener("click", nextItem);
};
```

Hier begonnen de problemen al. In IE8 worden addEventListeners niet ondersteund, waarop ik de volgende fallback gevonden heb:
```javascript
if (el.circle.addEventListener) {
    el.circle.addEventListener("click", nextItem);
}
else {
	el.circle.attachEvent("onclick", nextItem);
}
```

bron: http://stackoverflow.com/questions/9769868/addeventlistener-not-working-in-ie8

Fijn, het werkt. Volgende stap:

###### 2. Progressive enhancement: Animaties
Nu is het de bedoeling animaties toe te voegen en het in zo veel mogelijk browsers te laten werken. Na het plakken van mijn oude animatie code, zag ik dat het werkte in IE10 en IE11. Echter niet in IE9 omdat classList niet wordt ondersteund. Daarop de volgende fallback:

Om een class toe te voegen:
```javascript
house.className += "classname";
```

Om een class te verwijderen:
```javascript
var classes = house.className;
var newClasses = classes.replace('classname', '');
house.className = newClasses;
```

De animatie is een CSS transform die veel browsers niet ondersteunen. Maar dat maakt niet uit, want hij werkt nog wel zonder animatie.

###### 2. Progressive enhancement: Swipen
Voor de swipe events gebruik ik Hammer js die de volgende browsers ondersteund.

![alt tag](https://github.com/RaymondKorrel/bt/opdracht2-2/static/img/hammberbs.jpg)

Maak twee swipe events aan:
```javascript
var mc = new Hammer(el.houses);

mc.on("swipeleft", function(ev) {
	nextItem('moveLeft');
});

mc.on("swiperight", function(ev) {
	nextItem('moveRight');
});
```

Als Hammer js niet ondersteund wordt, zijn alsnog de knoppen te gebruiken.
