# Opdracht 2.1 - Feature detection

## HTML

#### Audio
The audio tag let's you play audio live on a webpage.

###### Browser support
Many browsers support the audio tag, but wich extentions?
- MP3 is supported in all browsers that support the audio tag
- OGG is not supported in IE and Safari

###### Fallback
With the source tag you can load multiple audio files. If the first one is not supported, the next file will load. This way i can create a fallback for the OGG file so it will load the MP3 file in Safari and IE.

```html
<audio>
	<source src="snap.ogg" type="audio/ogg">
	<source src="snap.mp3" type="audio/mpeg">
	<a href="snap.mp3">Download mp3</a>
</audio>
```
#### Picture
The picture tag let's you load multiple images on different screen widths. 

###### Browser support


###### Fallback


```html
<picture>
    <source srcset="img-small.jpg" media="(max-width: 800px)">
    <source srcset="img-big.jpg">
    <img src="img-medium.jpg" alt="img">
</picture>
```