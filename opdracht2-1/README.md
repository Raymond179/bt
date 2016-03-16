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

http://raymondkorrel.github.io/bt/opdracht2-1/html-audio/

#### Picture
The picture tag let's you load multiple images on different screen widths. 

###### Browser support
The picture tag is not supported in all IE browsers and Safari 9 and below.

###### Fallback
Inside the picture tag you can set source tags where you specify wich image should load at wich width. The image tag at the bottom is the fallback. It will load that image if the picture tag is not supported

```html
<picture>
    <source srcset="img-small.jpg" media="(max-width: 800px)">
    <source srcset="img-big.jpg">
    <img src="img-medium.jpg" alt="img">
</picture>
```

http://raymondkorrel.github.io/bt/opdracht2-1/html-picture/

## CSS

#### Flexbox
With flex you can easily manage the layout of items.

###### Browser support
Flexbox is not supported in IE 9 and below.

###### Fallback
When flex is 'enabled', properties like float and display inline block don't work. Because of this we can easily create a fallback by setting display inline-block at the child items wich will be activated if flex is not enabled or not supported.

```css
.parent {
	display: flex;
	flex-flow: row wrap;
    justify-content: center;
    text-align: center;
}

.left {
	width: 100px;
	height: 100px;
	background: green;
	display: inline-block
}

.right {
	width: 100px;
	height: 100px;
	background: pink;
	display: inline-block;
}
```

http://raymondkorrel.github.io/bt/opdracht2-1/css-flex/

#### Filter
The filter property let's you put filters over images.

###### Browser support
The filter property is not supported in IE browsers

###### Fallback
For IE browsers there's a 'hack' wich makes a picture grayscale. Although the filter property is not supported this hack will work in all IE browsers:

```css
img {
	filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale"); /* Firefox 10+, Firefox on Android */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
}
```
source: http://www.karlhorky.com/2012/06/cross-browser-image-grayscale-with-css.html

http://raymondkorrel.github.io/bt/opdracht2-1/css-filter/

## ES6

#### Promises
With a Promise you can asynchronously manage your data once it's ready.

###### Browser support
Promises are not supported in IE and Opera Mini

###### Fallback
With the try and catch method it's possible to detect if features are available in the browser. This way we can detect if promises are supported by the browser:

```javascript
function promiseCheck() {
    "use strict";

    try { eval("var promise = new Promise(function (x, y) {});"); }
    catch (e) { return false; }
    return true;
}
```

http://raymondkorrel.github.io/bt/opdracht2-1/es-promises/

#### Arrow functions
Arrow functions are a new way to write functions in ES6

###### Browser support
Arrow functions are not supported in IE, Safari and Opera Mini.

###### Fallback
With the try and catch method it's possible to detect if features are available in the browser. This way we can detect if arrow functions are supported by the browser:

```javascript
function arrowCheck() {
    "use strict";

    try { eval("var foo = (x)=>x+1"); }
    catch (e) { return false; }
    return true;
}
```

http://raymondkorrel.github.io/bt/opdracht2-1/es-functions/