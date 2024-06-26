# JZZ-input-Kbd

![windows](https://jazz-soft.github.io/img/windows.jpg)
![macos](https://jazz-soft.github.io/img/macos.jpg)
![linux](https://jazz-soft.github.io/img/linux.jpg)
![ios](https://jazz-soft.github.io/img/ios.jpg)
![android](https://jazz-soft.github.io/img/android.jpg)  
[![npm](https://img.shields.io/npm/v/jzz-input-kbd.svg)](https://www.npmjs.com/package/jzz-input-kbd)
[![npm](https://img.shields.io/npm/dt/jzz-input-kbd.svg)](https://www.npmjs.com/package/jzz-input-kbd)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/jzz-input-kbd/badge)](https://www.jsdelivr.com/package/npm/jzz-input-kbd)
[![build](https://github.com/jazz-soft/JZZ-input-Kbd/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-input-Kbd/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/JZZ-input-Kbd/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-input-Kbd?branch=master)

## Virtual piano controls for your MIDI projects

Keyboard, mouse and multitouch support.
Custom styles.
Ready for responsive design.

[![kbd](https://jazz-soft.github.io/img/kbds.png)](https://jazz-soft.github.io/modules/knobs/index.html)

## Install

`npm install jzz-input-kbd`  
or `yarn add jzz-input-kbd`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-input-Kbd)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.input.Kbd.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-input-kbd"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-input-kbd"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-input-kbd')(JZZ);
//...
```

##### TypeScript / ES6

```ts
import { JZZ } from 'jzz';
import { Kbd } from 'jzz-input-kbd';
Kbd(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.input.Kbd'], function(JZZ, dummy) {
  // ...
});
```

## Classes

[**JZZ.input.Kbd**](https://jazz-soft.net/doc/JZZ/inputKbd.html) - Virtual HTML piano keyboard  
[**JZZ.input.ASCII**](https://jazz-soft.net/doc/JZZ/inputASCII.html) - Map ASCII keys to MIDI  
[**JZZ.input.Slider**](https://jazz-soft.net/doc/JZZ/inputKnobs.html) - Slider MIDI control  
[**JZZ.input.Pad**](https://jazz-soft.net/doc/JZZ/inputKnobs.html) - Two-dimensional MIDI control

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
