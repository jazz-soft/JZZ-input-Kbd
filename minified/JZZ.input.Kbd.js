!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t.Kbd=t:"function"==typeof define&&define.amd?define("JZZ.input.Kbd",["JZZ"],t):t(JZZ)}(function(r){if(r){r.input||(r.input={});for(var n,e="1.3.1",h={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},t=0;t<16;t++)h[t]=t;s.prototype.channel=function(t){return void 0===this.mpe&&void 0!==(t=h[t])&&(this.chan=t),this.chan},c.prototype._info=function(t){return{type:"html/javascript",name:i(t,"ASCII"),manufacturer:"virtual",version:e}},c.prototype._openIn=function(i,t){var e=new s(this._arg);e.port=i,e.mpe?(i._orig._mpe||(i._orig._mpe=r.MPE()),i._orig._mpe.setup(e.mpe[0],e.mpe[1]),e.noteOn=function(t){var e=r.MIDI(144+this.chan,t,127);e._mpe=t,i._receive(e)},e.noteOff=function(t){var e=r.MIDI(128+this.chan,t,127);e._mpe=t,i._receive(e)}):(e.noteOn=function(t){i._receive(r.MIDI(144+this.chan,t,127))},e.noteOff=function(t){i._receive(r.MIDI(128+this.chan,t,127))}),i._info=this._info(t),i._close=function(){e._close()},i.channel=function(t){return e.channel(t)},i._resume()},r.input.ASCII=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new c;return i._arg=e,r.lib.openMidiIn(t,i)},r.input.ASCII.register=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new c;return i._arg=e,r.lib.registerMidiIn(t,i)},y.prototype.channel=function(t){if(void 0===this.mpe){t=h[t];if(void 0!==t&&t!=this.chan){for(var e in this.playing)I(this.keys[e],(this.keys[e]._active?this.stl0:this.stl2)[e]),I(this.keys[e],this.locs[e]);this.chan=t}}return this.chan},y.prototype._close=function(){for(var t in this.playing)"M"!=this.playing[t]&&"T"!=this.playing[t]||this.noteOff(t);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},y.prototype.press=function(t){this.keys[t]._active&&(I(this.keys[t],this.stl1[t]),I(this.keys[t],this.locs[t]),this.noteOn(t))},y.prototype.release=function(t){this.keys[t]._active&&(I(this.keys[t],this.stl0[t]),I(this.keys[t],this.locs[t]),this.noteOff(t))},y.prototype.forward=function(t){var e=t[1],i=t.getChannel();if(i>=this.chan&&i<=(this.mpe?this.chan+this.mpe[1]:this.chan)){i=t[0]>>4;if(t.isNoteOn())this.keys[e]&&(this.playing[e]="E",I(this.keys[e],this.stl1[e]),I(this.keys[e],this.locs[e]));else if(t.isNoteOff())this.keys[e]&&(this.playing[e]=void 0,I(this.keys[e],(this.keys[e]._active?this.stl0:this.stl2)[e]),I(this.keys[e],this.locs[e]));else if(11==i&&(120==e||123==e))for(e in this.playing)this.playing[e]=void 0,I(this.keys[e],(this.keys[e]._active?this.stl0:this.stl2)[e]),I(this.keys[e],this.locs[e])}this.emit(t)},y.prototype.clear=function(){for(var t in this.playing)this.playing[t]=void 0,I(this.keys[t],(this.keys[t]._active?this.stl0:this.stl2)[t]),I(this.keys[t],this.locs[t])},y.prototype.findKey=function(t,e,i){for(var s in this.keys)for(var n=document.elementFromPoint(t,e);n;n=n.parentNode)if(this.keys[s]==n)return void(i[s]=!0)},y.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},y.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.stl2={},this.playing={},this.touches={},this.current.wl=parseInt(this.current.wl),this.current.ww=parseInt(this.current.ww),this.current.bl=parseInt(this.current.bl),this.current.bw=parseInt(this.current.bw),this.current.keys)this.createWithKeys(this.current.keys);else{"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}}},y.prototype.createWithKeys=function(t){for(var e in t){var i=r.MIDI.noteValue(t[e][1]),e=t[e][0];"string"==typeof e&&(e=document.getElementById(e)),this.keys[i]=e,this.locs[i]={},this.stl0[i]={},this.stl1[i]={},this.stl2[i]={}}this.setListeners(),this.current.onCreate&&this.current.onCreate.apply(this)},y.prototype.createAt=function(t){t.innerHTML="";var e,i,s=this.current.pos.toUpperCase(),n=E(this.current.from),o=E(this.current.to,!0),h=o-n+1,r=h*this.current.ww+1,a=this.current.wl+1,u=this.current.ww-1,c=this.current.wl-1,p=this.current.bw-1,l=this.current.bl-1,d="N"!=s^!this.current.rev,f="E"!=s^!this.current.rev,v=document.createElement("span");v.style.display="inline-block",v.style.position="relative",v.style.margin="0px",v.style.padding="0px",v.style.borderStyle="none",v.style.userSelect="none",v.style.MozUserSelect="none",v.style.WebkitUserSelect="none",v.style.MsUserSelect="none",v.style.KhtmlUserSelect="none",v.style.cursor="default","E"==s||"W"==s?(v.style.width=a+"px",v.style.height=r+"px"):(v.style.width=r+"px",v.style.height=a+"px");for(var y=0;y<h;y++)b=_(y+n),e=document.createElement("span"),this.keys[b]=e,this.locs[b]=i={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},"E"==s||"W"==s?(i.width=c+"px",i.height=u+"px",i.left="0px",i[f?"top":"bottom"]=this.current.ww*y+"px"):(i.width=u+"px",i.height=c+"px",i.top="0px",i[d?"left":"right"]=this.current.ww*y+"px",i.verticalAlign="top"),this.stl0[b]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[b]={backgroundColor:"#aaa",borderColor:"#000"},this.stl2[b]={backgroundColor:"#fff",borderColor:"#000"},I(e,this.stl0[b]),I(e,i),v.appendChild(e);for(var m=Math.ceil(this.current.ww-3*this.current.bw/4),r=((m+this.current.ww)%2&&m--,_(n)+1),g=_(o),b=r;b<g;b++){var w,k=b%12,x=Math.floor(b/12);if(1==k)w=Math.floor(this.current.ww*(7*x+1.5-n))-m/2-this.current.bw;else if(3==k)w=Math.floor(this.current.ww*(7*x+1.5-n)+m/2);else if(6==k)w=this.current.ww*(7*x+5-n)-Math.floor(this.current.bw/2)-m-this.current.bw;else if(8==k)w=this.current.ww*(7*x+5-n)-Math.floor(this.current.bw/2);else{if(10!=k)continue;w=this.current.ww*(7*x+5-n)-Math.floor(this.current.bw/2)+m+this.current.bw}e=document.createElement("span"),this.keys[b]=e,this.locs[b]=i={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},"E"==s||"W"==s?(i.width=l+"px",i.height=p+"px",i["E"==s?"right":"left"]="0px",i[f?"top":"bottom"]=w+"px"):(i.width=p+"px",i.height=l+"px",i["N"==s?"top":"bottom"]="0px",i[d?"left":"right"]=w+"px"),this.stl0[b]={backgroundColor:"#000",borderColor:"#000"},this.stl1[b]={backgroundColor:"#888",borderColor:"#000"},this.stl2[b]={backgroundColor:"#000",borderColor:"#000"},I(e,this.stl0[b]),I(e,i),v.appendChild(e)}t.appendChild(v),this.current.at=t,this.at=t,this.setListeners(),this.current.onCreate&&this.current.onCreate.apply(this)},y.prototype.setListeners=function(){var t,e,o,i,s=void 0===this.current.active||!!this.current.active;for(t in this.watchButtons=function(t){n=t.buttons},this.mouseUpHandle=(e=this,function(t){d(t=p(t))&&(e.mouseDown=!1)}),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=(o=this,function(t){t.preventDefault();for(var e={},i=0;i<t.touches.length;i++)o.findKey(t.touches[i].clientX,t.touches[i].clientY,e);var s,n={};for(s in e)s in o.touches?n[s]=!0:void 0===o.playing[s]&&(o.playing[s]="T",o.press(s),n[s]=!0);for(s in o.touches)s in e||(o.playing[s]=void 0,o.release(s));o.touches=n}),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[],this.keys)this.mouseDownH[t]=function(e,i){return function(t){l(t)&&!e.playing[i]&&(e.mouseDown=!0,e.playing[i]="M",e.press(i)),n=t.buttons}}(this,t),this.mouseOverH[t]=function(e,i){return function(t){e.mouseDown&&!e.playing[i]&&(e.playing[i]="M",e.press(i)),n=t.buttons}}(this,t),this.mouseOutH[t]=v(this,t),this.mouseUpH[t]=function(e,i){return function(t){d(t=p(t))&&e.mouseDown&&"M"==e.playing[i]&&(e.playing[i]=void 0,e.release(i),e.mouseDown=!1)}}(this,t),this.keys[t].addEventListener("mousedown",this.mouseDownH[t]),this.keys[t].addEventListener("mouseover",this.mouseOverH[t]),this.keys[t].addEventListener("mouseout",this.mouseOutH[t]),this.keys[t].addEventListener("mouseup",this.mouseUpH[t]),this.keys[t].addEventListener("touchstart",this.touchHandle),this.keys[t].addEventListener("touchmove",this.touchHandle),this.keys[t].addEventListener("touchend",this.touchHandle),this.keys[t].addEventListener("touchcancel",this.touchHandle);for(t in this.keys)void 0===this.keys[t]._active&&(this.keys[t]._active=s),this.keys[t].ondragstart=f,this.keys[t].onselectstart=f;!this.resize&&1<this.bins.length&&((i=this).resize=function(){i.onResize()},window.addEventListener("resize",this.resize))},y.prototype.cleanup=function(){for(var t in this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle)),this.keys)this.mouseDownH[t]&&this.keys[t].removeEventListener("mousedown",this.mouseDownH[t]),this.mouseOverH[t]&&this.keys[t].removeEventListener("mouseover",this.mouseOverH[t]),this.mouseOutH[t]&&this.keys[t].removeEventListener("mouseout",this.mouseOutH[t]),this.mouseUpH[t]&&this.keys[t].removeEventListener("mouseup",this.mouseUpH[t]),this.touchHandle&&(this.keys[t].removeEventListener("touchstart",this.touchHandle),this.keys[t].removeEventListener("touchmove",this.touchHandle),this.keys[t].removeEventListener("touchend",this.touchHandle),this.keys[t].removeEventListener("touchcancel",this.touchHandle));this.at&&(this.at.innerHTML="")},y.prototype.settings=function(){return a(this.current)},y.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},y.prototype.enable=function(){for(var t in this.keys)this.keys[t]._active=!0;return this},y.prototype.disable=function(){for(var t in this.keys)this.keys[t]._active=!1;return this},y.prototype.getKey=function(t){var e=new m(this),t=r.MIDI.noteValue(t);return void 0!==this.keys[t]&&e.keys.push(t),e},y.prototype.getKeys=function(t,e){var i,s=new m(this),n=void 0===t?void 0:r.MIDI.noteValue(t),o=void 0===e?void 0:r.MIDI.noteValue(e);for(i in void 0!==n&&void 0!==o&&o<n&&(t=n,n=o,o=t),this.keys)void 0!==n&&i<n||void 0!==o&&o<i||s.keys.push(i);return s},y.prototype.getWhiteKeys=function(t,e){var i,s,n=new m(this),o=void 0===t?void 0:r.MIDI.noteValue(t),h=void 0===e?void 0:r.MIDI.noteValue(e);for(i in void 0!==o&&void 0!==h&&h<o&&(t=o,o=h,h=t),this.keys)void 0!==o&&i<o||void 0!==h&&h<i||1!=(s=i%12)&&3!=s&&6!=s&&8!=s&&10!=s&&n.keys.push(i);return n},y.prototype.getBlackKeys=function(t,e){var i,s,n=new m(this),o=void 0===t?void 0:r.MIDI.noteValue(t),h=void 0===e?void 0:r.MIDI.noteValue(e);for(i in void 0!==o&&void 0!==h&&h<o&&(t=o,o=h,h=t),this.keys)void 0!==o&&i<o||void 0!==h&&h<i||1!=(s=i%12)&&3!=s&&6!=s&&8!=s&&10!=s||n.keys.push(i);return n},m.prototype.setInnerHTML=function(t){for(var e in this.keys)this.piano.keys[this.keys[e]].innerHTML=t;return this},m.prototype.setStyle=function(t,e,i){var s,n,o;for(s in void 0===e&&(e=t),void 0===i&&(i=t),this.keys){for(n in o=this.keys[s],t)this.piano.stl0[o][n]=t[n];for(n in e)this.piano.stl1[o][n]=e[n];for(n in i)this.piano.stl2[o][n]=i[n];I(this.piano.keys[o],(this.piano.playing[o]?this.piano.stl1:this.piano.keys[o]._active?this.piano.stl0:this.piano.stl2)[o]),I(this.piano.keys[o],this.piano.locs[o])}return this},m.prototype.enable=function(){var t,e;for(t in this.keys)e=this.keys[t],this.piano.keys[e]._active=!0,I(this.piano.keys[e],(this.piano.playing[e]?this.piano.stl1:this.piano.stl0)[e]),I(this.piano.keys[e],this.piano.locs[e]);return this},m.prototype.disable=function(){var t,e;for(t in this.keys)e=this.keys[t],this.piano.keys[e]._active=!1,I(this.piano.keys[e],(this.piano.playing[e]?this.piano.stl1:this.piano.stl2)[e]),I(this.piano.keys[e],this.piano.locs[e]);return this},g.prototype._info=function(t){return{type:"html/javascript",name:i(t,"Kbd"),manufacturer:"virtual",version:e}},g.prototype._openIn=function(i,t){var s=new y(this._arg);s.send=function(){i.send.apply(i,arguments)},s.connect=function(){i.connect.apply(i,arguments)},s.create(),s.mpe?(i._orig._mpe||(i._orig._mpe=r.MPE()),i._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(t){var e=r.MIDI(144+this.chan,t,127);e._mpe=t,i._emit(i._filter(e))},s.noteOff=function(t){var e=r.MIDI(128+this.chan,t,127);e._mpe=t,i._emit(i._filter(e))}):(s.noteOn=function(t){i._emit(r.MIDI(144+this.chan,t,127))},s.noteOff=function(t){i._emit(r.MIDI(128+this.chan,t,127))}),s.emit=function(t){i._emit(i._filter(t))},i._info=this._info(t),i._receive=function(t){s.forward(t)},i._close=function(){s._close()},i.settings=function(){return s.settings()},i.getKey=function(t){return s.getKey(t)},i.getKeys=function(t,e){return s.getKeys(t,e)},i.getWhiteKeys=function(t,e){return s.getWhiteKeys(t,e)},i.getBlackKeys=function(t,e){return s.getBlackKeys(t,e)},i.channel=function(t){return s.channel(t)},i.clear=function(){return s.clear()},i._resume()},r.input.Kbd=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new g;return i._arg=e,r.lib.openMidiIn(t,i)},r.input.Kbd.version=function(){return e},r.input.Kbd.register=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new g;return i._arg=e,r.lib.registerMidiIn(t,i)};var u={margin:0,padding:0,width:"100%",height:"100%"};b.prototype.setBase=function(t){t=parseFloat(t),!isNaN(t)&&isFinite(t)&&0<=t&&t<=1&&(this.base=t)},b.prototype.setValue=function(t){if(t=parseFloat(t),!(isNaN(t)||!isFinite(t)||t<0||1<t||t==this.val))return this.val=t,this.num=Math.round(t*(this.lsb||!this.msb?16383:127)),!0},b.prototype.emit=function(t){this.msb?this.lsb?(t.emit([176+this.chan,this.msb,this.num>>7]),t.emit([176+this.chan,this.lsb,127&this.num])):t.emit([176+this.chan,this.msb,this.num]):t.emit([224+this.chan,127&this.num,this.num>>7])},b.prototype.read=function(t){return this.msb||t[0]!=224+this.chan||t[1]!=parseInt(t[1])||t[2]!=parseInt(t[2])?this.msb&&t[0]==176+this.chan&&t[2]==parseInt(t[2])?t[1]==this.msb?(this.lsb?(this.num=t[2]<<7|127&this.num,this.val=this.num/16383):(this.num=127&t[2],this.val=this.num/127),!0):t[1]==this.lsb?(this.num=16256&this.num|127&t[2],this.val=this.num/16383,!0):void 0:void 0:(this.num=t[2]<<7|127&t[1],this.val=this.num/16383,!0)},w.prototype.setInnerHTML=function(t){return this.inner.innerHTML=t,this},w.prototype.setStyle=function(t,e){for(var i in void 0===e&&(e=t),t)this.stl0[i]=t[i];for(i in e)this.stl1[i]=e[i];return I(this.span,this.ctrl.isSelected()?this.stl1:this.stl0),I(this.span,this.stl),this},k.prototype._close=function(){this.at&&(this.at.innerHTML=""),this.mouseUpHandler&&window.removeEventListener("mouseup",this.mouseUpHandler)},k.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},k.prototype.createCurrent=function(){this.at&&(this.at.innerHTML=""),"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},k.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},k.prototype.settings=function(){return a(this.current)},k.prototype.isSelected=function(){return void 0!==this.dragX},k.prototype.restyle=function(){for(var t in this.spans)this.spans[t].setStyle()},k.prototype.onMouseDown=function(t){var e,i;void 0===this.dragX&&(this.dragX=t.clientX,this.dragY=t.clientY,this.mouseMove=(e=this,function(t){n=t.buttons,e.onMouseMove(t)}),this.mouseUp=(i=this,function(t){d(t=p(t))&&(window.removeEventListener("mousemove",i.mouseMove),window.removeEventListener("mouseup",i.mouseUp),i.dragX=void 0,i.restyle(),i.onMouseUp(t))}),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),this.restyle())},k.prototype.onMouseMove=function(t){void 0!==this.dragX&&this.onMove(t.clientX,t.clientY)},k.prototype.onMouseUp=function(){},k.prototype.onTouchStart=function(t){t.preventDefault(),void 0===this.dragX&&(this.touch=t.targetTouches[0].identifier,this.dragX=t.targetTouches[0].clientX,this.dragY=t.targetTouches[0].clientY,this.restyle())},k.prototype.onTouchMove=function(t){if(t.preventDefault(),void 0!==this.dragX&&void 0!==this.touch)for(var e in t.targetTouches)if(t.targetTouches[0].identifier==this.touch)return void this.onMove(t.targetTouches[e].clientX,t.targetTouches[e].clientY)},k.prototype.onTouchEnd=function(t){t.preventDefault(),this.touch=void 0,this.dragX=void 0,this.restyle(),this.onMouseUp(t)},(B.prototype=new k).channel=function(t){t=h[t];return void 0!==t&&t!=this.chan&&(this.chan=t,this.data.chan=t,this.setValue(this.data.base)),this.chan},B.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=(s=parseInt(this.current.rh))||128;this.rh=s;var n,o=(o=parseInt(this.current.rw))||2,h=(h=parseInt(this.current.kh))||24,r=(r=parseInt(this.current.kw))||16,a=this.current.pos.toUpperCase(),a=(this.pos=a,this.data||(this.data=new b(this.current.data),this.data.chan=this.chan,this.data.setBase(this.current.base),this.data.setValue(this.current.val)),this.dx=-r/2,this.dy=-(h/2+1),e=e||h+s+2,i=i||(o<r?r:o)+2,this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=o+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-o)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=o+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-o)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.left=this.dx+"px"),document.createElement("span")),e=(this.box=a,document.createElement("span")),s=(I(e,u),this.boxSpan=new w(this,a,e,this.stlB,this.stlB0,this.stlB1),document.createElement("span")),i=(this.range=s,document.createElement("span")),o=(I(i,u),this.rangeSpan=new w(this,s,i,this.stlR,this.stlR0,this.stlR1),document.createElement("span"));this.knob=o,this.knobSpan=new w(this,o,o,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],void 0!==this.current.active&&!this.current.active||(a.addEventListener("touchstart",L),o.addEventListener("mousedown",M(this)),o.addEventListener("touchstart",S(this)),o.addEventListener("touchmove",K(this)),o.addEventListener("touchend",C(this)),o.addEventListener("touchcancel",C(this))),this.current.onCreate&&this.current.onCreate.apply(this),s.appendChild(i),s.appendChild(o),a.appendChild(e),a.appendChild(s),a.ondragstart=f,a.onselectstart=f,t.appendChild(a),!this.at&&1<this.bins.length&&((n=this).resize=function(){n.onResize()},window.addEventListener("resize",this.resize)),this.current.at=t,this.at=t,this.setValue(),I(this.box,void 0===this.dragX?this.stlB0:this.stlB1),I(this.box,this.stlB),I(this.range,void 0===this.dragX?this.stlR0:this.stlR1),I(this.range,this.stlR),I(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),I(this.knob,this.stlK)},B.prototype.getBox=function(){return this.boxSpan},B.prototype.getRange=function(){return this.rangeSpan},B.prototype.getKnob=function(){return this.knobSpan},B.prototype.setValue=function(t){if(void 0===t)t=this.data.val;else if(!this.data.setValue(t))return;t=this.data.val,"N"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rh,this.coord=t,t+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.top=t+"px",this.knob.style.top=t+"px"):(this.stlK.left=t+"px",this.knob.style.left=t+"px")},B.prototype.onMove=function(t,e){e="N"==this.pos||"S"==this.pos?this.coord+e-this.dragY:this.coord+t-this.dragX;(e=e<0?0:e)>this.rh&&(e=this.rh),this.move(e)},B.prototype.move=function(t){var e;this.coord!=t&&("N"==this.pos||"S"==this.pos?(this.knob.style.top=t+this.dy+"px",this.stlK.top=this.knob.style.top,this.dragY+=t-this.coord):(this.knob.style.left=t+this.dy+"px",this.stlK.left=this.knob.style.left,this.dragX+=t-this.coord),e=t/this.rh,"N"!=this.pos&&"W"!=this.pos||(e=1-e),this.data.setValue(e)&&this.data.emit(this),this.coord=t)},B.prototype.forward=function(t){this.emit(t),this.data.read(t)&&this.setValue()},(X.prototype=new k).channel=function(t){t=h[t];return void 0!==t&&t!=this.chan&&(this.chan=t,this.dataX.chan=t,this.dataY.chan=t,this.setValue(this.dataX.base,this.dataY.base)),this.chan},X.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=(s=parseInt(this.current.rh))||128;this.rh=s;var n=(n=parseInt(this.current.rw))||128;this.rw=n;var o,h=(h=parseInt(this.current.kh))||24,r=(r=parseInt(this.current.kw))||16,a=this.current.pos.toUpperCase(),a=(this.pos=a,this.dataX||(this.dataX=new b(this.current.dataX),this.dataY=new b(this.current.dataY),void 0!==this.current.dataX||void 0===this.current.dataY||this.dataY.msb||(this.dataX=new b("mod")),void 0!==this.current.dataY||this.dataX.msb||(this.dataY=new b("mod")),this.dataX.chan=this.chan,this.dataY.chan=this.chan,this.dataX.setBase(this.current.baseX),this.dataY.setBase(this.current.baseY),this.dataX.setValue(this.current.valX),this.dataY.setValue(this.current.valY)),this.dx=-(r/2+1),this.dy=-(h/2+1),e=e||h+s+2,i=i||r+n+2,this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-n)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.left=this.dx+"px"),document.createElement("span")),e=(this.box=a,document.createElement("span")),s=(I(e,u),this.boxSpan=new w(this,a,e,this.stlB,this.stlB0,this.stlB1),document.createElement("span")),i=(this.range=s,document.createElement("span")),n=(I(i,u),this.rangeSpan=new w(this,s,i,this.stlR,this.stlR0,this.stlR1),document.createElement("span"));this.knob=n,this.knobSpan=new w(this,n,n,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],void 0!==this.current.active&&!this.current.active||(a.addEventListener("touchstart",L),n.addEventListener("mousedown",M(this)),n.addEventListener("touchstart",S(this)),n.addEventListener("touchmove",K(this)),n.addEventListener("touchend",C(this)),n.addEventListener("touchcancel",C(this))),this.current.onCreate&&this.current.onCreate.apply(this),s.appendChild(i),s.appendChild(n),a.appendChild(e),a.appendChild(s),a.ondragstart=f,a.onselectstart=f,t.appendChild(a),!this.at&&1<this.bins.length&&((o=this).resize=function(){o.onResize()},window.addEventListener("resize",this.resize)),this.current.at=t,this.at=t,this.setValue(),I(this.box,void 0===this.dragX?this.stlB0:this.stlB1),I(this.box,this.stlB),I(this.range,void 0===this.dragX?this.stlR0:this.stlR1),I(this.range,this.stlR),I(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),I(this.knob,this.stlK)},X.prototype.getBox=function(){return this.boxSpan},X.prototype.getRange=function(){return this.rangeSpan},X.prototype.getKnob=function(){return this.knobSpan},X.prototype.setValue=function(t,e){if(void 0===t)t=this.dataX.val,e=this.dataY.val;else if(!this.dataX.setValue(t)&&!this.dataY.setValue(e))return;t=this.dataX.val,e=this.dataY.val,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rw,e*=this.rh,"N"==this.pos||"S"==this.pos?(this.coordX=t,this.coordY=e):(this.coordX=e,this.coordY=t),t+=this.dx,e+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.left=t+"px",this.stlK.top=e+"px"):(this.stlK.top=t+"px",this.stlK.left=e+"px"),this.knob.style.left=this.stlK.left,this.knob.style.top=this.stlK.top},X.prototype.onMove=function(t,e){(t=this.coordX+t-this.dragX)<0&&(t=0),(e=this.coordY+e-this.dragY)<0&&(e=0),"N"==this.pos||"S"==this.pos?(t>this.rw&&(t=this.rw),e>this.rh&&(e=this.rh),this.knob.style.left=t+this.dx+"px",this.knob.style.top=e+this.dy+"px"):(t>this.rh&&(t=this.rh),e>this.rw&&(e=this.rw),this.knob.style.left=t+this.dy+"px",this.knob.style.top=e+this.dx+"px"),this.stlK.left=this.knob.style.left,this.stlK.top=this.knob.style.top,this.dragX+=t-this.coordX,this.dragY+=e-this.coordY,this.coordX=t,this.coordY=e,"E"!=this.pos&&"W"!=this.pos||(t=this.coordY,e=this.coordX),t/=this.rw,e/=this.rh,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),this.dataX.setValue(t)&&this.dataX.emit(this),this.dataY.setValue(e)&&this.dataY.emit(this)},X.prototype.forward=function(t){this.emit(t),(this.dataX.read(t)||this.dataY.read(t))&&this.setValue()},R.prototype._info=function(t){return{type:"html/javascript",name:i(t,"Slider"),manufacturer:"virtual",version:e}},R.prototype._openIn=function(e,t){var i=new B(this._arg);i.connect=function(){e.connect.apply(e,arguments)},i.send=function(){e.send.apply(e,arguments)},i.create(),i.emit=function(t){e._emit(t)},e._info=this._info(t),e._receive=function(t){i.forward(t)},e._close=function(){i._close()},e.settings=function(){return i.settings()},e.getBox=function(){return i.boxSpan},e.getRange=function(){return i.rangeSpan},e.getKnob=function(){return i.knobSpan},e.setValue=function(t){i.setValue(t)},e.channel=function(t){return i.channel(t)},e._resume()},r.input.Slider=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new R;return i._arg=e,r.lib.openMidiIn(t,i)},r.input.Slider.register=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new R;return i._arg=e,r.lib.registerMidiIn(t,i)},D.prototype._info=function(t){return{type:"html/javascript",name:i(t,"Pad"),manufacturer:"virtual",version:e}},D.prototype._openIn=function(e,t){var i=new X(this._arg);i.connect=function(){e.connect.apply(e,arguments)},i.send=function(){e.send.apply(e,arguments)},i.create(),i.emit=function(t){e._emit(t)},e._info=this._info(t),e._receive=function(t){i.forward(t)},e._close=function(){i._close()},e.settings=function(){return i.settings()},e.getBox=function(){return i.boxSpan},e.getRange=function(){return i.rangeSpan},e.getKnob=function(){return i.knobSpan},e.setValue=function(t){i.setValue(t)},e.channel=function(t){return i.channel(t)},e._resume()},r.input.Pad=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new D;return i._arg=e,r.lib.openMidiIn(t,i)},r.input.Pad.register=function(){1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:e=arguments[0]:(t=arguments[0],e=arguments[1]);var t,e,i=new D;return i._arg=e,r.lib.registerMidiIn(t,i)}}function i(t,e){return t||e}function a(t){var e,i={};for(e in t)i[e]=t[e];return i}function o(t){return 65<=t&&t<=90?"Key"+String.fromCharCode(t):48<=t&&t<=57?"Digit"+String.fromCharCode(t):{9:"Tab",8:"Backspace",27:"Escape",32:"Space",59:"Semicolon",171:"Equal",173:"Minus",188:"Comma",190:"Period",191:"Slash",192:"Backquote",219:"BracketLeft",220:"Backslash",221:"BracketRight",222:"Quote"}[t]}function s(t){for(var e in this.notes={},this.playing=[],void 0!==(t=void 0===t?{}:t).mpe?(r.MPE.validate(t.mpe),this.mpe=t.mpe,this.chan=t.mpe[0]):(this.chan=h[t.chan],void 0===this.chan&&(this.chan=0)),t){var i=function(t){var e=t.toUpperCase();if(1==e.length){var i=e.charCodeAt(0);if(65<=i&&i<=90)return"Key"+e;if(48<=i&&i<=57)return"Digit"+e}return(e={ESC:"Escape",TAB:"Tab",BSP:"Backspace","-":"Minus",_:"Minus","+":"Equal","=":"Equal","[":"BracketLeft","{":"BracketLeft","]":"BracketRight","}":"BracketRight",";":"Semicolon",":":"Semicolon","'":"Quote",'"':"Quote","`":"Backquote","~":"Backquote","|":"Backslash","\\":"Backslash",",":"Comma","<":"Comma",".":"Period",">":"Period","/":"Slash","?":"Slash"," ":"Space"}[e])||t}(e);"function"==typeof t[e]?this.notes[i]=t[e]:(e=r.MIDI.noteValue(t[e]),void 0!==i&&void 0!==e&&(this.notes[i]=e))}var s=this;this.keydown=function(t){var e=t.code?s.notes[t.code]:s.notes[o(t.keyCode)];void 0!==e&&(t.preventDefault(),"function"==typeof e?e.apply(s,[!0]):s.playing[e]||(s.playing[e]=!0,s.noteOn(e)))},this.keyup=function(t){var e=t.code?s.notes[t.code]:s.notes[o(t.keyCode)];void 0!==e&&(t.preventDefault(),"function"==typeof e&&e.apply(s,[!1]),s.playing[e])&&(s.playing[e]=void 0,s.noteOff(e))},"string"==typeof t.at&&(this.at=document.getElementById(t.at));try{this.at.addEventListener("keydown",this.keydown),this.at.addEventListener("keyup",this.keyup),(!this.at.tabIndex||this.at.tabIndex<0)&&(this.at.tabIndex=0)}catch(t){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.at=document}this._close=function(){for(var t in this.at.removeEventListener("keydown",this.keydown),this.at.removeEventListener("keyup",this.keyup),s.playing)s.noteOff(t)}}function c(){}function p(t){return void 0===t.buttons||t.buttons!=n?t:(t.stopPropagation(),0==t.button?{buttons:1^n}:1==t.button?{buttons:4^n}:2==t.button?{buttons:2^n}:void 0)}function l(t){return void 0===t.buttons?!t.button:1&t.buttons}function d(t){return void 0===t.buttons?!t.button:!(1&t.buttons)}function f(){return!1}function I(t,e){if(t)for(var i in e)t.style[i]=e[i]}function E(t,e){return(e?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[(t=r.MIDI.noteValue(t))%12]+7*Math.floor(t/12)}function _(t){return 12*Math.floor(t/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[t%7]}function v(e,i){return function(t){e.mouseDown&&"M"==e.playing[i]&&!function(t,e){for(;t;t=t.parentNode)if(t==e)return 1}(t.relatedTarget,this)&&(e.playing[i]=void 0,e.release(i)),n=t.buttons}}function y(t){this.bins=[],this.params={0:{}};var e,i={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};for(e in void 0!==(t=void 0===t?{}:t).mpe?(r.MPE.validate(t.mpe),this.mpe=t.mpe,this.chan=t.mpe[0]):(this.chan=h[t.chan],void 0===this.chan&&(this.chan=0)),t)e==parseInt(e)?this.params[e]=a(t[e]):"chan"!=e&&("from"!=e&&"to"!=e||void 0!==r.MIDI.noteValue(t[e]))&&(i[e]=t[e]);for(e in this.params){for(var s in this.bins.push(e),i)"from"!=s&&"to"!=s||void 0!==this.params[e][s]&&void 0!==r.MIDI.noteValue(this.params[e][s])||(this.params[e][s]=i[s]),s in this.params[e]||(this.params[e][s]=i[s]);var n=this.params[e].from,o=this.params[e].to;r.MIDI.noteValue(n)>r.MIDI.noteValue(o)&&(this.params[e].from=o,this.params[e].to=n)}this.bins.sort(function(t,e){return t-e})}function m(t){this.piano=t,this.keys=[]}function g(){}function b(t){if(this.base=.5,this.val=.5,this.msb=0,this.lsb=0,this.chan=0,t instanceof Array){if(1!=t.length&&2!=t.length)return;if(2==t.length){if(t[1]!=parseInt(t[1])||t[1]<1||127<t[1])return;this.msb=t[0],t[1]!=t[0]&&(this.lsb=t[1])}else this.msb=t[0]}else if(t==parseInt(t)){if(t<1||127<t)return;this.msb=t}else{t={mod:[1,33],breath:[2,34],foot:[4,36],portamento:[5,37],volume:[7,39],balance:[8,40],pan:[10,42],expression:[11,43],effect1:[12,44],effect2:[13,45]}[t];t&&(this.msb=t[0],this.lsb=t[1])}this.msb&&7!=this.msb&&8!=this.msb&&10!=this.msb&&(this.base=0),this.val=-1,this.setValue(this.base)}function w(t,e,i,s,n,o){this.ctrl=t,this.span=e,this.inner=i,this.stl=s,this.stl0=n,this.stl1=o}function k(){}function x(t,e){for(var i in this.bins=[],this.params={0:{}},void 0===e&&(e={}),this.chan=h[(t=void 0===t?{}:t).chan],void 0===this.chan&&(this.chan=0),t)i==parseInt(i)?this.params[i]=a(t[i]):"chan"!=i&&(e[i]=t[i]);for(i in this.params)for(var s in this.bins.push(i),e)"from"!=s&&"to"!=s||void 0!==E(this.params[i][s])||(this.params[i][s]=e[s]),s in this.params[i]||(this.params[i][s]=e[s]);this.bins.sort(function(t,e){return t-e})}function M(e){return function(t){n=t.buttons,l(t)&&e.onMouseDown(t)}}function S(e){return function(t){e.onTouchStart(t)}}function K(e){return function(t){e.onTouchMove(t)}}function C(e){return function(t){e.onTouchEnd(t)}}function L(t){t.preventDefault()}function B(t){x.call(this,t,{pos:"N",rw:2,rh:128,kw:24,kh:16})}function X(t){x.call(this,t,{pos:"N",rw:128,rh:128,kw:24,kh:16})}function R(){}function D(){}});