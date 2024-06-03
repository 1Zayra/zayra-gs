/*! * Chart.js v3.7.1 * https://www.chartjs.org * (c) 2022 Chart.js Contributors * Released under the MIT License */ !function(t,e){"object"==typeof
exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?
globalThis:t||self).Chart=e()}(this,(function(){"use strict";const t="undefined"==typeof window?function(t){return
t()}:window.requestAnimationFrame;function e(e,i,s){const n=s||(t=>Array.prototype.slice.call(t));let o=!1,a=[];return function(...s){a=n(s),o||
(o=!0,t.call(window,(()=>{o=!1,e.apply(i,a)})))}}function i(t,e){let i;return function(...s){return e?
(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const s=t=>"start"===t?"left":"end"===t?"right":"center",n=(t,e,i)=>"start"===t?e:"end"===t?i:
(e+i)/2,o=(t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e;var a=new class{constructor(){this._request=null,this._charts=new
Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const
n=e.listeners[s],o=e.duration;n.forEach((s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)})))}_refresh(){this._request||
(this._running=!0,this._request=t.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let
e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=!1;for(;a>=0;--a)o=n[a],o._active?
(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||
(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const
e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i)
{this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return
this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&
(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t)
{if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const
e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=
[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}; /*! * @kurkle/color v0.1.9 *
https://github.com/kurkle/color#readme * (c) 2020 Jukka Kurkela * Released under the MIT License */const r=
{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},l="0123456789ABCDEF",h=t=>l[15&t],c=t=>l[(2
(240&t)>>4==(15&t);function u(t){var e=function(t){return d(t.r)&&d(t.g)&&d(t.b)&&d(t.a)}(t)?h:c;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?
e(t.a):""):t}function f(t){return t+.5|0}const g=(t,e,i)=>Math.max(Math.min(t,i),e);function p(t){return g(f(2.55*t),0,255)}function m(t){return
g(f(255*t),0,255)}function x(t){return g(f(t/2.55)/100,0,1)}function b(t){return g(f(100*t),0,100)}const _=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?
[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const y=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-
+.e\d]+)(%)?)?\s*\)$/;function v(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-
n,1),-1);return[n(0),n(8),n(4)]}function w(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function
M(t,e,i){const s=v(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function k(t){const
e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,h;return n!==o&&(h=n-o,l=a>.5?h/(2-n-o):h/(n+o),r=n===e?(is)/h+(i>16&255,o>>8&255,255&o]}return t}(),T.transparent=[0,0,0,0]);const e=T[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?
e[3]:255}}function R(t,e,i){if(t){let s=k(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=P(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function E(t,e){return
t?Object.assign(e||{},t):t}function I(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&
(e.a=m(t[3]))):(e=E(t,{r:0,g:0,b:0,a:1})).a=m(e.a),e}function z(t){return"r"===t.charAt(0)?function(t){const e=_.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i)
{const t=+e[7];o=255&(e[8]?p(t):255*t)}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?p(i):i),s=255&(e[4]?p(s):s),n=255&(e[6]?p(n):n),
{r:i,g:s,b:n,a:o}}}(t):C(t)}class F{constructor(t){if(t instanceof F)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=I(t):"string"===e&&(o=
(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*r[s[1]],g:255&17*r[s[2]],b:255&17*r[s[3]],a:5===o?17*r[s[4]]:255}:7!==o&&9!==o||(n=
{r:r[s[1]]<<4|r[s[2]],g:r[s[3]]<<4|r[s[4]],b:r[s[5]]<<4|r[s[6]],a:9===o?r[s[7]]<<4|r[s[8]]:255})),i=n||L(t)||z(t)),this._rgb=i,this._valid=!!i}get valid(){return
this._valid}get rgb(){var t=E(this._rgb);return t&&(t.a=x(t.a)),t}set rgb(t){this._rgb=I(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?
`rgba(${t.r}, ${t.g}, ${t.b}, ${x(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):this._rgb;var t}hexString(){return this._valid?u(this._rgb):this._rgb}hslString(){return
this._valid?function(t){if(!t)return;const e=k(t),i=e[0],s=b(e[1]),n=b(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${x(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}
(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const s=i.rgb,n=t.rgb;let o;const a=e===o?.5:e,r=2*a-1,l=s.a-n.a,h=((r*l==-1?r:(r+l)/(1+r*l))+1)/2;o=1-
h,s.r=255&h*s.r+o*n.r+.5,s.g=255&h*s.g+o*n.g+.5,s.b=255&h*s.b+o*n.b+.5,s.a=a*s.a+(1-a)*n.a,i.rgb=s}return i}clone(){return new
F(this.rgb)}alpha(t){return this._rgb.a=m(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=f(.3*t.r+.59*t.g+.11*t.b);return
t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return
R(this._rgb,2,t),this}darken(t){return R(this._rgb,2,-t),this}saturate(t){return R(this._rgb,1,t),this}desaturate(t){return R(this._rgb,1,-t),this}rotate(t)
{return function(t,e){var i=k(t);i[0]=D(i[0]+e),i=P(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function B(t){return new F(t)}const V=t=>t instanceof
CanvasGradient||t instanceof CanvasPattern;function W(t){return V(t)?t:B(t)}function N(t){return V(t)?
t:B(t).saturate(.5).darken(.1).hexString()}function H(){}const j=function(){let t=0;return function(){return t++}}();function $(t){return null==t}function
Y(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"
[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function U(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const X=t=>
    ("number"==typeof t||t instanceof Number)&&isFinite(+t);function q(t,e){return X(t)?t:e}function K(t,e){return void 0===t?e:t}const G=
(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,Z=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function
J(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function Q(t,e,i,s){let n,o,a;if(Y(t))if(o=t.length,s)for(n=o-1;n>=0;n--)e.call(i,t[n],n);else
for(n=0;ni;)t=t[e.substr(i,s-i)],i=s+1,s=rt(e,i);return t}function ht(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ct=t=>void
0!==t,dt=t=>"function"==typeof t,ut=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function ft(t)
{return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const gt=Object.create(null),pt=Object.create(null);function mt(t,e)
{if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;et.chart.platform.getDevicePixelRatio(),this.elements={},this.events=
["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sansserif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=
(t,e)=>N(e.backgroundColor),this.hoverBorderColor=(t,e)=>N(e.borderColor),this.hoverColor=(t,e)=>N(e.color),this.indexAxis="x",this.interaction=
{mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins=
{},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return
xt(this,t,e)}get(t){return mt(this,t)}describe(t,e){return xt(pt,t,e)}override(t,e){return xt(gt,t,e)}route(t,e,i,s){const
n=mt(this,t),o=mt(this,i),a="_"+e;Object.defineProperties(n,{[a]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[s];return U(t)?
Object.assign({},e,t):K(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:
{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});const
_t=Math.PI,yt=2*_t,vt=yt+_t,wt=Number.POSITIVE_INFINITY,Mt=_t/180,kt=_t/2,St=_t/4,Pt=2*_t/3,Dt=Math.log10,Ct=Math.sign;function Ot(t)
{const e=Math.round(t);t=Lt(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Dt(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function At(t){const e=
[],i=Math.sqrt(t);let s;for(s=1;st-e)).pop(),e}function Tt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Lt(t,e,i){return Math.abs(t-e)=t}function
Et(t,e,i){let s,n,o;for(s=0,n=t.length;sl&&h=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function Ut(t){return!t||$(t.size)||$(t.family)?null:(t.style?t.style+"
":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Xt(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&
(s=o),s}function qt(t,e,i,s){let n=(s=s||{}).data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==e&&(n=s.data={},o=s.garbageCollect=
[],s.font=e),t.save(),t.font=e;let a=0;const r=i.length;let l,h,c,d,u;for(l=0;li.length){for(l=0;l0&&t.stroke()}}function Jt(t,e,i){return
i=i||.5,!e||t&&t.x>e.left-i&&t.xe.top-i&&t.y0&&""!==o.strokeColor;let l,h;for(t.save(),t.font=n.string,function(t,e)
{e.translation&&t.translate(e.translation[0],e.translation[1]);$(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&
(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,o),l=0;lt[i]1;)s=o+n>>1,i(s)?o=s:n=s;return{lo:o,hi:n}}const re=
(t,e,i)=>ae(t,i,(s=>t[s][e]ae(t,i,(s=>t[s][e]>=i));function he(t,e,i){let s=0,n=t.length;for(;ss&&t[n-1]>i;)n--;return s>0||n{const
i="_onData"+ht(e),s=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const n=s.apply(this,e);return
t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e)})),n}})})))}function ue(t,e){const i=t._chartjs;if(!i)return;const
s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(ce.forEach((e=>{delete t[e]})),delete t._chartjs)}function fe(t){const e=new Set;let
i,s;for(i=0,s=t.length;iwindow.getComputedStyle(t,null);function be(t,e){return xe(t).getPropertyValue(e)}const _e=
["top","right","bottom","left"];function ye(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=_e[n];s[o]=parseFloat(t[e+"-"+o+i])||0}return
s.width=s.left+s.right,s.height=s.top+s.bottom,s}function ve(t,e){const{canvas:i,currentDevicePixelRatio:s}=e,n=xe(i),o="borderbox"===n.boxSizing,a=ye(n,"padding"),r=ye(n,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.native||t,s=i.touches,n=s&&s.length?s[0]:i,
    {offsetX:o,offsetY:a}=n;let r,l,h=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(o,a,i.target))r=o,l=a;else{const
        t=e.getBoundingClientRect();r=n.clientX-t.left,l=n.clientY-t.top,h=!0}return{x:r,y:l,box:h}}(t,i),d=a.left+(c&&r.left),u=a.top+
        (c&&r.top);let{width:f,height:g}=e;return o&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/s),y:Math.round((hu)/g*i.height/s)}}const we=t=>Math.round(10*t)/10;function Me(t,e,i,s){const
        n=xe(t),o=ye(n,"margin"),a=me(n.maxWidth,t,"clientWidth")||wt,r=me(n.maxHeight,t,"clientHeight")||wt,l=function(t,e,i){let s,n;if(void 0===e||void
        0===i){const o=pe(t);if(o){const t=o.getBoundingClientRect(),a=xe(o),r=ye(a,"border","width"),l=ye(a,"padding");e=t.width-l.width-r.width,i=t.heightl.height-r.height,s=me(a.maxWidth,o,"clientWidth"),n=me(a.maxHeight,o,"clientHeight")}else
        e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||wt,maxHeight:n||wt}}(t,e,i);let{width:h,height:c}=l;if("contentbox"===n.boxSizing){const t=ye(n,"border","width"),e=ye(n,"padding");h-=e.width+t.width,c-=e.height+t.height}return h=Math.max(0,ho.width),c=Math.max(0,s?Math.floor(h/s):c-o.height),h=we(Math.min(h,a,l.maxWidth)),c=we(Math.min(c,r,l.maxHeight)),h&&!c&&(c=we(h/2)),
        {width:h,height:c}}function ke(t,e,i){const s=e||1,n=Math.floor(t.height*s),o=Math.floor(t.width*s);t.height=n/s,t.width=o/s;const a=t.canvas;return
        a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),
        (t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&
        (t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),!0)}const Se=function(){let t=!1;try{const e={get passive(){return
        t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function Pe(t,e){const
        i=be(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function De(t,e){return"native"in t?{x:t.x,y:t.y}:ve(t,e)}function Ce(t,e,i,s)
        {const{controller:n,data:o,_sorted:a}=t,r=n._cachedMeta.iScale;if(r&&e===r.axis&&"r"!==e&&a&&o.length){const t=r._reversePixels?
        le:re;if(!s)return t(o,e,i);if(n._sharedOptions){const s=o[0],n="function"==typeof s.getRange&&s.getRange(e);if(n){const s=t(o,e,in),a=t(o,e,i+n);return{lo:s.lo,hi:a.hi}}}}return{lo:0,hi:o.length-1}}function Oe(t,e,i,s,n){const o=t.getSortedVisibleDatasetMetas(),a=i[e];for(let
        t=0,i=o.length;t{t[r](n[a],s)&&o.push({element:t,datasetIndex:e,index:i}),t.inRange(n.x,n.y,s)&&(l=!0)})),i.intersect&&!l?[]:o}var Ee={modes:
        {index(t,e,i,s){const n=De(e,t),o=i.axis||"x",a=i.intersect?Ae(t,n,o,s):Le(t,n,o,!1,s),r=[];return a.length?
        (t.getSortedVisibleDatasetMetas().forEach((t=>{const e=a[0].index,i=t.data[e];i&&!i.skip&&r.push({element:i,datasetIndex:t.index,index:e})})),r):
        []},dataset(t,e,i,s){const n=De(e,t),o=i.axis||"xy";let a=i.intersect?Ae(t,n,o,s):Le(t,n,o,!1,s);if(a.length>0){const
        e=a[0].datasetIndex,i=t.getDatasetMeta(e).data;a=[];for(let t=0;tAe(t,De(e,t),i.axis||"xy",s),nearest:(t,e,i,s)=>Le(t,De(e,t),i.axis||"xy",i.intersect,s),x:
        (t,e,i,s)=>Re(t,e,{axis:"x",intersect:i.intersect},s),y:(t,e,i,s)=>Re(t,e,{axis:"y",intersect:i.intersect},s)}};const Ie=new RegExp(/^(normal|(\d+(?:\.\d+)?)
        (px|em|%)?)$/),ze=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Fe(t,e){const i=
        (""+t).match(Ie);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function Be(t,e){const i=
        {},s=U(e),n=s?Object.keys(e):e,o=U(t)?s?i=>K(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=+o(t)||0;return i}function Ve(t){return Be(t,
        {top:"y",right:"x",bottom:"y",left:"x"})}function We(t){return Be(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ne(t){const e=Ve(t);return
        e.width=e.left+e.right,e.height=e.top+e.bottom,e}function He(t,e){t=t||{},e=e||bt.font;let i=K(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let
        s=K(t.style,e.style);s&&!(""+s).match(ze)&&(console.warn('Invalid font style specified: "'+s+'"'),s="");const n=
        {family:K(t.family,e.family),lineHeight:Fe(K(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:K(t.weight,e.weight),string:""};return
        n.string=Ut(n),n}function je(t,e,i,s){let n,o,a,r=!0;for(n=0,o=t.length;ni&&0===t?0:t+e;return{min:a(s,-Math.abs(o)),max:a(n,o)}}function Ye(t,e)
        {return Object.assign(Object.create(t),e)}const Ue=["left","top","right","bottom"];function Xe(t,e){return t.filter((t=>t.pos===e))}function qe(t,e)
        {return t.filter((t=>-1===Ue.indexOf(t.pos)&&t.box.axis===e))}function Ke(t,e){return t.sort(((t,i)=>{const s=e?i:t,n=e?t:i;return
        s.weight===n.weight?s.index-n.index:s.weight-n.weight}))}function Ge(t,e){const i=function(t){const e={};for(const i of t)
        {const{stack:t,pos:s,stackWeight:n}=i;if(!t||!Ue.includes(s))continue;const o=e[t]||(e[t]=
        {count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:n}=e;let
        o,a,r;for(o=0,a=t.length;o{s[t]=Math.max(e[t],i[t])})),s}return s(t?["left","right"]:["top","bottom"])}function ei(t,e,i,s){const n=[];let
        o,a,r,l,h,c;for(o=0,a=t.length,h=0;ot.box.fullSize)),!0),s=Ke(Xe(e,"left"),!0),n=Ke(Xe(e,"right")),o=Ke(Xe(e,"top"),!0),a=Ke(Xe(e,"bottom")),r=qe(e,"x"),
        (t.boxes),l=r.vertical,h=r.horizontal;Q(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const
        c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?
        t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),u=
        f=Object.assign({maxPadding:u,w:o,h:a,x:n.left,y:n.top},n),g=Ge(l.concat(h),d);ei(r.fullSize,f,d,g),ei(l,f,d,g),ei(h,f,d,g)&&ei(l,f,d,g),function(t){const
        e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}
        (f),si(r.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,si(r.rightAndBottom,f,d,g),t.chartArea=
        {left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Q(r.chartArea,(e=>{const
        i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})}))}};function oi(t,e=[""],i=t,s,n=(()=>t[0])){ct(s)||
        (s=mi("_fallback",t));const o=
        {[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:s,_getTarget:n,override:n=>oi([n,...t],e,i,s)};return new Proxy(o,
        {deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>ci(i,s,(()=>function(t,e,i,s){let n;for(const o of
        e)if(n=mi(li(o,t),i),ct(n))return hi(t,n)?gi(i,s,t,n):n}(s,e,t,i))),getOwnPropertyDescriptor:
        (t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:
        (t,e)=>xi(t).includes(e),ownKeys:t=>xi(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,!0}})}function ai(t,e,i,s){constn={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new
            Set,_descriptors:ri(t,s),setContext:e=>ai(t,e,i,s),override:n=>ai(t.override(n),e,i,s)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete
            t[i],!0),get:(t,e,i)=>ci(t,e,(()=>function(t,e,i){const{_proxy:s,_context:n,_subProxy:o,_descriptors:a}=t;let r=s[e];dt(r)&&a.isScriptable(e)&&
            (r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"-
            >"+t);r.add(t),e=e(o,a||s),r.delete(t),hi(t,e)&&(e=gi(n._scopes,n,t,e));return e}(e,r,t,i));Y(r)&&r.length&&(r=function(t,e,i,s)
            {const{_proxy:n,_context:o,_subProxy:a,_descriptors:r}=i;if(ct(o.index)&&s(t))e=e[o.index%e.length];else if(U(e[0])){const
            i=e,s=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=gi(s,n,t,l);e.push(ai(i,o,a&&a[t],r))}}return e}(e,r,t,a.isIndexable));hi(e,r)&&
            (r=ai(r,n,o&&o[e],a));return r}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void
            0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:
            ()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function ri(t,e={scriptable:!0,indexable:!0})
            {const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:s,isScriptable:dt(i)?i:
            ()=>i,isIndexable:dt(s)?s:()=>s}}const li=(t,e)=>t?t+ht(e):e,hi=(t,e)=>U(e)&&"adapters"!==t&&
            (null===Object.getPrototypeOf(e)||e.constructor===Object);function ci(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const
            s=i();return t[e]=s,s}function di(t,e,i){return dt(t)?t(e,i):t}const ui=(t,e)=>!0===t?e:"string"==typeof t?lt(e,t):void 0;function fi(t,e,i,s,n){for(const o of
            e){const e=ui(i,o);if(e){t.add(e);const o=di(e._fallback,i,n);if(ct(o)&&o!==i&&o!==s)return o}else if(!1===e&&ct(s)&&i!==s)return
            null}return!1}function gi(t,e,i,s){const n=e._rootScopes,o=di(e._fallback,i,s),a=[...t,...n],r=new Set;r.add(s);let l=pi(r,a,i,o||i,s);return null!==l&&
            ((!ct(o)||o===i||(l=pi(r,a,o,l,s),null!==l))&&oi(Array.from(r),[""],n,o,(()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const
            n=s[e];if(Y(n)&&U(i))return i;return n}(e,i,s))))}function pi(t,e,i,s,n){for(;i;)i=fi(t,e,i,s,n);return i}function mi(t,e){for(const i of e){if(!i)continue;const
            e=i[t];if(ct(e))return e}}function xi(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of
            Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const bi=Number.EPSILON||1e-14,_i=
            (t,e)=>e"x"===t?"y":"x";function vi(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=Vt(o,n),l=Vt(a,o);let h=r/(r+l),c=l/(r+l);h=isNaN(h)?0:h,c=isNaN(c)?
            0:c;const d=s*h,u=s*c;return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function wi(t,e="x"){const
            i=yi(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,h=_i(t,0);for(a=0;a!t.skip))),"monotone"===e.cubicInterpolationMode)wi(t,n);else{let i=s?
            t[t.length-1]:t[0];for(o=0,a=t.length;o0===t||1===t,Pi=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*yt/i),Di=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((te)*yt/i)+1,Ci={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-
            =2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-
            Math.cos(t*kt),easeOutSine:t=>Math.sin(t*kt),easeInOutSine:t=>-.5*(Math.cos(_t*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>Si(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*
            (Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Si(t)?t:Pi(t,.075,.3),easeOutElastic:t=>Si(t)?t:Di(t,.075,.3),easeInOutElastic(t){const e=.1125;return
                Si(t)?t:t<.5?.5*Pi(2*t,e,.45):.5+.5*Di(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-
                =1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+
                (e*=1.525))*t+e)+2)},easeInBounce:t=>1-Ci.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-
                =1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*Ci.easeInBounce(2*t):.5*Ci.easeOutBounce(2*t1)+.5};function Oi(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Ai(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?
                i<1?t.y:e.y:i>0?e.y:t.y}}function Ti(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o=
                {x:e.cp1x,y:e.cp1y},a=Oi(t,n,i),r=Oi(n,o,i),l=Oi(o,e,i),h=Oi(a,r,i),c=Oi(r,l,i);return Oi(h,c,i)}const Li=new Map;function Ri(t,e,i){return function(t,e)
                {e=e||{};const i=t+JSON.stringify(e);let s=Li.get(i);return s||(s=new Intl.NumberFormat(t,e),Li.set(i,s)),s}(e,i).format(t)}function Ei(t,e,i){return t?
                function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):
                {x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function Ii(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=
                [i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}function zi(t,e){void
                0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Fi(t){return"angle"===t?
                {between:Ht,compare:Wt,normalize:Nt}:{between:Yt,compare:(t,e)=>t-e,normalize:t=>t}}function Bi({start:t,end:e,count:i,loop:s,style:n})
                {return{start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:n}}function Vi(t,e,i){if(!i)return[t];const{property:s,start:n,end:o}=i,a=e.length,
                {compare:r,between:l,normalize:h}=Fi(s),{start:c,end:d,loop:u,style:f}=function(t,e,i){const{property:s,start:n,end:o}=i,
                {between:a,normalize:r}=Fi(s),l=e.length;let h,c,{start:d,end:u,loop:f}=t;if(f){for(d+=l,u+=l,h=0,c=l;hb||l(n,x,p)&&0!==r(n,x),v=
                ()=>!b||0===r(o,p)||l(o,x,p);for(let t=c,i=c;t<=d;++t)m=e[t%a],m.skip||(p=h(m[s]),p!==x&&(b=l(p,n,o),null===_&&y()&&(_=0===r(p,n)?
                t:i),null!==_&&v()&&(g.push(Bi({start:_,end:t,loop:u,count:a,style:f})),_=null),i=t,x=p));return
                null!==_&&g.push(Bi({start:_,end:d,loop:u,count:a,style:f})),g}function Wi(t,e){const i=[],s=t.segments;for(let n=0;nn&&t[o%e].skip;)o--;return
                o%=e,{start:n,end:o}}(i,n,o,s);if(!0===s)return Hi(t,[{start:a,end:r,loop:o}],i,e);return Hi(t,function(t,e,i,s){const n=t.length,o=[];let
                a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%n];i.skip||i.stop?l.skip||(s=!1,o.push({start:e%n,end:(a-1)%n,loop:s}),e=r=i.stop?a:null):(r=a,l.skip&&
                (e=a)),l=i}return null!==r&&o.push({start:e%n,end:r%n,loop:s}),o}(i,a,rnull===t||""===t;const Gi=!!Se&&{passive:!0};function Zi(t,e,i)
                {t.canvas.removeEventListener(e,i,Gi)}function Ji(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function Qi(t,e,i){const s=t.canvas,n=new
                MutationObserver((t=>{let e=!1;for(const i of t)e=e||Ji(i.addedNodes,s),e=e&&!Ji(i.removedNodes,s);e&&i()}));return n.observe(document,
                {childList:!0,subtree:!0}),n}function ts(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of
                t)e=e||Ji(i.removedNodes,s),e=e&&!Ji(i.addedNodes,s);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const es=new Map;let
                is=0;function ss(){const t=window.devicePixelRatio;t!==is&&(is=t,es.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function ns(t,i,s){const
                n=t.canvas,o=n&&pe(n);if(!o)return;const a=e(((t,e)=>{const i=o.clientWidth;s(t,e),i{const
                e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||a(i,s)}));return r.observe(o),function(t,e)
                {es.size||window.addEventListener("resize",ss),es.set(t,e)}(t,a),r}function os(t,e,i){i&&i.disconnect(),"resize"===e&&function(t)
                {es.delete(t),es.size||window.removeEventListener("resize",ss)}(t)}function as(t,i,s){const n=t.canvas,o=e((e=>{null!==t.ctx&&s(function(t,e){const
                i=qi[t.type]||t.type,{x:s,y:n}=ve(t,e);return{type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const
                e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,Gi)}(n,i,o),o}class rs extends Ui{acquireContext(t,e){const
                i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const
                i=t.style,s=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:s,width:n,style:
                {display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",Ki(n)){const e=Pe(t,"width");void
                0!==e&&(t.width=e)}if(Ki(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Pe(t,"height");void 0!==e&&(t.height=e)}}
                (t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const s=i[t];$(s)?
                e.removeAttribute(t):e.setAttribute(t,s)}));const s=i.style||{};return Object.keys(s).forEach((t=>{e.style[t]=s[t]})),e.width=e.width,delete
                e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),n={attach:Qi,detach:ts,resize:ns}
                [e]||as;s[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:os,detach:os,resize:os}[e]||Zi)
                (t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return Me(t,e,i,s)}isAttached(t){const
                e=pe(t);return!(!e||!e.isConnected)}}function ls(t){return!ge()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?Xi:rs}var
                hs=Object.freeze({__proto__:null,_detectPlatform:ls,BasePlatform:Ui,BasicPlatform:Xi,DomPlatform:rs});const cs="transparent",ds={boolean:
                (t,e,i)=>i>.5?e:t,color(t,e,i){const s=W(t||cs),n=s.valid&&W(e||cs);return n&&n.valid?n.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class
                us{constructor(t,e,i,s){const n=e[i];s=je([t.to,s,n,t.from]);const o=je([t.from,n,s]);this._active=!0,this._fn=t.fn||ds[t.type||typeof
                o],this._easing=Ci[t.easing]||Ci.linear,this._start=Math.floor(Date.now()+
                (t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=voi0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],n=i-this._start,o=this._durationn;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=je([t.to,e,s,t.from]),this._from=je([t.from,s,e
                    {this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=tthis._start,i=this._duration,s=this._prop,n=this._from,o=this._loop,a=this._to;let r;if(this._active=n!==a&&(o||e1?2-
                    r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[s]=this._fn(n,a,r))}wait(){const t=this._promises||(this._promises=[]);return new
                    Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let
                    t=0;t"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),bt.set("animations",{colors:{type:"color",properties:
                    ["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:
                    ["x","y","borderWidth","radius","tension"]}}),bt.describe("animations",{_fallback:"animation"}),bt.set("transitions",{active:{animation:
                    {duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:
                    {colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class gs{constructor(t,e){this._chart=t,this._properties=new
                    Map,this.configure(e)}configure(t){if(!U(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const
                    s=t[i];if(!U(s))return;const n={};for(const t of fs)n[t]=s[t];(Y(s.properties)&&s.properties||[i]).forEach((t=>
                    {t!==i&&e.has(t)||e.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return
                    void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!s)return[];const
                    n=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e{t.options=i}),(()=>
                    {})),n}_createAnimations(t,e){const i=this._properties,s=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let r;for(r=o.length1;r>=0;--r){const l=o[r];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const h=e[l];let c=n[l];const
                    d=i.get(l);if(c){if(d&&c.active()){c.update(d,h,a);continue}c.cancel()}d&&d.duration?(n[l]=c=new us(d,t,l,h),s.push(c)):t[l]=h}return s}update(t,e)
                    {if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(a.add(this._chart,i),!0):void
                    0}}function ps(t,e){const i=t&&t.options||{},s=i.reverse,n=void 0===i.min?e:0,o=void 0===i.max?e:0;return{start:s?o:n,end:s?n:o}}function ms(t,e){const i=[],s=t._getSortedDatasetMetas(e);let n,o;for(n=0,o=s.length;n0||!i&&e<0)return n.index}return null}function vs(t,e)
                        {const{chart:i,_cachedMeta:s}=t,n=i._stacks||(i._stacks={}),{iScale:o,vScale:a,index:r}=s,l=o.axis,h=a.axis,c=function(t,e,i)
                        {return`${t.id}.${e.id}.${i.stack||i.type}`}(o,a,s),d=e.length;let u;for(let t=0;ti[t].axis===e)).shift()}function Ms(t,e){const
                        i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s]
                        [i])return;delete e[s][i]}}}const ks=t=>"reset"===t||"none"===t,Ss=(t,e)=>e?t:Object.assign({},t);class Ps{constructor(t,e)
                        {this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts=
                        {},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void
                        0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=
                        [],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=bs(t.vScale,t),this.addElements()}updateIndex(t)
                        {this.index!==t&&Ms(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?
                        e:"r"===t?
                        s:i,n=e.xAxisID=K(i.xAxisID,ws(t,"x")),o=e.yAxisID=K(i.yAxisID,ws(t,"y")),a=e.rAxisID=K(i.rAxisID,ws(t,"r")),r=e.indexAxis,l=e.iAxisID=s(r,n,o,a),h=e.v
                        {return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return
                        this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy()
                        {const t=this._cachedMeta;this._data&&ue(this._data,this),t._stacked&&Ms(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(U(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let s,n,o;for(s=0,n=e.length;s0&&i._parsed[t1];if(!1===this._parsing)i._parsed=s,i._sorted=!0,h=s;else{h=Y(s[t])?this.parseArrayData(i,s,t,e):U(s[t])?
                            this.parseObjectData(i,s,t,e):this.parsePrimitiveData(i,s,t,e);const n=()=>null===l[a]||d&&l[a]t&&!e.hidden&&e._stacked&&
                            {keys:ms(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:c}=function(t)
                            {const{min:e,max:i,minDefined:s,maxDefined:n}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:n?
                            i:Number.POSITIVE_INFINITY}}(a);let d,u;function f(){u=s[d];const e=u[a.axis];return!X(u[t.axis])||h>e||c=0;--d)if(!f())
                            {this.updateRangeFromParsed(l,t,u,r);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let
                            s,n,o;for(s=0,n=e.length;s=0&&tthis.getContext(i,s)),c);return f.$shared&&(f.$shared=r,n[o]=Object.freeze(Ss(f,r))),f}_resolveAnimations(t,e,i)
                            {const s=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,a=n[o];if(a)return a;let r;if(!1!==s.options.animation){const
                            s=this.chart.config,n=s.datasetAnimationScopeKeys(this._type,e),o=s.getOptionScopes(this.getDataset(),n);r=s.createResolver(o,this.getContext(t,
                            l=new gs(s,r&&r.animations);return r&&r._cacheable&&(n[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||
                            (this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ks(t)||this.chart._animationsDisabled}updateElement(t,e,i,s){ks(s)?
                            Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!ks(e)&&this._resolveAnimations(void
                            0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const n=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,
                            {options:!s&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i)
                            {this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void
                            0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const
                            e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const
                            s=i.length,n=e.length,o=Math.min(n,s);o&&this.parse(0,o),n>s?this._insertElements(s,n-s,t):n{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[ae]};for(r(n),a=t;a{s[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),s}}Ds.defaults={},Ds.defaultRoutes=void 0;const Cs={values:t=>Y(t)?t:""+t,numeric(t,e,i)
                            {if(0===t)return"0";const s=this.chart.options.locale;let n,o=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));
                            (e<1e-4||e>1e15)&&(n="scientific"),o=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].valuee[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const
                            a=Dt(Math.abs(o)),r=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return
                            Object.assign(l,this.options.ticks.format),Ri(t,s,l)},logarithmic(t,e,i){if(0===t)return"0";const s=t/Math.pow(10,Math.floor(Dt(t)));return
                            1===s||2===s||5===s?Cs.numeric.call(this,t,e,i):""}};var Os={formatters:Cs};function As(t,e){const i=t.options.ticks,s=i.maxTicksLimit||function(t)
                            {const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(s,n))}(t),n=i.major.enabled?function(t)
                            {const e=[];let i,s;for(i=0,s=t.length;is)return function(t,e,i,s){let n,o=0,a=i[0];for(s=Math.ceil(s),n=0;nn)return e}return Math.max(n,1)}(n,e,s);if(o>0)
                            {let t,i;const s=o>1?Math.round((r-a)/(o-1)):null;for(Ts(e,l,h,$(s)?0:a-s,a),t=0,i=o-1;te.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:
                            [],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:
                            {minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,call
                            {},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255,
                            0.75)",backdropPadding:2}}),bt.route("scale.ticks","color","","color"),bt.route("scale.grid","color","","borderColor"),bt.route("scale.grid","borderColor","
                            {_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBor
                            {_fallback:"scale"}),bt.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const
                            Ls=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Rs(t,e){const i=[],s=t.length/e,n=t.length;let o=0;for(;oa+r)))return h}function Is(t){return
                            t.drawTicks?t.tickLength:0}function zs(t,e){if(!t.display)return 0;const i=He(t.font,e),s=Ne(t.padding);return(Y(t.text)?
                            t.text.length:1)*i.lineHeight+s.height}function Fs(t,e,i){let n=s(t);return(i&&"right"!==e||!i&&"right"===e)&&(n=
                            (t=>"left"===t?"right":"right"===t?"left":t)(n)),n}class Bs extends Ds{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void
                            0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void
                            0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void
                            0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void
                            0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache=
                            {},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void
                            0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t)
                            {this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=th
                            {return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return
                            t=q(t,Number.POSITIVE_INFINITY),e=q(e,Number.NEGATIVE_INFINITY),i=q(i,Number.POSITIVE_INFINITY),s=q(s,Number.NEGATIVE_INFINITY
                            {min:q(t,i),max:q(e,s),minDefined:X(t),maxDefined:X(e)}}getMinMax(t){let e,
                            {min:i,max:s,minDefined:n,maxDefined:o}=this.getUserBounds();if(n&&o)return{min:i,max:s};const a=this.getMatchingVisibleMetas();for(let
                            r=0,l=a.length;rs?s:i,s=n&&i>s?i:s,{min:q(i,q(s,i)),max:q(s,q(i,s))}}getPadding()
                            {return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return
                            this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout()
                            {this._cache={},this._dataLimitsCached=!1}beforeUpdate(){J(this.options.beforeUpdate,[this])}update(t,e,i)
                            {const{beginAtZero:s,grace:n,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.a
                            this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||
                            (this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=$e(this,n,s),this._dataLimittsCached=!0),this.beforeBuildTicks(
                                [],this.afterBuildTicks();const r=a=n||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const
                                h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=jt(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/i:u/(i-1),c+6>o&&
                                (o=u/(i-(t.offset?.5:1)),a=this.maxHeight-Is(t.grid)-e.paddingzs(t.title,this.chart.options.font),r=Math.sqrt(c*c+d*d),l=zt(Math.min(Math.asin(jt((h.highest.height+6)/o,-1,1)),Math.asin(jt(a/r,-1,1))-
                                Math.asin(jt(d/r,-1,1)))),l=Math.max(s,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){J(this.options.afterCalculateLabelRotation,
                                [this])}beforeFit(){J(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:
                                {ticks:i,title:s,grid:n}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=zs(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Is(n)+o):
                                (t.height=this.maxHeight,t.width=Is(n)+o),i.display&&this.ticks.length)
                                {const{first:e,last:s,widest:n,highest:o}=this._getLabelSizes(),r=2*i.padding,l=It(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(a){const
                                e=i.mirror?0:c*n.width+h*o.height;t.height=Math.min(this.maxHeight,t.height+e+r)}else{const e=i.mirror?
                                0:h*n.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+r)}this._calculatePadding(e,s,c,h)}}this._handleMargins(),a?
                                (this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.heightthis._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:
                                {align:n,padding:o},position:a}=this.options,r=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const
                                a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,d=0;r?l?(c=s*t.width,d=i*e.height):
                                (c=i*t.height,d=s*e.width):"start"===n?d=e.width:"end"===n?c=t.width:(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((ca+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let i=e.height/2,s=t.height/2;"start"===n?
                                (i=0,s=t.height):"end"===n&&(i=e.height,s=0),this.paddingTop=i+o,this.paddingBottom=s+o}}_handleMargins(){this._margins&&
                                (this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.righ
                                {J(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return
                                this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e{const
                                i=t.gc,s=i.length/2;let n;if(s>e){for(n=0;n({width:n[t]||0,height:o[t]||0});return{first:v(0),last:v(e1),widest:v(_),highest:v(y),widths:n,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t)
                                {}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&
                                (t=1-t);const e=this._startPixel+t*this._length;return $t(this._alignToPixels?Kt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(tthis._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue()
                                {const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&ta*s?a/i:r/s:r*s0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:n,position:o}=s,a=n.offset,r=this.isHorizontal(),l=this.ticks.length+(a?1:0),h=Is(n),c=[],d=n.setContext(this.getContext()),u=d.drawBorder?d.borderWidth:0,f=u/2,g=function(t){return Kt(i,t,u)};let
                                p,m,x,b,_,y,v,w,M,k,S,P;if("top"===o)p=g(this.bottom),y=this.bottom-h,w=p-f,k=g(t.top)+f,P=t.bottom;else
                                if("bottom"===o)p=g(this.top),k=t.top,P=g(t.bottom)-f,y=p+f,w=this.top+h;else if("left"===o)p=g(this.right),_=this.right-h,v=pf,M=g(t.left)+f,S=t.right;else if("right"===o)p=g(this.left),M=t.left,S=g(t.right)-f,_=p+f,v=this.left+h;else if("x"===e)
                                {if("center"===o)p=g((t.top+t.bottom)/2+.5);else if(U(o)){const t=Object.keys(o)
                                [0],e=o[t];p=g(this.chart.scales[t].getPixelForValue(e))}k=t.top,P=t.bottom,y=p+f,w=y+h}else if("y"===e){if("center"===o)p=g((t.left+t.right)/2);else
                                if(U(o)){const t=Object.keys(o)[0],e=o[t];p=g(this.chart.scales[t].getPixelForValue(e))}_=p-f,v=_-h,M=t.left,S=t.right}const
                                D=K(s.ticks.maxTicksLimit,l),C=Math.max(1,Math.ceil(l/D));for(m=0;me.value===t));if(i>=0){return
                                e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||
                                (this._gridLineItems=this._computeGridLineItems(t));let n,o;const a=(t,e,s)=>{s.width&&s.color&&
                                (i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||
                                []),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,o=s.length;n{this.dra
                                {z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const
                                e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let n,o;for(n=0,o=e.length;n{const s=i.split("."),n=s.pop(),o=
                                [t].concat(s).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");bt.route(o,n,l,r)}))}(e,t.defaultRoutes);t.descriptors&&bt.describe(e,t.descriptors)}
                                (t,o,i),this.override&&bt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete
                                e[i],s&&i in bt[s]&&(delete bt[s][i],this.override&&delete gt[i])}}var Ws=new class{constructor(){this.controllers=new
                                Vs(Ps,"datasets",!0),this.elements=new Vs(Ds,"elements"),this.plugins=new Vs(Object,"plugins"),this.scales=new
                                Vs(Bs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t)
                                {this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t)
                                {this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t)
                                {this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return
                                this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return
                                this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t)
                                {this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t)
                                {this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const
                                s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):Q(e,(e=>{const
                                s=i||this._getRegistryForType(e);this._exec(t,s,e)}))}))}_exec(t,e,i){const s=ht(t);J(i["before"+s],[],i),e[t](i),J(i["after"+s],[],i)}_getRegistryForType(t)
                                {for(let e=0;et.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function Hs(t,e){return
                                e||!1!==t?!0===t?{}:t:null}function js(t,e,i,s){const n=t.pluginScopeKeys(e),o=t.getOptionScopes(i,n);return t.createResolver(o,s,[""],
                                {scriptable:!1,indexable:!1,allKeys:!0})}function $s(t,e){const i=bt.datasets[t]||{};return((e.datasets||{})[t]||
                                {}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Ys(t,e){return"x"===t||"y"===t?t:e.axis||("top"===
                                (i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Us(t){const e=t.options||(t.options=
                                {});e.plugins=K(e.plugins,{}),e.scales=function(t,e){const i=gt[t.type]||{scales:{}},s=e.scales||
                                {},n=$s(t.type,e),o=Object.create(null),a=Object.create(null);return Object.keys(s).forEach((t=>{const e=s[t];if(!U(e))return console.error(`Invalid
                                scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const
                                r=Ys(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(r,n),h=i.scales||{};o[r]=o[r]||t,a[t]=ot(Object.create(null),
                                [{axis:r},e,h[r],h[l]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,r=i.indexAxis||$s(n,e),l=(gt[n]||{}).scales||{};Object.keys(l).forEach((t=>
                                {const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}
                                (t,r),n=i[e+"AxisID"]||o[e]||e;a[n]=a[n]||Object.create(null),ot(a[n],[{axis:e},s[n],l[t]])}))})),Object.keys(a).forEach((t=>{const e=a[t];ot(e,
                                [bt.scales[e.type],bt.scale])})),a}(t,e)}function Xs(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const qs=new Map,Ks=new
                                Set;function Gs(t,e){let i=qs.get(t);return i||(i=e(),qs.set(t,i),Ks.add(i)),i}const Zs=(t,e,i)=>{const s=lt(e,i);void 0!==s&&t.add(s)};class
                                Js{constructor(t){this._config=function(t){return(t=t||{}).data=Xs(t.data),Us(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get
                                platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set
                                data(t){this._config.data=Xs(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return
                                this._config.plugins}update(){const t=this._config;this.clearCache(),Us(t)}clearCache()
                                {this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Gs(t,(()=>
                                [[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Gs(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],
                                [`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Gs(`${t}-${e}`,(()=>
                                [[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Gs(`${this.type}-plugin-${e}`,(()=>
                                [[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new
                                Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:n}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const r=new
                                Set;e.forEach((e=>{t&&(r.add(t),e.forEach((e=>Zs(r,t,e)))),e.forEach((t=>Zs(r,s,t))),e.forEach((t=>Zs(r,gt[n]||
                                {},t))),e.forEach((t=>Zs(r,bt,t))),e.forEach((t=>Zs(r,pt,t)))}));const l=Array.from(r);return
                                0===l.length&&l.push(Object.create(null)),Ks.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,gt[e]||{},bt.datasets[e]||
                                {},{type:e},bt,pt]}resolveNamedOptions(t,e,i,s=[""]){const n={$shared:!0},{resolver:o,subPrefixes:aa}=Qs(this._resolverCache,t,s);let
                                r=o;if(function(t,e){const{isScriptable:i,isIndexable:s}=ri(t);for(const n of e){const e=i(n),o=s(n),a=(o||e)&&t[n];if(e&&
                                (dt(a)||tn(a))||o&&Y(a))return!0}return!1}(o,e)){n.$shared=!1;r=ai(o,i=dt(i)?i():i,this.createResolver(t,i,a))}for(const t of e)n[t]=r[t];return
                                n}createResolver(t,e,i=[""],s){const{resolver:n}=Qs(this._resolverCache,t,i);return U(e)?ai(n,e,void 0,s):n}}function Qs(t,e,i){let s=t.get(e);s||(s=new
                                Map,t.set(e,s));const n=i.join();let o=s.get(n);if(!o){o={resolver:oi(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},s.set(n,o)}return
                                o}const tn=t=>U(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||dt(t[i])),!1);const en=["top","bottom","left","right","chartArea"];function
                                sn(t,e){return"top"===t||"bottom"===t||-1===en.indexOf(t)&&"x"===e}function nn(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function
                                on(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),J(i&&i.onComplete,[t],e)}function an(t){const
                                e=t.chart,i=e.options.animation;J(i&&i.onProgress,[t],e)}function rn(t){return ge()&&"string"==typeof t?
                                t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const ln={},hn=t=>{const e=rn(t);return
                                Object.values(ln).filter((t=>t.canvas===e)).pop()};function cn(t,e,i){const s=Object.keys(t);for(const n of s){const s=+n;if(s>=e){const o=t[n];delete
                                t[n],(i>0||s>e)&&(t[s+i]=o)}}}class dn{constructor(t,e){const s=this.config=new Js(e),n=rn(t),o=hn(n);if(o)throw new Error("Canvas is already in use.
                                Chart with ID '"+o.id+"' must be destroyed before the canvas can be reused.");const
                                r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||ls(n)),this.platform.updateConfig(s);const
                                l=this.platform.acquireContext(n,r.aspectRatio),h=l&&l.canvas,c=h&&h.height,d=h&&h.width;this.id=j(),this.ctx=l,this.canvas=h,this.width=d,this.heig
                                [],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=
                                [],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new
                                Ns,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void
                                0,this._doResize=i((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],ln[this.id]=this,l&&h?
                                (a.listen(this,"complete",on),a.listen(this,"progress",an),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't
                                acquire context from the given item")}get aspectRatio(){const{options:
                                {aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:n}=this;return $(t)?e&&n?n:s?i/s:null:t}get data(){return this.config.data}set
                                data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return
                                this.notifyPlugins("beforeInit"),this.options.responsive?
                                this.resize():ke(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return
                                Gt(this.canvas,this.ctx),this}stop(){return a.stop(this),this}resize(t,e){a.running(this)?this._resizeBeforeDraw=
                                {width:t,height:e}:this._resize(t,e)}_resize(t,e){const
                                i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,n),a=i.devicePixelRatio||this.platform
                                (this.notifyPlugins("resize",{size:o}),J(i.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs()
                                {Q(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const
                                    i=e[t],s=Ys(t,i),n="r"===s,o="x"===s;return{options:i,dposition:n?"chartArea":o?"bottom":"left",dtype:n?"radialLinear":o?"category":"linear"}})))),Q(n,
                                    (e=>{const n=e.options,o=n.id,a=Ys(o,n),r=K(n.type,e.dtype);void 0!==n.position&&sn(n.position,a)===sn(e.dposition)||
                                    (n.position=e.dposition),s[o]=!0;let l=null;if(o in i&&i[o].type===r)l=i[o];else{l=new(Ws.getScale(r))
                                    ({id:o,type:r,ctx:this.ctx,chart:this}),i[l.id]=l}l.init(n,t)})),Q(s,((t,e)=>{t||delete i[e]})),Q(i,(t=>
                                    {ni.configure(this,t,t.options),ni.addBox(this,t)}))}_updateMetasets(){const
                                    t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;te.length&&delete
                                    this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=
                                    [],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i{this.getDatasetMeta(e).controller.reset()}),this)}reset()
                                    {this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const
                                    i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._ch
                                    {mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let
                                    t=0,e=this.data.datasets.length;t{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",
                                    {mode:t}),this._layers.sort(nn("z","_idx"));const{_active:a,_lastEvent:r}=this;r?
                                    this._eventHandler(r,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Q(this.scales,(t=>
                                    {ni.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new
                                    Set(Object.keys(this._listeners)),i=new Set(t.events);ut(e,i)&&!!this._responsiveListeners===t.responsive||
                                    (this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||
                                    [];for(const{method:i,start:s,count:n}of e){cn(t,s,"_removeElements"===i?-n:n)}}_getUniformDataChanges(){const
                                    t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new
                                    Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=i(0);for(let t=1;tt.split(","))).map((t=>
                                    ({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",
                                    {cancelable:!0}))return;ni.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],Q(this.boxes,(t=>
                                    {i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>
                                    {t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let
                                    t=0,e=this.data.datasets.length;t=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const
                                    e=this.ctx,i=t._clip,s=!i.disabled,n=this.chartArea,o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&
                                    (s&&Qt(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?
                                    this.height:n.bottom+i.bottom}),t.controller.draw(),s&&te(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}getElementsAtEventForMode(t
                                    {const n=Ee.modes[e];return"function"==typeof n?n(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let
                                    s=i.filter((t=>t&&t._dataset===e)).pop();return s||(s={type:null,data:
                                    [],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:
                                    [],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ye(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return
                                    this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const
                                    i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e)
                                    {this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t)
                                    {return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void
                                    0,s);ct(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?s:void
                                    0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const
                                    e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let
                                    t,e;for(this.stop(),a.remove(this),t=0,e=this.data.datasets.length;t{e.addEventListener(this,i,s),t[i]=s},s=(t,e,i)=>
                                    {t.offsetX=e,t.offsetY=i,this._eventHandler(t)};Q(this.options.events,(t=>i(t,s)))}bindResponsiveEvents(){this._responsiveListeners||
                                    (this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(i,s)=>{t[i]&&
                                    (e.removeEventListener(this,i,s),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>
                                    {s("attach",a),this.attached=!0,this.resize(),i("resize",n),i("detach",o)};o=()=>
                                    {this.attached=!1,s("resize",n),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Q(this._listeners,((t,e)=>
                                    {this.platform.removeEventListener(this,e,t)})),this._listeners={},Q(this._responsiveListeners,((t,e)=>
                                    {this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let
                                    n,o,a,r;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),a=0,r=t.length;a{consti=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!tt(i,e)&&
                                    (this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const s=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=n(e,t),a=i?
                                        t:n(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i=
                                        {event:t,replay:e,cancelable:!0,inChartArea:Jt(t,this.chartArea,this._minPadding)},s=e=>
                                        (e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,s))return;const
                                        n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),
                                        (n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=
                                        [],options:n}=this,o=e,a=this._getActiveElements(t,s,i,o),r=ft(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,r);i&&
                                        (this._lastEvent=null,J(n.onHover,[t,a,this],this),r&&J(n.onClick,[t,a,this],this));const h=!tt(a,s);return(h||e)&&
                                        (this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return[];if(!i)return e;const
                                        n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,s)}}const un=()=>Q(dn.instances,
                                        (t=>t._plugins.invalidate())),fn=!0;function gn(){throw new Error("This method is not implemented: Check that a complete date adapter is
                                        provided.")}Object.defineProperties(dn,{defaults:{enumerable:fn,value:bt},instances:{enumerable:fn,value:ln},overrides:
                                        {enumerable:fn,value:gt},registry:{enumerable:fn,value:Ws},version:{enumerable:fn,value:"3.7.1"},getChart:{enumerable:fn,value:hn},register:
                                        {enumerable:fn,value:(...t)=>{Ws.add(...t),un()}},unregister:{enumerable:fn,value:(...t)=>{Ws.remove(...t),un()}}});class pn{constructor(t)
                                        {this.options=t||{}}formats(){return gn()}parse(t,e){return gn()}format(t,e){return gn()}add(t,e,i){return gn()}diff(t,e,i){return gn()}startOf(t,e,i){return
                                        gn()}endOf(t,e){return gn()}}pn.override=function(t){Object.assign(pn.prototype,t)};var mn={_date:pn};function xn(t){const e=t.iScale,i=function(t,e)
                                        {if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let s=[];for(let e=0,n=i.length;et-e)))}return t._cache.$bar}(e,t.type);let
                                        s,n,o,a,r=e._length;const l=()=>{32767!==o&&-32768!==o&&(ct(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(s=0,n=i.length;sMath.abs(r)&&
                                        (l=r,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:n,end:o,min:a,max:r}}(t,e,i,s):e[i.axis]=i.parse(t,s),e}function _n(t,e,i,s){const
                                        n=t.iScale,o=t.vScale,a=n.getLabels(),r=n===o,l=[];let h,c,d,u;for(h=i,c=i+s;ht.x,i="left",s="right"):(e=t.base=i?1:-1)}(c,e,o)*n,d===o&&(p-
                                        =c/2),h=p+c),p===e.getPixelForValue(o)){const t=Ct(c)*e.getLineWidthForValue(o)/2;p+=t,c-
                                        =t}return{size:c,base:p,head:h,center:h+c/2}}_calculateBarIndexPixels(t,e){const
                                        i=e.scale,s=this.options,n=s.skipNull,o=K(s.maxBarThickness,1/0);let a,r;if(e.grouped){const i=n?
                                        this._getStackCount(t):e.stackCount,l="flex"===s.barThickness?function(t,e,i,s){const n=e.pixels,o=n[t];let a=t>0?n[t-1]:null,r=t=0;--
                                        i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,
                                        {xScale:i,yScale:s}=e,n=this.getParsed(t),o=i.getLabelForValue(n.x),a=s.getLabelForValue(n.y),r=n._custom;return{label:e.label,value:"("+o+",
                                        "+a+(r?", "+r:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const n="reset"===s,
                                        {iScale:o,vScale:a}=this._cachedMeta,r=this.resolveDataElementOptions(e,s),l=this.getSharedOptions(r),h=this.includeOptions(s,l),c=o.axis,d=a.ax
                                        r=e;r""}}}};class Dn extends Ps{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void
                                        0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const
                                        i=this.getDataset().data,s=this._cachedMeta;if(!1===this._parsing)s._parsed=i;else{let n,o,a=t=>+i[t];if(U(i[t]))
                                        {const{key:t="value"}=this._parsing;a=e=>+lt(i[e],t)}for(n=t,o=t+e;nHt(t,r,l,!0)?1:Math.max(e,e*i,s,s*i),g=(t,e,s)=>Ht(t,r,l,!0)?
                                        -1:Math.min(e,e*i,s,s*i),p=f(0,h,d),m=f(kt,c,u),x=g(_t,h,d),b=g(_t+kt,c,u);s=(p-x)/2,n=(m-b)/2,o=-(p+x)/2,a=-(m+b)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:a}}(c,h,r),p=(i.width-o)/d,m=(i.height-o)/u,x=Math.max(Math.min(p,m)/2,0),b=Z(this.options.radius,x),_=(bMath.max(b*r,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*b,this.offsetY=g*b,s.total=this.calculateTotal(),this.outerRadius=b-
                                        _*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-
                                        _*l,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,n=this._getCircumference();return
                                        e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===s._parsed[t]||s.data[t].hidden?
                                        0:this.calculateCircumference(s._parsed[t]*n/yt)}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.chartArea,r=o.options.animation,l=
                                        (a.left+a.right)/2,h=(a.top+a.bottom)/2,c=n&&r.animateScale,d=c?0:this.innerRadius,u=c?
                                        0:this.outerRadius,f=this.resolveDataElementOptions(e,s),g=this.getSharedOptions(f),p=this.includeOptions(s,g);let
                                        m,x=this._getRotation();for(m=0;m0&&!isNaN(t)?yt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||
                                        [],n=Ri(e._parsed[t],i.options.locale);return{label:s[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let
                                        s,n,o,a,r;if(!t)for(s=0,n=i.data.datasets.length;s"spacing"!==t,_indexable:t=>"spacing"!==t},Dn.overrides={aspectRatio:1,plugins:{legend:{labels:
                                        {generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>
                                        {const
                                        n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i
                                        {i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return Y(e)?
                                        (e=e.slice(),e[0]+=i):e+=i,e}}}}};class Cn extends Ps{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,
                                        {dataset:i,data:s=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:a,count:r}=function(t,e,i){const s=e.length;let n=0,o=s;if(t._sorted)
                                        {const{iScale:a,_parsed:r}=t,l=a.axis,{min:h,max:c,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(n=jt(Math.min(re(r,a.axis,h).lo,i?
                                        s:re(e,l,a.getPixelForValue(h)).lo),0,s-1)),o=u?jt(Math.max(re(r,a.axis,c).hi+1,i?0:re(e,l,a.getPixelForValue(c)).hi+1),n,s)-n:sn}return{start:n,count:o}}(e,s,o);this._drawStart=a,this._drawCount=r,function(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,n=
                                        {xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=n,!0;const
                                        o=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),o}(e)&&
                                        (a=0,r=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=s;const
                                        l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,
                                        {animated:!o,options:l},t),this.updateElements(s,a,r,t)}updateElements(t,e,i,s){const n="reset"===s,
                                        {iScale:o,vScale:a,_stacked:r,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),c=this.getSharedOptions(h),d=this.includeOptio
                                        {spanGaps:g,segment:p}=this.options,m=Tt(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||n||"none"===s;let
                                        b=e>0&&this.getParsed(e-1);for(let h=e;h0&&i[u]-b[u]>m,p&&(g.parsed=i,g.raw=l.data[h]),d&&
                                        (g.options=c||this.resolveDataElementOptions(h,e.active?"active":s)),x||this.updateElement(e,h,g,s),b=i}this.updateSharedOptions(c,s,h)}getMaxOv
                                        {const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const
                                        n=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,n,o)/2}draw()
                                        {const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Cn.id="line",Cn.defaults=
                                        {datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Cn.overrides={scales:{_index_:{type:"category"},_value_:
                                        {type:"linear"}}};class On extends Ps{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const
                                        e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=Ri(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:n}}update(t){const
                                        e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const
                                        t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(s/2,0),o=(n-Math.max(i.cutoutPercentage?
                                        n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-o*this.index,this.innerRadius=this.outerRadiuso}updateElements(t,e,i,s){const
                                        n="reset"===s,o=this.chart,a=this.getDataset(),r=o.options.animation,l=this._cachedMeta.rScale,h=l.xCenter,c=l.yCenter,d=l.getIndexAngle(0)-.5*_t
                                        u,f=d;const g=360/this.countVisibleElements();for(u=0;u{!isNaN(t.data[s])&&this.chart.getDataVisibility(s)&&i++})),i}_computeAngle(t,e,i){return
                                        this.chart.getDataVisibility(t)?It(this.resolveDataElementOptions(t,e).angle||i):0}}On.id="polarArea",On.defaults=
                                        {dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:
                                        ["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},On.overrides={aspectRatio:1,plugins:{legend:{labels:
                                        {generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>
                                        {const
                                        n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i
                                        {i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+":
                                        "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:
                                        {display:!1},startAngle:0}}};class An extends Dn{}An.id="pie",An.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Tn extends
                                        Ps{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()
                                        [t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||
                                        [],n=e.iScale.getLabels();if(i.points=s,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||((e.borderWidth=0);const
                                            o={_loop:!0,_fullLoop:n.length===s.length,options:e};this.updateElement(i,void 0,o,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s)
                                            {const n=this.getDataset(),o=this._cachedMeta.rScale,a="reset"===s;for(let r=e;r"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:
                                            {type:"linear"},y:{type:"linear"}}};var
                                            Rn=Object.freeze({__proto__:null,BarController:Sn,BubbleController:Pn,DoughnutController:Dn,LineController:Cn,PolarAreaController:On,PieContr
                                            En(t,e,i){const{startAngle:s,pixelMargin:n,x:o,y:a,outerRadius:r,innerRadius:l}=e;let h=n/r;t.beginPath(),t.arc(o,a,r,s-h,i+h),l>n?
                                            (h=n/l,t.arc(o,a,l,i+h,s-h,!0)):t.arc(o,a,n,i+kt,s-kt),t.closePath(),t.clip()}function In(t,e,i,s){const n=Be(t.options.borderRadius,
                                            ["outerStart","outerEnd","innerStart","innerEnd"]);const o=(i-e)/2,a=Math.min(o,s*e/2),r=t=>{const e=(i-Math.min(o,t))*s/2;return
                                            jt(t,0,Math.min(o,e))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:jt(n.innerStart,0,a),innerEnd:jt(n.innerEnd,0,a)}}function
                                            zn(t,e,i,s){return{x:i+t*Math.cos(e),y:s+t*Math.sin(e)}}function Fn(t,e,i,s,n)
                                            {const{x:o,y:a,startAngle:r,pixelMargin:l,innerRadius:h}=e,c=Math.max(e.outerRadius+s+i-l,0),d=h>0?h+s+i+l:0;let u=0;const f=n-r;if(s){const t=
                                            ((h>0?h-s:0)+(c>0?c-s:0))/2;u=(f-(0!==t?f*t/(t+s):f))/2}const g=(f-Math.max(.001,f*c-i/_t)/c)/2,p=r+g+u,m=n-g-u,
                                            {outerStart:x,outerEnd:b,innerStart:_,innerEnd:y}=In(e,d,c,m-p),v=c-x,w=c-b,M=p+x/v,k=m-b/w,S=d+_,P=d+y,D=p+_/S,C=my/P;if(t.beginPath(),t.arc(o,a,c,M,k),b>0){const e=zn(w,k,o,a);t.arc(e.x,e.y,b,k,m+kt)}const O=zn(P,m,o,a);if(t.lineTo(O.x,O.y),y>0){const
                                            e=zn(P,C,o,a);t.arc(e.x,e.y,y,m+kt,C+Math.PI)}if(t.arc(o,a,d,m-y/d,p+_/d,!0),_>0){const e=zn(S,D,o,a);t.arc(e.x,e.y,_,D+Math.PI,p-kt)}const
                                            A=zn(v,p,o,a);if(t.lineTo(A.x,A.y),x>0){const e=zn(v,M,o,a);t.arc(e.x,e.y,x,p-kt,M)}t.closePath()}function Bn(t,e,i,s,n){const{options:o}=e,
                                            {borderWidth:a,borderJoinStyle:r}=o,l="inner"===o.borderAlign;a&&(l?(t.lineWidth=2*a,t.lineJoin=r||"round"):
                                            (t.lineWidth=a,t.lineJoin=r||"bevel"),e.fullCircles&&function(t,e,i)
                                            {const{x:s,y:n,startAngle:o,pixelMargin:a,fullCircles:r}=e,l=Math.max(e.outerRadius-a,0),h=e.innerRadius+a;let
                                            c;for(i&&En(t,e,o+yt),t.beginPath(),t.arc(s,n,h,o+yt,o,!0),c=0;c=yt||Ht(n,a,r),f=Yt(o,l+d,h+d);return u&&f}getCenterPoint(t)
                                            {const{x:e,y:i,startAngle:s,endAngle:n,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circ
                                            {offset:r,spacing:l}=this.options,h=(s+n)/2,c=(o+a+l+r)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return
                                            this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/2,n=
                                            (e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>yt?
                                            Math.floor(i/yt):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(s){o=s/2;const e=
                                            (this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*o,Math.sin(e)*o),this.circumference>=_t&&
                                            (o=s)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const a=function(t,e,i,s){const{fullCircles:n,startAngle:o,circumference:a}=e;let
                                            r=e.endAngle;if(n){Fn(t,e,i,s,o+yt);for(let e=0;er&&o>r;return{count:s,start:l,loop:e.loop,ilen:h(a+(h?r-t:t))%o,_=()=>{f!==g&&
                                            (t.lineTo(m,g),t.lineTo(m,f),t.lineTo(m,p))};for(l&&(d=n[b(0)],t.moveTo(d.x,d.y)),c=0;c<=r;++c){if(d=n[b(c)],d.skip)continue;const
                                            e=d.x,i=d.y,s=0|e;s===u?(ig&&(g=i),m=(x*m+e)/++x):(_(),t.lineTo(e,i),u=s,x=0,f=g=i),p=i}_()}function Yn(t){const
                                            e=t.options,i=e.borderDash&&e.borderDash.length;return!
                                            (t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?$n:jn}Vn.id="arc",Vn.defaults=
                                            {borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Vn.defaultRoutes={backgroundColor:"backgroundColor"};const Un="function"==typeof Path2D;function Xn(t,e,i,s){Un&&!e.options.segment?function(t,e,i,s){let
                                                n=e._path;n||(n=e._path=new Path2D,e.path(n,i,s)&&n.closePath()),Wn(t,e.options),t.stroke(n)}(t,e,i,s):function(t,e,i,s)
                                                {const{segments:n,options:o}=e,a=Yn(e);for(const r of n)Wn(t,o,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}
                                                (t,e,i,s)}class qn extends Ds{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void
                                                0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void
                                                0,t&&Object.assign(this,t)}updateControlPoints(t,e){const
                                                i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?
                                                this._loop:this._fullLoop;ki(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete
                                                this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||
                                                (this._segments=Ni(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const
                                                t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],n=this.points,o=Wi(this,
                                                {property:e,start:s,end:s});if(!o.length)return;const a=[],r=function(t){return t.stepped?Ai:t.tension||"monotone"===t.cubicInterpolationMode?Ti:Oi}
                                                (i);let l,h;for(l=0,h=o.length;l"borderDash"!==t&&"fill"!==t};class Gn extends Ds{constructor(t){super(),this.options=void 0,this.parsed=void
                                                0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:n,y:o}=this.getProps(["x","y"],i);return Math.pow(tn,2)+Math.pow(e-o,2){oo(t)}))}var ro={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>
                                                {if(!i.enabled)return void ao(t);const s=t.width;t.data.datasets.forEach(((e,n)=>
                                                {const{_data:o,indexAxis:a}=e,r=t.getDatasetMeta(n),l=o||e.data;if("y"===je([a,t.options.indexAxis]))return;if("line"!==r.type)return;const
                                                h=t.scales[r.xAxisID];if("linear"!==h.type&&"time"!==h.type)return;if(t.options.parsing)return;let{start:c,count:d}=function(t,e){const i=e.length;let
                                                s,n=0;const{iScale:o}=t,{min:a,max:r,minDefined:l,maxDefined:h}=o.getUserBounds();return l&&(n=jt(re(e,o.axis,a).lo,0,i-1)),s=h?
                                                jt(re(e,o.axis,r).hi+1,n,i)-n:i-n,{start:n,count:s}}(r,l);if(d<=(i.threshold||4*s))return void oo(e);let u;switch($(o)&&(e._data=l,delete
                                                e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t)
                                                {this._data=t}})),i.algorithm){case"lttb":u=function(t,e,i,s,n){const o=n.samples||s;if(o>=i)return t.slice(e,e+i);const a=[],r=(i-2)/(o-2);let l=0;const
                                                h=e+i-1;let c,d,u,f,g,p=e;for(a[l++]=t[p],c=0;cu&&(u=f,d=t[s],g=s);a[l++]=d,p=g}return a[l++]=t[h],a}(l,c,d,s,i);break;case"min-max":u=function(t,e,i,s)
                                                {let n,o,a,r,l,h,c,d,u,f,g=0,p=0;const m=[],x=e+i-1,b=t[e].x,_=t[x].x-b;for(n=e;nf&&(f=r,c=n),g=(p*g+o.x)/++p;else{const i=n-1;if(!$(h)&&!$(c)){const
                                                e=Math.min(h,c),s=Math.max(h,c);e!==d&&e!==i&&m.push({...t[e],x:g}),s!==d&&s!==i&&m.push({...t[s],x:g})}n>0&&i!==d&&m.push(t[i]),m.push(o),l=
                                                m}(l,c,d,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=u}))},destroy(t){ao(t)}};function
                                                lo(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=K(i&&i.target,i);return void 0===s&&(s=!!e.backgroundColor),!1!==s&&null!==s&&
                                                (!0===s?"origin":s)}(t);if(U(s))return!isNaN(s.value)&&s;let n=parseFloat(s);return X(n)&&Math.floor(n)===n?("-"!==s[0]&&"+"!==s[0]||(n=e+n),!
                                                (n===e||n<0||n>=i)&&n):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}class ho{constructor(t)
                                                {this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:n,radius:o}=this;return e=e||
                                                {start:0,end:yt},t.arc(s,n,o,e.end,e.start,!0),!i.bounds}interpolate(t)
                                                {const{x:e,y:i,radius:s}=this,n=t.angle;return{x:e+Math.cos(n)*s,y:i+Math.sin(n)*s,angle:n}}}function co(t){return(t.scale||
                                                {}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,s=e.options,n=e.getLabels().length,o=[],a=s.reverse?e.max:e.min,r=s.reverse?
                                                e.min:e.max;let l,h,c;if(c="start"===i?a:"end"===i?r:U(i)?i.value:e.getBaseValue(),s.grid.circular)return h=e.getPointPositionForValue(0,a),new
                                                ho({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)});for(l=0;lt;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function fo(t,e,i)
                                                {const s=[];for(let n=0;n{e=uo(t,e,n);const a=n[t],r=n[e];null!==s?(o.push({x:a.x,y:s}),o.push({x:r.x,y:s})):null!==i&&
                                                (o.push({x:i,y:a.y}),o.push({x:i,y:r.y}))})),o}(t,e),i.length?new qn({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function xo(t,e,i){let
                                                s=t[e].fill;const n=[e];let o;if(!i)return s;for(;!1!==s&&-1===n.indexOf(s);){if(!X(s))return s;if(o=t[s],!o)return!1;if(o.visible)return
                                                s;n.push(s),s=o.fill}return!1}function bo(t,e,i){const{segments:s,points:n}=e;let o=!0,a=!1;t.beginPath();for(const r of s)
                                                {const{start:s,end:l}=r,h=n[s],c=n[uo(s,l,n)];o?(t.moveTo(h.x,h.y),o=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),a=!!e.pathSegment(t,r,{move:a}),a?
                                                t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function _o(t,e,i,s){if(s)return;let n=e[t],o=i[t];return"angle"===t&&
                                                (n=Nt(n),o=Nt(o)),{property:t,start:n,end:o}}function yo(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function vo(t,e,i)
                                                {const{top:s,bottom:n}=e.chart.chartArea,{property:o,start:a,end:r}=i||{};"x"===o&&(t.beginPath(),t.rect(a,s,r-a,n-s),t.clip())}function wo(t,e,i,s)
                                                {const n=e.interpolate(i,s);n&&t.lineTo(n.x,n.y)}function Mo(t,e){const{line:i,target:s,property:n,color:o,scale:a}=e,r=function(t,e,i){const
                                                s=t.segments,n=t.points,o=e.points,a=[];for(const t of s){let{start:s,end:r}=t;r=uo(s,r,n);const l=_o(i,n[s],n[r],t.loop);if(!e.segments)
                                                {a.push({source:t,target:l,start:n[s],end:n[r]});continue}const h=Wi(e,l);for(const e of h){const s=_o(i,o[e.start],o[e.end],e.loop),r=Vi(t,n,s);for(const t
                                                of r)a.push({source:t,target:e,start:{[i]:yo(l,s,"start",Math.max)},end:{[i]:yo(l,s,"end",Math.min)}})}}return a}
                                                (i,s,n);for(const{source:e,target:l,start:h,end:c}of r){const{style:{backgroundColor:r=o}=
                                                {}}=e,d=!0!==s;t.save(),t.fillStyle=r,vo(t,a,d&&_o(n,h,c)),t.beginPath();const u=!!i.pathSegment(t,e);let f;if(d){u?t.closePath():wo(t,s,c,n);const
                                                e=!!s.pathSegment(t,l,{move:u,reverse:!0});f=u&&e,f||wo(t,s,h,n)}t.closePath(),t.fill(f?"evenodd":"nonzero"),t.restore()}}function ko(t,e,i){const
                                                s=po(e),{line:n,scale:o,axis:a}=e,r=n.options,l=r.fill,h=r.backgroundColor,{above:c=h,below:d=h}=l||{};s&&n.points.length&&(Qt(t,i),function(t,e)
                                                {const{line:i,target:s,above:n,below:o,area:a,scale:r}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&o!==n&&(bo(t,s,a.top),Mo(t,
                                                {line:i,target:s,color:n,scale:r,property:l}),t.restore(),t.save(),bo(t,s,a.bottom)),Mo(t,{line:i,target:s,color:o,scale:r,property:l}),t.restore()}(t,
                                                {line:n,target:s,above:c,below:d,area:i,scale:o,axis:a}),te(t))}var So={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets|||[]).length,n=[];let
                                                    o,a,r,l;for(a=0;a=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(o,i.axis),s&&ko(t.ctx,i,o))}},beforeDatasetsDraw(t,e,i)
                                                    {if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const
                                                    i=s[e].$filler;i&&ko(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const
                                                    s=e.meta.$filler;s&&!1!==s.fill&&"beforeDatasetDraw"===i.drawTime&&ko(t.ctx,s,t.chartArea)},defaults:
                                                    {propagate:!0,drawTime:"beforeDatasetDraw"}};const Po=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&
                                                    (i=Math.min(i,e),s=Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}};class Do extends Ds{constructor(t)
                                                    {super(),this._added=!1,this.legendHitBoxes=
                                                    [],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void
                                                    0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void
                                                    0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void
                                                    0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions()
                                                    {this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):
                                                    (this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let
                                                    e=J(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&
                                                    (e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return
                                                    void(this.width=this.height=0);const i=t.labels,s=He(i.font),n=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:r}=Po(i,n);let
                                                    l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,n,a,r)+10):
                                                    (h=this.maxHeight,l=this._fitCols(o,n,a,r)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeigh
                                                    {const{ctx:n,maxWidth:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+a;let
                                                    c=t;n.textAlign="left",n.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach(((t,f)=>{const g=i+e/2+n.measureText(t.text).width;
                                                    (0===f||l[l.length-1]+g+2*a>o)&&(c+=h,l[l.length-(f>0?0:1)]=0,u+=h,d++),r[f]={left:0,top:u,row:d,width:g,height:s},l[l.length1]+=g+a})),c}_fitCols(t,e,i,s){const{ctx:n,maxHeight:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.columnSizes=[],h=o-t;let
                                                    c=a,d=0,u=0,f=0,g=0;return this.legendItems.forEach(((t,o)=>{const p=i+e/2+n.measureText(t.text).width;o>0&&u+s+2*a>h&&
                                                    (c+=d+a,l.push({width:d,height:u}),f+=d+a,g++,d=u=0),r[o]=
                                                    {left:f,top:u,col:g,width:p,height:s},d=Math.max(d,p),u+=s+a})),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes()
                                                    {if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:
                                                    {padding:s},rtl:o}}=this,a=Ei(o,this.left,this.width);if(this.isHorizontal()){let o=0,r=n(i,this.left+s,this.right-this.lineWidths[o]);for(const l of
                                                    e)o!==l.row&&(o=l.row,r=n(i,this.left+s,this.right-this.lineWidths[o])),l.top+=this.top+t+s,l.left=a.leftForLtr(a.x(r),l.width),r+=l.width+s}else{let
                                                    o=0,r=n(i,this.top+t+s,this.bottom-this.columnSizes[o].height);for(const l of e)l.col!==o&&(o=l.col,r=n(i,this.top+t+s,this.bottomthis.columnSizes[o].height)),l.top=r,l.left+=this.left+s,l.left=a.leftForLtr(a.x(l.left),l.width),r+=l.height+s}}isHorizontal()
                                                    {return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){constt=this.ctx;Qt(t,this),this._draw(),te(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,
                                                    {align:a,labels:r}=t,l=bt.color,h=Ei(t.rtl,this.left,this.width),c=He(r.font),{color:d,padding:u}=r,f=c.size,g=f/2;let
                                                    p;this.drawTitle(),s.textAlign=h.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:m,boxHeight:x,itemHeight:b}=P
                                                    {x:n(a,this.left+u,this.right-i[0]),y:this.top+u+y,line:0}:{x:this.left+u,y:n(a,this.top+y+u,this.bottom-e[0].height),line:0},Ii(this.ctx,t.textDirection);const
                                                    v=b+u;this.legendItems.forEach(((w,M)=>{s.strokeStyle=w.fontColor||d,s.fillStyle=w.fontColor||d;const
                                                    k=s.measureText(w.text).width,S=h.textAlign(w.textAlign||(w.textAlign=r.textAlign)),P=m+g+k;let D=p.x,C=p.y;h.setWidth(this.width),_?
                                                    M>0&&D+P+u>this.right&&(C=p.y+=v,p.line++,D=p.x=n(a,this.left+u,this.right-i[p.line])):M>0&&C+v>this.bottom&&
                                                    (D=p.x=D+e[p.line].width+u,p.line++,C=p.y=n(a,this.top+y+u,this.bottom-e[p.line].height));!function(t,e,i)
                                                    {if(isNaN(m)||m<=0||isNaN(x)||x<0)return;s.save();const
                                                    n=K(i.lineWidth,1);if(s.fillStyle=K(i.fillStyle,l),s.lineCap=K(i.lineCap,"butt"),s.lineDashOffset=K(i.lineDashOffset,0),s.lineJoin=K(i.lineJoin,"miter"),s.lin
                                                    [])),r.usePointStyle){const o=
                                                    {radius:m*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},a=h.xPlus(t,m/2);Zt(s,o,a,e+g)}else{const o=e+Math.max((fx)/2,0),a=h.leftForLtr(t,m),r=We(i.borderRadius);s.beginPath(),Object.values(r).some((t=>0!==t))?oe(s,
                                                    {x:a,y:o,w:m,h:x,radius:r}):s.rect(a,o,m,x),s.fill(),0!==n&&s.stroke()}s.restore()}(h.x(D),C,w),D=o(S,D+m+g,_?D+P:this.right,t.rtl),function(t,e,i)
                                                    {se(s,i.text,t,e+b/2,c,{strikethrough:i.hidden,textAlign:h.textAlign(i.textAlign)})}(h.x(D),C,w),_?
                                                    p.x+=P+u:p.y+=v})),zi(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=He(e.font),o=Ne(e.padding);if(!e.display)return;const
                                                    a=Ei(t.rtl,this.left,this.width),r=this.ctx,l=e.position,h=i.size/2,c=o.top+h;let
                                                    d,u=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,u=n(t.align,u,this.right-f);else{const
                                                    e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);d=c+n(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const
                                                    g=n(l,u,u+f);r.textAlign=a.textAlign(s(l)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,se(r,e.text,g,d,i)}_computeTitleH
                                                    {const t=this.options.title,e=He(t.font),i=Ne(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let
                                                    i,s,n;if(Yt(t,this.left,this.right)&&Yt(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;it.chart.options.color,boxWidth:40,padding:10,generateLabel
                                                    {const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:o}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>
                                                    {const a=t.controller.getStyle(i?0:void
                                                    0),r=Ne(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.bord
                                                    (r.width+r.height)/4,strokeStyle:a.borderColor,pointStyle:s||a.pointStyle,rotation:a.rotation,textAlign:n||a.textAlign,borderRadius:0,datasetIndex:t.inde
                                                    {color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!
                                                    ["generateLabels","filter","sort"].includes(t)}}};class Oo extends Ds{constructor(t)
                                                    {super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void
                                                    0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const
                                                    i=this.options;if(this.left=0,this.top=0,!i.display)return
                                                    void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const s=Y(i.text)?
                                                    i.text.length:1;this._padding=Ne(i.padding);const n=s*He(i.font).lineHeight+this._padding.height;this.isHorizontal()?
                                                    this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t)
                                                    {const{top:e,left:i,bottom:s,right:o,options:a}=this,r=a.align;let l,h,c,d=0;return this.isHorizontal()?(h=n(r,i,o),c=e+t,l=o-i):("left"===a.position?
                                                    (h=i+t,c=n(r,s,e),d=-.5*_t):(h=o-t,c=n(r,e,s),d=.5*_t),l=s-e),{titleX:h,titleY:c,maxWidth:l,rotation:d}}draw(){const
                                                    t=this.ctx,e=this.options;if(!e.display)return;const i=He(e.font),n=i.lineHeight/2+this._padding.top,
                                                    {titleX:o,titleY:a,maxWidth:r,rotation:l}=this._drawArgs(n);se(t,e.text,0,0,i,
                                                    {color:e.color,maxWidth:r,rotation:l,textAlign:s(e.align),textBaseline:"middle",translation:[o,a]})}}var Ao={id:"title",_element:Oo,start(t,e,i)
                                                    {!function(t,e){const i=new Oo({ctx:t.ctx,options:e,chart:t});ni.configure(t,i,e),ni.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const
                                                    e=t.titleBlock;ni.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const s=t.titleBlock;ni.configure(t,s,i),s.options=i},defaults:
                                                    {align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:
                                                    {_scriptable:!0,_indexable:!1}};const To=new WeakMap;var Lo={id:"subtitle",start(t,e,i){const s=new
                                                    Oo({ctx:t.ctx,options:i,chart:t});ni.configure(t,s,i),ni.addBox(t,s),To.set(t,s)},stop(t){ni.removeBox(t,To.get(t)),To.delete(t)},beforeUpdate(t,e,i){const
                                                    s=To.get(t);ni.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:
                                                    {weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:
                                                    {_scriptable:!0,_indexable:!1}};const Ro={average(t){if(!t.length)return!1;let e,i,s=0,n=0,o=0;for(e=0,i=t.length;e-1?t.split("\n"):t}function zo(t,e)
                                                    {const{element:i,datasetIndex:s,index:n}=e,o=t.getDatasetMeta(s).controller,
                                                    {label:a,value:r}=o.getLabelAndValue(n);return{chart:t,label:a,parsed:o.getParsed(n),raw:t.data.datasets[s].data[n],formattedValue:r,dataset:o.getDa
                                                    Fo(t,e){const i=t.chart.ctx,{body:s,footer:n,title:o}=t,
                                                    {boxWidth:a,boxHeight:r}=e,l=He(e.bodyFont),h=He(e.titleFont),c=He(e.footerFont),d=o.length,u=n.length,f=s.length,g=Ne(e.padding);let
                                                    p=g.height,m=0,x=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(x+=t.beforeBody.length+t.afterBody.length,d&&
                                                    (p+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),x){p+=f*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(x-f)*l.lineHeight+(x1)*e.bodySpacing}u&&(p+=e.footerMarginTop+u*c.lineHeight+(u-1)*e.footerSpacing);let b=0;const _=function(t)
                                                    {m=Math.max(m,i.measureText(t).width+b)};return
                                                    i.save(),i.font=h.string,Q(t.title,_),i.font=l.string,Q(t.beforeBody.concat(t.afterBody),_),b=e.displayColors?a+2+e.boxPadding:0,Q(s,(t=>
                                                    {Q(t.before,_),Q(t.lines,_),Q(t.after,_)})),b=0,i.font=c.string,Q(t.footer,_),i.restore(),m+=g.width,{width:m,height:p}}function Bo(t,e,i,s)
                                                    {const{x:n,width:o}=i,{width:a,chartArea:{left:r,right:l}}=t;let h="center";return"center"===s?h=n<=(r+l)/2?"left":"right":n<=o/2?h="left":n>=a-o/2&&
                                                    (h="right"),function(t,e,i,s){const{x:n,width:o}=s,a=i.caretSize+i.caretPadding;return"left"===t&&n+o+a>e.width||"right"===t&&n-o-a<0||void 0}
                                                    (h,t,e,i)&&(h="center"),h}function Vo(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return it.height-s/2?"bottom":"center"}
                                                    (t,i);return{xAlign:i.xAlign||e.xAlign||Bo(t,e,i,s),yAlign:s}}function Wo(t,e,i,s){const{caretSize:n,caretPadding:o,cornerRadius:a}=t,
                                                    {xAlign:r,yAlign:l}=i,h=n+o,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=We(a);let g=function(t,e){let{x:i,width:s}=t;return"right"===e?i-
                                                    =s:"center"===e&&(i-=s/2),i}(e,r);const p=function(t,e,i){let{y:s,height:n}=t;return"top"===e?s+=i:s-="bottom"===e?n+i:n/2,s}
                                                    (e,l,h);return"center"===l?"left"===r?g+=h:"right"===r&&(g-=h):"left"===r?g-=Math.max(c,u)+n:"right"===r&&(g+=Math.max(d,f)+n),
                                                    {x:jt(g,0,s.width-e.width),y:jt(p,0,s.height-e.height)}}function No(t,e,i){const s=Ne(i.padding);return"center"===e?t.x+t.width/2:"right"===e?
                                                    t.x+t.width-s.right:t.x+s.left}function Ho(t){return Eo([],Io(t))}function jo(t,e){const
                                                    i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class $o extends Ds{constructor(t)
                                                    {super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=
                                                    [],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void
                                                    0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void
                                                    0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void
                                                    0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const
                                                    t=this._cachedAnimations;if(t)return t;const
                                                    e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,n=new gs(this.chart,s);return
                                                    s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=
                                                    (t=this.chart.getContext(),e=this,i=this._tooltipItems,Ye(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i}getTitle(t,e)
                                                    {const{callbacks:i}=e,s=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),o=i.afterTitle.apply(this,[t]);let a=[];return
                                                    a=Eo(a,Io(s)),a=Eo(a,Io(n)),a=Eo(a,Io(o)),a}getBeforeBody(t,e){return Ho(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e)
                                                    {const{callbacks:i}=e,s=[];return Q(t,(t=>{const e={before:[],lines:[],after:
                                                    []},n=jo(i,t);Eo(e.before,Io(n.beforeLabel.call(this,t))),Eo(e.lines,n.label.call(this,t)),Eo(e.after,Io(n.afterLabel.call(this,t))),s.push(e)})),s}getAfterBody(
                                                    {return Ho(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,s=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,
                                                    [t]),o=i.afterFooter.apply(this,[t]);let a=[];return a=Eo(a,Io(s)),a=Eo(a,Io(n)),a=Eo(a,Io(o)),a}_createItems(t){const
                                                    e=this._active,i=this.chart.data,s=[],n=[],o=[];let a,r,l=[];for(a=0,r=e.length;at.filter(e,s,n,i)))),t.itemSort&&(l=l.sort(((e,s)=>t.itemSort(e,s,i)))),Q(l,(e=>
                                                    {const
                                                    i=jo(t.callbacks,e);s.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),o.push(i.labelTextColor.call(this,e))})),this.labelColors=s,this.la{const i=this.options.setContext(this.getContext()),s=this._active;let n,o=[];if(s.length){const
                                                        t=Ro[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=thi
                                                        e=this._size=Fo(this,i),a=Object.assign({},t,e),r=Vo(this.chart,i,a),l=Wo(i,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,n=
                                                        {opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n=
                                                        {opacity:0});this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,
                                                        {chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const
                                                        n=this.getCaretPosition(t,i,s);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:n}=this,
                                                        {caretSize:o,cornerRadius:a}=i,{topLeft:r,topRight:l,bottomLeft:h,bottomRight:c}=We(a),{x:d,y:u}=t,{width:f,height:g}=e;let
                                                        p,m,x,b,_,y;return"center"===n?(_=u+g/2,"left"===s?(p=d,m=p-o,b=_+o,y=_-o):(p=d+f,m=p+o,b=_-o,y=_+o),x=p):(m="left"===s?
                                                        d+Math.max(r,h)+o:"right"===s?d+f-Math.max(l,c)-o:this.caretX,"top"===n?(b=u,_=b-o,p=m-o,x=m+o):(b=u+g,_=b+o,p=m+o,x=m-o),y=b),
                                                        {x1:p,x2:m,x3:x,y1:b,y2:_,y3:y}}drawTitle(t,e,i){const s=this.title,n=s.length;let o,a,r;if(n){const
                                                        l=Ei(i.rtl,this.x,this.width);for(t.x=No(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=He(i.titleFont),a=i.titleSpacing,e.fill
                                                        (t.beginPath(),t.fillStyle=n.multiKeyBackground,oe(t,{x:e,y:g,w:l,h:r,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),oe(t,
                                                        {x:i,y:g+1,w:l-2,h:r-2,radius:a}),t.fill()):
                                                        (t.fillStyle=n.multiKeyBackground,t.fillRect(e,g,l,r),t.strokeRect(e,g,l,r),t.fillStyle=o.backgroundColor,t.fillRect(i,g+1,l-2,r2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,
                                                        {bodySpacing:n,bodyAlign:o,displayColors:a,boxHeight:r,boxWidth:l,boxPadding:h}=i,c=He(i.bodyFont);let d=c.lineHeight,u=0;const
                                                        f=Ei(i.rtl,this.x,this.width),g=function(i){e.fillText(i,f.x(t.x+u),t.y+d/2),t.y+=d+n},p=f.textAlign(o);let
                                                        m,x,b,_,y,v,w;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=No(this,p,i),e.fillStyle=i.bodyColor,Q(this.beforeBody,g),u=a&&"right"!==p?
                                                        l/2+h:l+2+h:0,_=0,v=s.length;_0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const
                                                        i=Ro[t.position].call(this,this._active,this._eventPosition);if(!i)return;const
                                                        o=this._size=Fo(this,t),a=Object.assign({},i,this._size),r=Vo(e,t,a),l=Wo(t,a,r,e);s._to===l.x&&n._to===l.y||
                                                        (this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=o.width,this.height=o.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l
                                                        {const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s=
                                                        {width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const
                                                        o=Ne(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&
                                                        (t.save(),t.globalAlpha=i,this.drawBackground(n,t,s,e),Ii(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),
                                                        {return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map((({datasetIndex:t,index:e})=>{const
                                                        i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index
                                                        "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!tt(i,s),o=this._positionChanged(s,e);(n||o)&&
                                                        (this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0)
                                                        {if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,n=this._active||
                                                        [],o=this._getActiveElements(t,n,e,i),a=this._positionChanged(o,t),r=e||!tt(o,n)||a;return r&&(this._active=o,(s.enabled||s.external)&&
                                                        (this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),r}_getActiveElements(t,e,i,s){const n=this.options;if("mouseout"===t.type)return[];if(!s)return
                                                        e;const o=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&o.reverse(),o}_positionChanged(t,e)
                                                        {const{caretX:i,caretY:s,options:n}=this,o=Ro[n.position].call(this,t,e);return!1!==o&&(i!==o.x||s!==o.y)}}$o.positioners=Ro;var Yo=
                                                        {id:"tooltip",_element:$o,positioners:Ro,afterInit(t,e,i){i&&(t.tooltip=new $o({chart:t,options:i}))},beforeUpdate(t,e,i)
                                                        {t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i=
                                                        {tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const
                                                        i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:
                                                        {enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:
                                                        {weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:
                                                        {},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:
                                                        {weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:
                                                        (t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:
                                                        {duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:
                                                        {easing:"linear",duration:200}},callbacks:{beforeTitle:H,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?
                                                        i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return
                                                        e.label;if(s>0&&e.dataIndex"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:
                                                        {_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:
                                                        ["interaction"]},Uo=Object.freeze({__proto__:null,Decimation:ro,Filler:So,Legend:Co,SubTitle:Lo,Title:Ao,Tooltip:Yo});function Xo(t,e,i,s){const
                                                        n=t.indexOf(e);if(-1===n)return((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return
                                                        n!==t.lastIndexOf(e)?i:n}class qo extends Bs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const
                                                            e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=
                                                            []}super.init(t)}parse(t,e){if($(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:jt(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?
                                                            e:Xo(i,t,K(e,t),this._addedLabels),i.length-1)}determineDataLimits()
                                                            {const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||
                                                            (s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let
                                                            n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-
                                                            (i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){const e=this.getLabels();return t>=0&&te.length-1?
                                                            null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return
                                                            Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Ko(t,e,
                                                            {horizontal:i,minRotation:s}){const n=It(s),o=(i?Math.sin(n):Math.cos(n))||.001,a=.75*e*(""+t).length;return
                                                            Math.min(e/o,a)}qo.id="category",qo.defaults={ticks:{callback:qo.prototype.getLabelForValue}};class Go extends Bs{constructor(t)
                                                            {super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return $(t)||
                                                            ("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,
                                                            {minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this;const o=t=>s=e?s:t,a=t=>n=i?n:t;if(t){const t=Ct(s),e=Ct(n);t<0&&e<0?
                                                            a(0):t>0&&e>0&&o(0)}if(s===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||s<=Number.MIN_SAFE_INTEGER)&&
                                                            (e=Math.abs(.05*n)),a(n+e),t||o(s-e)}this.min=s,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?
                                                            (e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e}
                                                            ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return
                                                            Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s=function(t,e){const i=[],
                                                            {bounds:s,step:n,min:o,max:a,precision:r,count:l,maxTicks:h,maxDigits:c,includeBounds:d}=t,u=n||1,f=h-1,
                                                            {min:g,max:p}=e,m=!$(o),x=!$(a),b=!$(l),_=(p-g)/(c+1);let y,v,w,M,k=Ot((p-g)/f/u)*u;if(k<1e-14&&!m&&!x)return[{value:g},
                                                            {value:p}];M=Math.ceil(p/k)-Math.floor(g/k),M>f&&(k=Ot(M*k/f/u)*u),$(r)||(y=Math.pow(10,r),k=Math.ceil(k*y)/y),"ticks"===s?
                                                            (v=Math.floor(g/k)*k,w=Math.ceil(p/k)*k):(v=g,w=p),m&&x&&n&&Rt((a-o)/n,k/1e3)?(M=Math.round(Math.min((a-o)/k,h)),k=(a-o)/M,v=o,w=a):b?
                                                            (v=m?o:v,w=x?a:w,M=l-1,k=(w-v)/M):(M=(w-v)/k,M=Lt(M,Math.round(M),k/1e3)?Math.round(M):Math.ceil(M));const
                                                            S=Math.max(Ft(k),Ft(v));y=Math.pow(10,$(r)?S:r),v=Math.round(v*y)/y,w=Math.round(w*y)/y;let P=0;for(m&&(d&&v!==o?(i.push({value:o}),v0?
                                                            i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=X(t)?Math.max(0,t):null,this.max=X(e)?
                                                            Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions()
                                                            {const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const n=e=>i=t?i:e,o=t=>s=e?s:t,a=
                                                            (t,e)=>Math.pow(10,Math.floor(Dt(t))+e);i===s&&(i<=0?(n(1),o(10)):
                                                            (n(a(i,-1)),o(a(s,1)))),i<=0&&n(a(s,-1)),s<=0&&o(a(i,1)),this._zero&&this.min!==this._suggestedMin&&i===a(this.min,0)&&n(a(i,-1)),this.min=i,this.ma
                                                            {const t=this.options,e=function(t,e){const i=Math.floor(Dt(e.max)),s=Math.ceil(e.max/Math.pow(10,i)),n=[];let
                                                            o=q(t.min,Math.pow(10,Math.floor(Dt(e.min)))),a=Math.floor(Dt(o)),r=Math.floor(o/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do{n.push({value:o,major:Jo(o)}),++r,10===r&&(r=1,++a,l=a>=0?1:l),o=Math.round(r*Math.pow(10,a)*l)/l}while(an?
                                                                {start:e-i,end:e}:{start:e,end:e+i}}function ia(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottomt._padding.bottom},i=Object.assign({},e),s=[],n=[],o=t._pointLabels.length,a=t.options.pointLabels,r=a.centerPointLabels?_t/o:0;for(let d=0;de.r&&
                                                                (r=(s.end-e.r)/o,t.r=Math.max(t.r,e.r+r)),n.starte.b&&(l=(n.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}function na(t){return
                                                                0===t||180===t?"center":t<180?"left":"right"}function oa(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function aa(t,e,i){return
                                                                90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function ra(t,e,i,s){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,yt);else{let
                                                                i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let o=1;o{const i=J(this.options.pointLabels.callback,[t,e],this);return i||0===i?
                                                                i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?
                                                                ia(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-
                                                                =Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){return Nt(t*
                                                                (yt/(this._pointLabels.length||1))+It(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if($(t))return NaN;const
                                                                e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if($(t))return
                                                                NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const
                                                                e=this._pointLabels||[];if(t>=0&&t=0;n--){const e=s.setContext(t.getPointLabelContext(n)),o=He(e.font),
                                                                {x:a,y:r,textAlign:l,left:h,top:c,right:d,bottom:u}=t._pointLabelItems[n],{backdropColor:f}=e;if(!$(f)){const
                                                                t=Ne(e.backdropPadding);i.fillStyle=f,i.fillRect(h-t.left,c-t.top,d-h+t.width,u-c+t.height)}se(i,t._pointLabels[n],a,r+o.lineHeight/2,o,
                                                                {color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),s.display&&this.ticks.forEach(((t,e)=>{if(0!==e)
                                                                {a=this.getDistanceFromCenterForValue(t.value);!function(t,e,i,s){const n=t.ctx,o=e.circular,{color:a,lineWidth:r}=e;!o&&!s||!a||!r||i<0||
                                                                (n.save(),n.strokeStyle=a,n.lineWidth=r,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),ra(t,i,o,s),n.closePath(),n
                                                                (this,s.setContext(this.getContext(e-1)),a,n)}})),i.display){for(t.save(),o=n-1;o>=0;o--){const s=i.setContext(this.getPointLabelContext(o)),
                                                                {color:n,lineWidth:l}=s;l&&n&&
                                                                (t.lineWidth=l,t.strokeStyle=n,t.setLineDash(s.borderDash),t.lineDashOffset=s.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.rev
                                                                this.min:this.max),r=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(r.x,r.y),t.stroke())}t.restore()}}drawBorder()
                                                                {}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let
                                                                n,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((s,a)=>
                                                                {if(0===a&&!e.reverse)return;const
                                                                r=i.setContext(this.getContext(a)),l=He(r.font);if(n=this.getDistanceFromCenterForValue(this.ticks[a].value),r.showLabelBackdrop)
                                                                {t.font=l.string,o=t.measureText(s.label).width,t.fillStyle=r.backdropColor;const e=Ne(r.backdropPadding);t.fillRect(-o/2-e.left,-n-l.size/2-
                                                                e.top,o+e.width,l.size+e.height)}se(t,s.label,0,-n,l,{color:r.color})})),t.restore()}drawTitle(){}}la.id="radialLinear",la.defaults=
                                                                {display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:
                                                                {circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Os.formatters.numeric},pointLabels:{backdropColor:void
                                                                0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},la.defaultRoutes=
                                                                {"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},la.descriptors={angleLines:{_fallback:"grid"}};const ha=
                                                                {millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:
                                                                {common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:
                                                                {common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ca=Object.keys(ha);function da(t,e)
                                                                {return t-e}function ua(t,e){if($(e))return null;const i=t._adapter,{parser:s,round:n,isoWeekday:o}=t._parseOpts;let a=e;return"function"==typeof
                                                                s&&(a=s(a)),X(a)||(a="string"==typeof s?i.parse(a,s):i.parse(a)),null===a?null:(n&&(a="week"!==n||!Tt(o)&&!0!==o?
                                                                i.startOf(a,n):i.startOf(a,"isoWeek",o)),+a)}function fa(t,e,i,s){const n=ca.length;for(let o=ca.indexOf(t);o=e?i[s]:i[n]]=!0}}else t[e]=!0}function
                                                                pa(t,e,i){const s=[],n={},o=e.length;let a,r;for(a=0;a=0&&(e[l].major=!0);return e}(t,s,n,i):s}class ma extends Bs{constructor(t){super(t),this._cache=
                                                                {data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||
                                                                (t.time={}),s=this._adapter=new mn._date(t.adapters.date);ot(i.displayFormats,s.formats()),this._parseOpts=
                                                                {parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?
                                                                null:ua(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const
                                                                t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:n,minDefined:o,maxDefined:a}=this.getUserBounds();function r(t){o||isNaN(t.min)||
                                                                (s=Math.min(s,t.min)),a||isNaN(t.max)||(n=Math.max(n,t.max))}o&&a||
                                                                (r(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||r(this.getMinMax(!1))),s=X(s)&&!isNaN(s)?
                                                                s:+e.startOf(Date.now(),i),n=X(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,n1),this.max=Math.max(s+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let
                                                                e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const
                                                                t=this.options,e=t.time,i=t.ticks,s="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&
                                                                (this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const n=this.min,o=he(s,n,this.max);return this._unit=e.unit||(i.autoSkip?
                                                                fa(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,s,n){for(let o=ca.length-1;o>=ca.indexOf(i);o--){const
                                                                i=ca[o];if(ha[i].common&&t._adapter.diff(n,s,i)>=e-1)return i}return ca[i?ca.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let
                                                                    e=ca.indexOf(t)+1,i=ca.length;e1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const
                                                                    f="data"===s.ticks.source&&this.getDataTimestamps();for(c=u,d=0;ct-e)).map((t=>+t))}getLabelForValue(t){const
                                                                    e=this._adapter,i=this.options.time;return i.tooltipFormat?
                                                                    e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,s){const
                                                                    n=this.options,o=n.time.displayFormats,a=this._unit,r=this._majorUnit,l=a&&o[a],h=r&&o[r],c=i[e],d=r&&h&&c&&c.major,u=this._adapter.format(t,s||
                                                                    (d?h:l)),f=n.ticks.callback;return f?J(f,[u,e,i],this):u}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e0?a:1}getDataTimestamps(){let
                                                                    t,e,i=this._cache.data||[];if(i.length)return i;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return
                                                                    this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,e=s.length;t=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=re(t,"pos",e)),({pos:s,time:o}=t[r]),
                                                                    ({pos:n,time:a}=t[l])):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=re(t,"time",e)),({time:s,pos:o}=t[r]),({time:n,pos:a}=t[l]));const h=n-s;return h?o+(a-o)*
                                                                    (e-s)/h:o}ma.id="time",ma.defaults={bounds:"data",adapters:{},time:
                                                                    {parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class ba extends
                                                                    ma{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const
                                                                    t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=xa(e,this.min),this._tableRange=xa(e,this.max)-
                                                                    this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],n=[];let
                                                                    o,a,r,l,h;for(o=0,a=t.length;o=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o
                                        