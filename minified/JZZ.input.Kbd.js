!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i:"function"==typeof define&&define.amd?define("JZZ.input.Kbd",["JZZ"],i):i(JZZ)}(0,function(a){if(a){a.input||(a.input={});for(var s,i="1.1.4",o={" ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"+":61,"=":61,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,_:173,"-":173,"[":219,"{":219,"]":221,"}":221,"|":220,"\\":220,"`":192,"~":192,";":59,":":59,"'":222,'"':222,",":188,"<":188,".":190,">":190,"/":191,"?":191},r={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},t=0;t<16;t++)r[t]=t;n.prototype.channel=function(t){if(void 0===this.mpe){var i=r[t];void 0!==i&&(this.chan=i)}return this.chan},u.prototype._info=function(t){return{type:"html/javascript",name:e(t,"ASCII"),manufacturer:"virtual",version:i}},u.prototype._openIn=function(e,t){var i=new n(this._arg);i.mpe?(e._orig._mpe||(e._orig._mpe=a.MPE()),e._orig._mpe.setup(i.mpe[0],i.mpe[1]),i.noteOn=function(t){var i=a.MIDI(144+this.chan,t,127);i._mpe=t,e._receive(i)},i.noteOff=function(t){var i=a.MIDI(128+this.chan,t,127);i._mpe=t,e._receive(i)}):(i.noteOn=function(t){e._receive(a.MIDI(144+this.chan,t,127))},i.noteOff=function(t){e._receive(a.MIDI(128+this.chan,t,127))}),e._info=this._info(t),e._close=function(){i._close()},e.channel=function(t){return i.channel(t)},e._resume()},a.input.ASCII=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new u;return e._arg=i,a.lib.openMidiIn(t,e)},a.input.ASCII.register=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new u;return e._arg=i,a.lib.registerMidiIn(t,e)},g.prototype.channel=function(t){if(void 0===this.mpe){var i=r[t];if(void 0!==i&&i!=this.chan){for(var e in this.playing)_(this.keys[e],this.stl0[e]),_(this.keys[e],this.locs[e]);this.chan=i}}return this.chan},g.prototype._close=function(){for(var t in this.playing)"M"!=this.playing[t]&&"T"!=this.playing[t]||this.noteOff(t);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},g.prototype.press=function(t){this.keys[t]._active&&(_(this.keys[t],this.stl1[t]),_(this.keys[t],this.locs[t]),this.noteOn(t))},g.prototype.release=function(t){this.keys[t]._active&&(_(this.keys[t],this.stl0[t]),_(this.keys[t],this.locs[t]),this.noteOff(t))},g.prototype.forward=function(t){var i=t[1],e=t.getChannel();if(e>=this.chan&&e<=(this.mpe?this.chan+this.mpe[1]:this.chan)){var s=t[0]>>4;if(t.isNoteOn())this.playing[i]="E",_(this.keys[i],this.stl1[i]),_(this.keys[i],this.locs[i]);else if(t.isNoteOff())this.playing[i]=void 0,_(this.keys[i],this.stl0[i]),_(this.keys[i],this.locs[i]);else if(11==s&&(120==i||123==i))for(var n in this.playing)this.playing[n]&&(this.playing[n]=void 0,_(this.keys[n],this.stl0[n]),_(this.keys[n],this.locs[n]))}this.emit(t)},g.prototype.findKey=function(t,i,e){for(var s in this.keys)for(var n=document.elementFromPoint(t,i);n;n=n.parentNode)if(this.keys[s]==n)return void(e[s]=!0)},g.prototype.create=function(){for(var t=0,i=0;i<this.bins.length&&this.bins[i]<=window.innerWidth;i++)t=this.bins[i];this.current=this.params[t],this.createCurrent()},g.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.playing={},this.touches={},this.current.keys)this.createWithKeys(this.current.keys);else{"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}}},g.prototype.createWithKeys=function(t){for(var i in t){var e=a.MIDI.noteValue(t[i][1]),s=t[i][0];"string"==typeof s&&(s=document.getElementById(s)),this.keys[e]=s,this.locs[e]={},this.stl0[e]={},this.stl1[e]={}}this.current.onCreate&&this.current.onCreate.apply(this),this.setListeners()},g.prototype.createAt=function(t){t.innerHTML="";var i,e,s,n=this.current.pos.toUpperCase(),o=M(this.current.from),r=M(this.current.to,!0),h=r-o+1,a=h*this.current.ww+1,u=this.current.wl+1,p=this.current.ww-1,c=this.current.wl-1,l=this.current.bw-1,d=this.current.bl-1,f="N"!=n^!this.current.rev,v="E"!=n^!this.current.rev,y=document.createElement("span");y.style.display="inline-block",y.style.position="relative",y.style.margin="0px",y.style.padding="0px",y.style.borderStyle="none",y.style.userSelect="none",y.style.MozUserSelect="none",y.style.WebkitUserSelect="none",y.style.MsUserSelect="none",y.style.KhtmlUserSelect="none",y.style.cursor="default","E"==n||"W"==n?(y.style.width=u+"px",y.style.height=a+"px"):(y.style.width=a+"px",y.style.height=u+"px");for(var m=0;m<h;m++)i=E(m+o),e=document.createElement("span"),this.keys[i]=e,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[i]=s,"E"==n||"W"==n?(s.width=c+"px",s.height=p+"px",s.left="0px",s[v?"top":"bottom"]=this.current.ww*m+"px"):(s.width=p+"px",s.height=c+"px",s.top="0px",s[f?"left":"right"]=this.current.ww*m+"px",s.verticalAlign="top"),this.stl0[i]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[i]={backgroundColor:"#aaa",borderColor:"#000"},_(e,this.stl0[i]),_(e,s),y.appendChild(e);var b=Math.ceil(this.current.ww-3*this.current.bw/4);(b+this.current.ww)%2&&b--;var g=E(o)+1,w=E(r);for(i=g;i<w;i++){var k,x=i%12,I=Math.floor(i/12);if(1==x)k=Math.floor(this.current.ww*(7*I+1.5-o))-b/2-this.current.bw;else if(3==x)k=Math.floor(this.current.ww*(7*I+1.5-o)+b/2);else if(6==x)k=this.current.ww*(7*I+5-o)-Math.floor(this.current.bw/2)-b-this.current.bw;else if(8==x)k=this.current.ww*(7*I+5-o)-Math.floor(this.current.bw/2);else{if(10!=x)continue;k=this.current.ww*(7*I+5-o)-Math.floor(this.current.bw/2)+b+this.current.bw}e=document.createElement("span"),this.keys[i]=e,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[i]=s,"E"==n||"W"==n?(s.width=d+"px",s.height=l+"px",s["E"==n?"right":"left"]="0px",s[v?"top":"bottom"]=k+"px"):(s.width=l+"px",s.height=d+"px",s["N"==n?"top":"bottom"]="0px",s[f?"left":"right"]=k+"px"),this.stl0[i]={backgroundColor:"#000",borderColor:"#000"},this.stl1[i]={backgroundColor:"#888",borderColor:"#000"},_(e,this.stl0[i]),_(e,s),y.appendChild(e)}this.current.onCreate&&this.current.onCreate.apply(this),t.appendChild(y),this.current.at=t,this.at=t,this.setListeners()},g.prototype.setListeners=function(){var t,i=void 0===this.current.active||!!this.current.active;for(t in this.watchButtons=function(t){s=t.buttons},this.mouseUpHandle=function(i){return function(t){l(t=p(t))&&(i.mouseDown=!1)}}(this),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=function(o){return function(t){t.preventDefault();for(var i={},e=0;e<t.touches.length;e++)o.findKey(t.touches[e].clientX,t.touches[e].clientY,i);var s,n={};for(s in i)s in o.touches?n[s]=!0:void 0===o.playing[s]&&(o.playing[s]="T",o.press(s),n[s]=!0);for(s in o.touches)s in i||(o.playing[s]=void 0,o.release(s));o.touches=n}}(this),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[],this.keys)this.mouseDownH[t]=d(this,t),this.mouseOverH[t]=y(this,t),this.mouseOutH[t]=m(this,t),this.mouseUpH[t]=b(this,t),this.keys[t].addEventListener("mousedown",this.mouseDownH[t]),this.keys[t].addEventListener("mouseover",this.mouseOverH[t]),this.keys[t].addEventListener("mouseout",this.mouseOutH[t]),this.keys[t].addEventListener("mouseup",this.mouseUpH[t]),this.keys[t].addEventListener("touchstart",this.touchHandle),this.keys[t].addEventListener("touchmove",this.touchHandle),this.keys[t].addEventListener("touchend",this.touchHandle);for(t in this.keys)void 0===this.keys[t]._active&&(this.keys[t]._active=i),this.keys[t].ondragstart=v,this.keys[t].onselectstart=v;if(!this.resize&&1<this.bins.length){var e=this;this.resize=function(){e.onResize()},window.addEventListener("resize",this.resize)}},g.prototype.cleanup=function(){for(var t in this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle)),this.keys)this.mouseDownH[t]&&this.keys[t].removeEventListener("mousedown",this.mouseDownH[t]),this.mouseOverH[t]&&this.keys[t].removeEventListener("mouseover",this.mouseOverH[t]),this.mouseOutH[t]&&this.keys[t].removeEventListener("mouseout",this.mouseOutH[t]),this.mouseUpH[t]&&this.keys[t].removeEventListener("mouseup",this.mouseUpH[t]),this.touchHandle&&(this.keys[t].removeEventListener("touchstart",this.touchHandle),this.keys[t].removeEventListener("touchmove",this.touchHandle),this.keys[t].removeEventListener("touchend",this.touchHandle));this.at&&(this.at.innerHTML="")},g.prototype.settings=function(){return h(this.current)},g.prototype.onResize=function(){for(var t=0,i=0;i<this.bins.length&&this.bins[i]<=window.innerWidth;i++)t=this.bins[i];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},g.prototype.enable=function(){for(var t in this.keys)this.keys[t]._active=!0;return this},g.prototype.disable=function(){for(var t in this.keys)this.keys[t]._active=!1;return this},g.prototype.getKey=function(t){var i=new w(this),e=a.MIDI.noteValue(t);return void 0!==this.keys[e]&&i.keys.push(e),i},g.prototype.getKeys=function(t,i){var e=new w(this),s=void 0===t?void 0:a.MIDI.noteValue(t),n=void 0===i?void 0:a.MIDI.noteValue(i);if(void 0!==s&&void 0!==n&&n<s){var o=s;s=n,n=o}for(var r in this.keys)void 0!==s&&r<s||void 0!==n&&n<r||e.keys.push(r);return e},g.prototype.getWhiteKeys=function(t,i){var e=new w(this),s=void 0===t?void 0:a.MIDI.noteValue(t),n=void 0===i?void 0:a.MIDI.noteValue(i);if(void 0!==s&&void 0!==n&&n<s){var o=s;s=n,n=o}for(var r in this.keys)if(!(void 0!==s&&r<s||void 0!==n&&n<r)){var h=r%12;1!=h&&3!=h&&6!=h&&8!=h&&10!=h&&e.keys.push(r)}return e},g.prototype.getBlackKeys=function(t,i){var e=new w(this),s=void 0===t?void 0:a.MIDI.noteValue(t),n=void 0===i?void 0:a.MIDI.noteValue(i);if(void 0!==s&&void 0!==n&&n<s){var o=s;s=n,n=o}for(var r in this.keys)if(!(void 0!==s&&r<s||void 0!==n&&n<r)){var h=r%12;1!=h&&3!=h&&6!=h&&8!=h&&10!=h||e.keys.push(r)}return e},w.prototype.setInnerHTML=function(t){for(var i in this.keys)this.piano.keys[this.keys[i]].innerHTML=t;return this},w.prototype.setStyle=function(t,i){var e,s,n;for(e in void 0===i&&(i=t),this.keys){for(s in n=this.keys[e],t)this.piano.stl0[n][s]=t[s];for(s in i)this.piano.stl1[n][s]=i[s];_(this.piano.keys[n],this.piano.playing[n]?this.piano.stl1[n]:this.piano.stl0[n]),_(this.piano.keys[n],this.piano.locs[n])}return this},w.prototype.enable=function(){for(var t in this.keys)this.piano.keys[this.keys[t]]._active=!0;return this},w.prototype.disable=function(){for(var t in this.keys)this.piano.keys[this.keys[t]]._active=!1;return this},k.prototype._info=function(t){return{type:"html/javascript",name:e(t,"Kbd"),manufacturer:"virtual",version:i}},k.prototype._openIn=function(e,t){var s=new g(this._arg);s.send=function(){e.send.apply(e,arguments)},s.connect=function(){e.connect.apply(e,arguments)},s.create(),s.mpe?(e._orig._mpe||(e._orig._mpe=a.MPE()),e._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(t){var i=a.MIDI(144+this.chan,t,127);i._mpe=t,e._emit(e._filter(i))},s.noteOff=function(t){var i=a.MIDI(128+this.chan,t,127);i._mpe=t,e._emit(e._filter(i))}):(s.noteOn=function(t){e._emit(a.MIDI(144+this.chan,t,127))},s.noteOff=function(t){e._emit(a.MIDI(128+this.chan,t,127))}),s.emit=function(t){e._emit(e._filter(t))},e._info=this._info(t),e._receive=function(t){s.forward(t)},e._close=function(){s._close()},e.settings=function(){return s.settings()},e.getKey=function(t){return s.getKey(t)},e.getKeys=function(t,i){return s.getKeys(t,i)},e.getWhiteKeys=function(t,i){return s.getWhiteKeys(t,i)},e.getBlackKeys=function(t,i){return s.getBlackKeys(t,i)},e.channel=function(t){return s.channel(t)},e._resume()},a.input.Kbd=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new k;return e._arg=i,a.lib.openMidiIn(t,e)},a.input.Kbd.version=function(){return i},a.input.Kbd.register=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new k;return e._arg=i,a.lib.registerMidiIn(t,e)};var f={margin:0,padding:0,width:"100%",height:"100%"};x.prototype.setBase=function(t){t=parseFloat(t),!isNaN(t)&&isFinite(t)&&0<=t&&t<=1&&(this.base=t)},x.prototype.setValue=function(t){if(t=parseFloat(t),!(isNaN(t)||!isFinite(t)||t<0||1<t||t==this.val))return this.val=t,this.num=Math.round(t*(this.lsb||!this.msb?16383:127)),!0},x.prototype.emit=function(t){this.msb?this.lsb?(t.emit([176+this.chan,this.msb,this.num>>7]),t.emit([176+this.chan,this.lsb,127&this.num])):t.emit([176+this.chan,this.msb,this.num]):t.emit([224+this.chan,127&this.num,this.num>>7])},x.prototype.read=function(t){if(!this.msb&&t[0]==224+this.chan&&t[1]==parseInt(t[1])&&t[2]==parseInt(t[2]))return this.num=t[2]<<7|127&t[1],this.val=this.num/16383,!0;if(this.msb&&t[0]==176+this.chan&&t[2]==parseInt(t[2])){if(t[1]==this.msb)return this.lsb?(this.num=t[2]<<7|127&this.num,this.val=this.num/16383):(this.num=127&t[2],this.val=this.num/127),!0;if(t[1]==this.lsb)return this.num=16256&this.num|127&t[2],this.val=this.num/16383,!0}},I.prototype.setInnerHTML=function(t){return this.inner.innerHTML=t,this},I.prototype.setStyle=function(t,i){var e;for(e in void 0===i&&(i=t),t)this.stl0[e]=t[e];for(e in i)this.stl1[e]=i[e];return _(this.span,this.ctrl.isSelected()?this.stl1:this.stl0),_(this.span,this.stl),this},S.prototype._close=function(){this.at&&(this.at.innerHTML=""),this.mouseUpHandler&&window.removeEventListener("mouseup",this.mouseUpHandler)},S.prototype.create=function(){for(var t=0,i=0;i<this.bins.length&&this.bins[i]<=window.innerWidth;i++)t=this.bins[i];this.current=this.params[t],this.createCurrent()},S.prototype.createCurrent=function(){this.at&&(this.at.innerHTML=""),"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},S.prototype.onResize=function(){for(var t=0,i=0;i<this.bins.length&&this.bins[i]<=window.innerWidth;i++)t=this.bins[i];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},S.prototype.settings=function(){return h(this.current)},S.prototype.isSelected=function(){return void 0!==this.dragX},S.prototype.restyle=function(){for(var t in this.spans)this.spans[t].setStyle()},S.prototype.onMouseDown=function(t){void 0===this.dragX&&(this.dragX=t.clientX,this.dragY=t.clientY,this.mouseMove=function(i){return function(t){s=t.buttons,i.onMouseMove(t)}}(this),this.mouseUp=function(i){return function(t){l(t=p(t))&&(window.removeEventListener("mousemove",i.mouseMove),window.removeEventListener("mouseup",i.mouseUp),i.dragX=void 0,i.restyle(),i.onMouseUp(t))}}(this),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),this.restyle())},S.prototype.onMouseMove=function(t){void 0!==this.dragX&&this.onMove(t.clientX,t.clientY)},S.prototype.onMouseUp=function(){},S.prototype.onTouchStart=function(t){t.preventDefault(),void 0===this.dragX&&(this.touch=t.targetTouches[0].identifier,this.dragX=t.targetTouches[0].clientX,this.dragY=t.targetTouches[0].clientY,this.restyle())},S.prototype.onTouchMove=function(t){if(t.preventDefault(),void 0!==this.dragX&&void 0!==this.touch)for(var i in t.targetTouches)if(t.targetTouches[0].identifier==this.touch)return void this.onMove(t.targetTouches[i].clientX,t.targetTouches[i].clientY)},S.prototype.onTouchEnd=function(t){t.preventDefault(),this.touch=void 0,this.dragX=void 0,this.restyle(),this.onMouseUp(t)},(H.prototype=new S).channel=function(t){var i=r[t];return void 0!==i&&i!=this.chan&&(this.chan=i,this.data.chan=i,this.setValue(this.data.base)),this.chan},H.prototype.createAt=function(t){t.innerHTML="";var i=parseInt(this.current.bh),e=parseInt(this.current.bw),s=parseInt(this.current.rh);s=s||128,this.rh=s;var n=parseInt(this.current.rw);n=n||2;var o=parseInt(this.current.kh);o=o||24;var r=parseInt(this.current.kw);r=r||16;var h=this.current.pos.toUpperCase();this.pos=h,this.data||(this.data=new x(this.current.data),this.data.chan=this.chan,this.data.setBase(this.current.base),this.data.setValue(this.current.val)),this.dx=-r/2,this.dy=-(o/2+1),i=i||o+s+2,e=e||(n<r?r:n)+2,this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==h||"W"==h?(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(i-s)/2-1+"px",this.stlR.top=(e-n)/2-1+"px",this.stlK.width=o+"px",this.stlK.height=r+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(i-s)/2-1+"px",this.stlR.left=(e-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=o+"px",this.stlK.left=this.dx+"px");var a=document.createElement("span");this.box=a;var u=document.createElement("span");_(u,f),this.boxSpan=new I(this,a,u,this.stlB,this.stlB0,this.stlB1);var p=document.createElement("span");this.range=p;var c=document.createElement("span");_(c,f),this.rangeSpan=new I(this,p,c,this.stlR,this.stlR0,this.stlR1);var l=document.createElement("span");if(this.knob=l,this.knobSpan=new I(this,l,l,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],void 0!==this.current.active&&!this.current.active||(a.addEventListener("touchstart",D),l.addEventListener("mousedown",L(this)),l.addEventListener("touchstart",C(this)),l.addEventListener("touchmove",X(this)),l.addEventListener("touchend",B(this))),this.current.onCreate&&this.current.onCreate.apply(this),p.appendChild(c),p.appendChild(l),a.appendChild(u),a.appendChild(p),a.ondragstart=v,a.onselectstart=v,t.appendChild(a),!this.at&&1<this.bins.length){var d=this;this.resize=function(){d.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),_(this.box,void 0===this.dragX?this.stlB0:this.stlB1),_(this.box,this.stlB),_(this.range,void 0===this.dragX?this.stlR0:this.stlR1),_(this.range,this.stlR),_(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),_(this.knob,this.stlK)},H.prototype.getBox=function(){return this.boxSpan},H.prototype.getRange=function(){return this.rangeSpan},H.prototype.getKnob=function(){return this.knobSpan},H.prototype.setValue=function(t){if(void 0===t)t=this.data.val;else if(!this.data.setValue(t))return;t=this.data.val,"N"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rh,this.coord=t,t+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.top=t+"px",this.knob.style.top=t+"px"):(this.stlK.left=t+"px",this.knob.style.left=t+"px")},H.prototype.onMove=function(t,i){var e;(e="N"==this.pos||"S"==this.pos?this.coord+i-this.dragY:this.coord+t-this.dragX)<0&&(e=0),e>this.rh&&(e=this.rh),this.move(e)},H.prototype.move=function(t){if(this.coord!=t){"N"==this.pos||"S"==this.pos?(this.knob.style.top=t+this.dy+"px",this.stlK.top=this.knob.style.top,this.dragY+=t-this.coord):(this.knob.style.left=t+this.dy+"px",this.stlK.left=this.knob.style.left,this.dragX+=t-this.coord);var i=t/this.rh;"N"!=this.pos&&"W"!=this.pos||(i=1-i),this.data.setValue(i)&&this.data.emit(this),this.coord=t}},H.prototype.forward=function(t){this.emit(t),this.data.read(t)&&this.setValue()},(R.prototype=new S).channel=function(t){var i=r[t];return void 0!==i&&i!=this.chan&&(this.chan=i,this.dataX.chan=i,this.dataY.chan=i,this.setValue(this.dataX.base,this.dataY.base)),this.chan},R.prototype.createAt=function(t){t.innerHTML="";var i=parseInt(this.current.bh),e=parseInt(this.current.bw),s=parseInt(this.current.rh);s=s||128,this.rh=s;var n=parseInt(this.current.rw);n=n||128,this.rw=n;var o=parseInt(this.current.kh);o=o||24;var r=parseInt(this.current.kw);r=r||16;var h=this.current.pos.toUpperCase();this.pos=h,this.dataX||(this.dataX=new x(this.current.dataX),this.dataY=new x(this.current.dataY),void 0!==this.current.dataX||void 0===this.current.dataY||this.dataY.msb||(this.dataX=new x("mod")),void 0!==this.current.dataY||this.dataX.msb||(this.dataY=new x("mod")),this.dataX.chan=this.chan,this.dataY.chan=this.chan,this.dataX.setBase(this.current.baseX),this.dataY.setBase(this.current.baseY),this.dataX.setValue(this.current.valX),this.dataY.setValue(this.current.valY)),this.dx=-(r/2+1),this.dy=-(o/2+1),i=i||o+s+2,e=e||r+n+2,this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==h||"W"==h?(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(i-s)/2-1+"px",this.stlR.top=(e-n)/2-1+"px",this.stlK.width=o+"px",this.stlK.height=r+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(i-s)/2-1+"px",this.stlR.left=(e-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=o+"px",this.stlK.left=this.dx+"px");var a=document.createElement("span");this.box=a;var u=document.createElement("span");_(u,f),this.boxSpan=new I(this,a,u,this.stlB,this.stlB0,this.stlB1);var p=document.createElement("span");this.range=p;var c=document.createElement("span");_(c,f),this.rangeSpan=new I(this,p,c,this.stlR,this.stlR0,this.stlR1);var l=document.createElement("span");if(this.knob=l,this.knobSpan=new I(this,l,l,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],void 0!==this.current.active&&!this.current.active||(a.addEventListener("touchstart",D),l.addEventListener("mousedown",L(this)),l.addEventListener("touchstart",C(this)),l.addEventListener("touchmove",X(this)),l.addEventListener("touchend",B(this))),this.current.onCreate&&this.current.onCreate.apply(this),p.appendChild(c),p.appendChild(l),a.appendChild(u),a.appendChild(p),a.ondragstart=v,a.onselectstart=v,t.appendChild(a),!this.at&&1<this.bins.length){var d=this;this.resize=function(){d.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),_(this.box,void 0===this.dragX?this.stlB0:this.stlB1),_(this.box,this.stlB),_(this.range,void 0===this.dragX?this.stlR0:this.stlR1),_(this.range,this.stlR),_(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),_(this.knob,this.stlK)},R.prototype.getBox=function(){return this.boxSpan},R.prototype.getRange=function(){return this.rangeSpan},R.prototype.getKnob=function(){return this.knobSpan},R.prototype.setValue=function(t,i){if(void 0===t)t=this.dataX.val,i=this.dataY.val;else if(!this.dataX.setValue(t)&&!this.dataY.setValue(i))return;t=this.dataX.val,i=this.dataY.val,"N"!=this.pos&&"W"!=this.pos||(i=1-i),"S"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rw,i*=this.rh,"N"==this.pos||"S"==this.pos?(this.coordX=t,this.coordY=i):(this.coordX=i,this.coordY=t),t+=this.dx,i+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.left=t+"px",this.stlK.top=i+"px"):(this.stlK.top=t+"px",this.stlK.left=i+"px"),this.knob.style.left=this.stlK.left,this.knob.style.top=this.stlK.top},R.prototype.onMove=function(t,i){(t=this.coordX+t-this.dragX)<0&&(t=0),(i=this.coordY+i-this.dragY)<0&&(i=0),"N"==this.pos||"S"==this.pos?(t>this.rw&&(t=this.rw),i>this.rh&&(i=this.rh),this.knob.style.left=t+this.dx+"px",this.knob.style.top=i+this.dy+"px"):(t>this.rh&&(t=this.rh),i>this.rw&&(i=this.rw),this.knob.style.left=t+this.dy+"px",this.knob.style.top=i+this.dx+"px"),this.stlK.left=this.knob.style.left,this.stlK.top=this.knob.style.top,this.dragX+=t-this.coordX,this.dragY+=i-this.coordY,this.coordX=t,this.coordY=i,"E"!=this.pos&&"W"!=this.pos||(t=this.coordY,i=this.coordX),t/=this.rw,i/=this.rh,"N"!=this.pos&&"W"!=this.pos||(i=1-i),"S"!=this.pos&&"W"!=this.pos||(t=1-t),this.dataX.setValue(t)&&this.dataX.emit(this),this.dataY.setValue(i)&&this.dataY.emit(this)},R.prototype.forward=function(t){this.emit(t),(this.dataX.read(t)||this.dataY.read(t))&&this.setValue()},V.prototype._info=function(t){return{type:"html/javascript",name:e(t,"Slider"),manufacturer:"virtual",version:i}},V.prototype._openIn=function(i,t){var e=new H(this._arg);e.connect=function(){i.connect.apply(i,arguments)},e.send=function(){i.send.apply(i,arguments)},e.create(),e.emit=function(t){i._emit(t)},i._info=this._info(t),i._receive=function(t){e.forward(t)},i._close=function(){e._close()},i.settings=function(){return e.settings()},i.getBox=function(){return e.boxSpan},i.getRange=function(){return e.rangeSpan},i.getKnob=function(){return e.knobSpan},i.setValue=function(t){e.setValue(t)},i.channel=function(t){return e.channel(t)},i._resume()},a.input.Slider=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new V;return e._arg=i,a.lib.openMidiIn(t,e)},a.input.Slider.register=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new V;return e._arg=i,a.lib.registerMidiIn(t,e)},Y.prototype._info=function(t){return{type:"html/javascript",name:e(t,"Pad"),manufacturer:"virtual",version:i}},Y.prototype._openIn=function(i,t){var e=new R(this._arg);e.connect=function(){i.connect.apply(i,arguments)},e.send=function(){i.send.apply(i,arguments)},e.create(),e.emit=function(t){i._emit(t)},i._info=this._info(t),i._receive=function(t){e.forward(t)},i._close=function(){e._close()},i.settings=function(){return e.settings()},i.getBox=function(){return e.boxSpan},i.getRange=function(){return e.rangeSpan},i.getKnob=function(){return e.knobSpan},i.setValue=function(t){e.setValue(t)},i.channel=function(t){return e.channel(t)},i._resume()},a.input.Pad=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new Y;return e._arg=i,a.lib.openMidiIn(t,e)},a.input.Pad.register=function(){var t,i;1==arguments.length?"string"==typeof arguments[0]?t=arguments[0]:i=arguments[0]:(t=arguments[0],i=arguments[1]);var e=new Y;return e._arg=i,a.lib.registerMidiIn(t,e)}}function e(t,i){return t||i}function h(t){var i={};for(var e in t)i[e]=t[e];return i}function n(t){for(var i in this.notes={},this.playing=[],void 0===t&&(t={}),void 0!==t.mpe?(a.MPE.validate(t.mpe),this.mpe=t.mpe,this.chan=t.mpe[0]):(this.chan=r[t.chan],void 0===this.chan&&(this.chan=0)),t){var e=o[i],s=a.MIDI.noteValue(t[i]);void 0!==e&&void 0!==s&&(this.notes[e]=s)}var n=this;this.keydown=function(t){var i=n.notes[t.keyCode];void 0!==i&&(t.preventDefault(),n.playing[i]||(n.playing[i]=!0,n.noteOn(i)))},this.keyup=function(t){var i=n.notes[t.keyCode];void 0!==i&&(t.preventDefault(),n.playing[i]&&(n.playing[i]=void 0,n.noteOff(i)))},"string"==typeof t.at&&(this.at=document.getElementById(t.at));try{this.at.addEventListener("keydown",this.keydown),this.at.addEventListener("keyup",this.keyup),(!this.at.tabIndex||this.at.tabIndex<0)&&(this.at.tabIndex=0)}catch(t){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.at=document}this._close=function(){for(var t in this.at.removeEventListener("keydown",this.keydown),this.at.removeEventListener("keyup",this.keyup),n.playing)n.noteOff(t)}}function u(){}function p(t){return void 0===t.buttons||t.buttons!=s?t:(t.stopPropagation(),0==t.button?{buttons:1^s}:1==t.button?{buttons:4^s}:2==t.button?{buttons:2^s}:void 0)}function c(t){return void 0===t.buttons?!t.button:1&t.buttons}function l(t){return void 0===t.buttons?!t.button:!(1&t.buttons)}function v(){return!1}function _(t,i){for(var e in i)t.style[e]=i[e]}function M(t,i){return(i?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[(t=a.MIDI.noteValue(t))%12]+7*Math.floor(t/12)}function E(t){return 12*Math.floor(t/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[t%7]}function d(i,e){return function(t){c(t)&&!i.playing[e]&&(i.mouseDown=!0,i.playing[e]="M",i.press(e)),s=t.buttons}}function y(i,e){return function(t){i.mouseDown&&!i.playing[e]&&(i.playing[e]="M",i.press(e)),s=t.buttons}}function m(i,e){return function(t){i.mouseDown&&"M"==i.playing[e]&&!function(t,i){for(;t;t=t.parentNode)if(t==i)return!0;return!1}(t.relatedTarget,this)&&(i.playing[e]=void 0,i.release(e)),s=t.buttons}}function b(i,e){return function(t){l(t=p(t))&&i.mouseDown&&"M"==i.playing[e]&&(i.playing[e]=void 0,i.release(e),i.mouseDown=!1)}}function g(t){this.bins=[],this.params={0:{}};var i,e={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};for(i in void 0===t&&(t={}),void 0!==t.mpe?(a.MPE.validate(t.mpe),this.mpe=t.mpe,this.chan=t.mpe[0]):(this.chan=r[t.chan],void 0===this.chan&&(this.chan=0)),t)if(i==parseInt(i))this.params[i]=h(t[i]);else{if("chan"==i)continue;if(("from"==i||"to"==i)&&void 0===a.MIDI.noteValue(t[i]))continue;e[i]=t[i]}for(i in this.params){for(var s in this.bins.push(i),e)"from"!=s&&"to"!=s||void 0!==this.params[i][s]&&void 0!==a.MIDI.noteValue(this.params[i][s])||(this.params[i][s]=e[s]),s in this.params[i]||(this.params[i][s]=e[s]);var n=this.params[i].from,o=this.params[i].to;a.MIDI.noteValue(n)>a.MIDI.noteValue(o)&&(this.params[i].from=o,this.params[i].to=n)}this.bins.sort(function(t,i){return t-i})}function w(t){this.piano=t,this.keys=[]}function k(){}function x(t){if(this.base=.5,this.val=.5,this.msb=0,this.lsb=0,this.chan=0,t instanceof Array){if(1!=t.length&&2!=t.length)return;if(2==t.length){if(t[1]!=parseInt(t[1])||t[1]<1||127<t[1])return;this.msb=t[0],t[1]!=t[0]&&(this.lsb=t[1])}else this.msb=t[0]}else if(t==parseInt(t)){if(t<1||127<t)return;this.msb=t}else{var i={mod:[1,33],breath:[2,34],foot:[4,36],portamento:[5,37],volume:[7,39],balance:[8,40],pan:[10,42],expression:[11,43],effect1:[12,44],effect2:[13,45]}[t];i&&(this.msb=i[0],this.lsb=i[1])}this.msb&&7!=this.msb&&8!=this.msb&&10!=this.msb&&(this.base=0),this.val=-1,this.setValue(this.base)}function I(t,i,e,s,n,o){this.ctrl=t,this.span=i,this.inner=e,this.stl=s,this.stl0=n,this.stl1=o}function S(){}function K(t,i){var e;for(e in this.bins=[],this.params={0:{}},void 0===t&&(t={}),void 0===i&&(i={}),this.chan=r[t.chan],void 0===this.chan&&(this.chan=0),t)if(e==parseInt(e))this.params[e]=h(t[e]);else{if("chan"==e)continue;i[e]=t[e]}for(e in this.params)for(var s in this.bins.push(e),i)"from"!=s&&"to"!=s||void 0!==M(this.params[e][s])||(this.params[e][s]=i[s]),s in this.params[e]||(this.params[e][s]=i[s]);this.bins.sort(function(t,i){return t-i})}function L(i){return function(t){s=t.buttons,c(t)&&i.onMouseDown(t)}}function C(i){return function(t){i.onTouchStart(t)}}function X(i){return function(t){i.onTouchMove(t)}}function B(i){return function(t){i.onTouchEnd(t)}}function D(t){t.preventDefault()}function H(t){K.call(this,t,{pos:"N",rw:2,rh:128,kw:24,kh:16})}function R(t){K.call(this,t,{pos:"N",rw:128,rh:128,kw:24,kh:16})}function V(){}function Y(){}});