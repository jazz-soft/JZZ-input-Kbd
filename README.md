# JZZ-input-Kbd

![windows](https://jazz-soft.github.io/img/windows.jpg)
![macos](https://jazz-soft.github.io/img/macos.jpg)
![linux](https://jazz-soft.github.io/img/linux.jpg)
![ios](https://jazz-soft.github.io/img/ios.jpg)
![android](https://jazz-soft.github.io/img/android.jpg)  
[![npm](https://img.shields.io/npm/v/jzz-input-kbd.svg)](https://www.npmjs.com/package/jzz-input-kbd)
[![npm](https://img.shields.io/npm/dt/jzz-input-kbd.svg)](https://www.npmjs.com/package/jzz-input-kbd)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/jzz-input-kbd/badge)](https://www.jsdelivr.com/package/npm/jzz-input-kbd)

## Virtual piano controls for your MIDI projects

Keyboard, mouse and multitouch support.
Custom styles.
Ready for responsive design.

[![kbd](https://jazz-soft.github.io/img/kbds.png)](https://jazz-soft.github.io/modules/knobs/index.html)

## Install

`npm install jzz-input-kbd`  
or `bower install jzz-input-kbd`  
or `yarn add jzz-input-kbd`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-input-Kbd)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.input.Kbd.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/jzz"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-input-kbd"></script>
    //...

##### CommonJS

    var JZZ = require('jzz');
    require('jzz-input-kbd')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.input.Kbd'], function(JZZ, dummy) {
      // ...
    });

## Classes

[**JZZ.input.Kbd**](https://jazz-soft.net/doc/JZZ/inputKbd.html) - Virtual HTML piano keyboard  
[**JZZ.input.ASCII**](https://jazz-soft.net/doc/JZZ/inputASCII.html) - Map ASCII keys to MIDI  
[**JZZ.input.Slider**](https://jazz-soft.net/doc/JZZ/inputKnobs.html) - Slider MIDI control  
[**JZZ.input.Pad**](https://jazz-soft.net/doc/JZZ/inputKnobs.html) - Two-dimensional MIDI control

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).
