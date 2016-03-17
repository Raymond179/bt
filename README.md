# Browser technologies

## Opdracht 1.1
Zie presentaties in de map opdracht 1.1

## Opdracht 1.2
#### Problemen:

##### Afbeeldingen
- Navigatie icons in png. Verdwijnen dus als afbeeldingen zijn uitgeschakeld.

###### Oplossing
Png's vervangen voor svg's zodat de iconen niet als afbeeldingen worden gezien.
```html
<img src="img.svg" alt="svg">
```

- Geen alt attributen. Het is dus niet duidelijk wat de afbeelding had moeten zijn.

###### Oplossing
Alt attributen toevoegen bij alle afbeeldingen.
```html
<img src="img.jpg" alt="Azaleastraat 44 Amsterdam">
```

##### Muis/trackpad
- Veel items niet 'tabbaar'. Niet mogelijk om bij sommige elementen te komen.

###### Oplossing
Betere semantiek. Bijvoorbeeld klikbare items een a tag geven
```html
<a href="next-page">
  <div> Ga naar volgende pagina </div>
</a>
```

- Elementen werken niet op enter, maar alleen op click.

###### Oplossing
De click events verplaatsen naar de a tags die om het element staan.
```javascript
var button = document.querySelector('a[href="next-page"]');
button.addEventListener('click', clickFunction);
```

##### Screenreader
- Geen alt attributen. De screenreader weet dus niet wat voor afbeelding het is.

###### Oplossing
Alt attributen toevoegen bij alle afbeeldingen.
```html
<img src="img.svg" alt="svg">
```

##### Kleur
- Weinig contrast tussen achtergrond en tekst. Moeilijk te lezen zonder kleur.


###### Oplossing
De witte tekst op de gele achtergrond zwart maken, of de achtergrondkleur donkerder maken.
```css
#info-bar {
  background: darkyellow;
  color: white;
}
```

http://raymondkorrel.github.io/bt/opdracht1-2
