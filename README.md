# JZZ-input-Kbd

Virtual piano controls for your MIDI projects

[![windows](http://jazz-soft.github.io/img/windows.jpg)](https://jazz-soft.net/doc/JZZ/)
[![mocos](http://jazz-soft.github.io/img/macos.jpg)](https://jazz-soft.net/doc/JZZ/)
[![linux](http://jazz-soft.github.io/img/linux.jpg)](https://jazz-soft.net/doc/JZZ/)
[![ios](http://jazz-soft.github.io/img/ios.jpg)](https://jazz-soft.net/doc/JZZ/)
[![android](http://jazz-soft.github.io/img/android.jpg)](https://jazz-soft.net/doc/JZZ/)

Keyboard, mouse and multitouch support.
Custom styles.
Ready for responsive design.

[![kbd](http://jazz-soft.github.io/img/kbds.png)](http://jazz-soft.github.io/modules/knobs/index.html)

## Install

[**npm install jzz-input-kbd**](https://www.npmjs.com/package/jzz-input-kbd)  
**bower install jzz-input-kbd**  
or get full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-input-Kbd)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.input.Kbd.js"></script>
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
