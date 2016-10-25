(function(){'use strict';
var e="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},l="object"===typeof e.global&&e.global?e.global:"object"===typeof global&&global&&global.Object===Object?global:this;e.global=l;var m="object"===typeof e.exportsNamespace&&e.exportsNamespace?e.exportsNamespace:l;e.exportsNamespace=m;l.Object.freeze(e);var n={envInfo:e,semantics:{asInstanceOfs:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.13"};l.Object.freeze(n);l.Object.freeze(n.semantics);
var p=l.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},q=l.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},t=0,u=l.WeakMap?new l.WeakMap:null;function v(a){return function(b,c){return!(!b||!b.a||b.a.m!==c||b.a.k!==a)}}function aa(a){for(var b in a)return b}
function w(a,b,c){var d=new a.D(b[c]);if(c<b.length-1){a=a.n;c+=1;for(var g=d.B,f=0;f<g.length;f++)g[f]=w(a,b,c)}return d}function ba(a){switch(typeof a){case "string":return x(y);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?x(z):b<<16>>16===b&&1/b!==1/-0?x(A):x(B):"number"===typeof a?x(C):x(D);case "boolean":return x(E);case "undefined":return x(F);default:return null===a?a.W():a&&a.a&&a.a.g.z?x(G):a&&a.a?x(a.a):null}}
function H(a){switch(typeof a){case "string":ca||(ca=(new I).e());for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+p(65535&(a.charCodeAt(d)|0),c)|0,c=p(31,c),d=-1+d|0;return b;case "number":J||(J=(new K).e());b=J;c=a|0;if(c===a&&-Infinity!==1/a)b=c;else{if(b.h)b.F[0]=a,b=L(b.t[b.H]|0,b.t[b.G]|0);else{if(a!==a)b=!1,a=2047,c=+l.Math.pow(2,51);else if(Infinity===a||-Infinity===a)b=0>a,a=2047,c=0;else if(0===a)b=-Infinity===1/a,c=a=0;else if(d=(b=0>a)?-a:a,d>=+l.Math.pow(2,-1022)){a=+l.Math.pow(2,52);var c=
+l.Math.log(d)/.6931471805599453,c=+l.Math.floor(c)|0,c=1023>c?c:1023,g=d/+l.Math.pow(2,c)*a,d=+l.Math.floor(g),g=g-d,d=.5>g?d:.5<g?1+d:0!==d%2?1+d:d;2<=d/a&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=a);a=c;c=d}else a=d/+l.Math.pow(2,-1074),c=+l.Math.floor(a),d=a-c,a=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c;c=+c;b=L(c|0,(b?-2147483648:0)|(a|0)<<20|c/4294967296|0)}b=b.u^b.s}return b;case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.a||null===a?a.y():null===u?42:ea(a)}}
function fa(a,b){var c=l.Object.getPrototypeOf,d=l.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var g=d(a,b);if(void 0!==g)return g;a=c(a)}}function ga(a,b,c){a=fa(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}function ha(a,b,c,d){a=fa(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new l.TypeError("super has no setter '"+c+"'.");}
var ea=null!==u?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return H(a);default:if(null===a)return 0;var b=u.get(a);void 0===b&&(t=b=t+1|0,u.set(a,b));return b}}:function(a){if(a&&a.a){var b=a.$idHashCode$0;if(void 0!==b)return b;if(l.Object.isSealed(a))return 42;t=b=t+1|0;return a.$idHashCode$0=b}return null===a?0:H(a)};this.__ScalaJSExportsNamespace=m;
function M(){this.v=this.D=void 0;this.k=this.n=this.g=null;this.m=0;this.C=null;this.r="";this.c=this.p=this.q=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function N(a,b,c){var d=new M;d.g={};d.n=null;d.C=a;d.r=b;d.c=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function O(a,b,c,d,g,f,h){var k=new M,r=aa(a);f=f||function(a){return!!(a&&a.a&&a.a.g[r])};h=h||function(a,b){return!!(a&&a.a&&a.a.m===b&&a.a.k.g[r])};k.v=g;k.g=c;k.r="L"+b+";";k.c=h;k.name=b;k.isInterface=!1;k.isRawJSType=!!d;k.isInstance=f;return k}
function ia(a){function b(a){if("number"===typeof a){this.B=Array(a);for(var b=0;b<a;b++)this.B[b]=g}else this.B=a}var c=new M,d=a.C,g="longZero"==d?P().w:d;b.prototype=new Q;b.prototype.constructor=b;b.prototype.a=c;var d="["+a.r,f=a.k||a,h=a.m+1;c.D=b;c.v=ja;c.g={b:1,Y:1,d:1};c.n=a;c.k=f;c.m=h;c.C=null;c.r=d;c.q=void 0;c.p=void 0;c.c=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return f.c(a,h)};return c}
function x(a){if(!a.q){var b=new R;b.o=a;a.q=b}return a.q}M.prototype.getFakeInstance=function(){return this===y?"some string":this===E?!1:this===z||this===A||this===B||this===C||this===D?0:this===G?P().w:this===F?void 0:{a:this}};M.prototype.getSuperclass=function(){return this.v?x(this.v):null};M.prototype.getComponentType=function(){return this.n?x(this.n):null};M.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.p||(b.p=ia(b)),b=b.p;return w(b,a,0)};
var ka=N(!1,"Z","boolean"),la=N(0,"C","char"),ma=N(0,"B","byte"),na=N(0,"S","short"),oa=N(0,"I","int"),pa=N("longZero","J","long"),qa=N(0,"F","float"),sa=N(0,"D","double");ka.c=v(ka);la.c=v(la);ma.c=v(ma);na.c=v(na);oa.c=v(oa);pa.c=v(pa);qa.c=v(qa);sa.c=v(sa);function S(){}function Q(){}Q.prototype=S.prototype;S.prototype.e=function(){return this};S.prototype.A=function(){var a=ba(this).o.name,b=(+(this.y()>>>0)).toString(16);return a+"@"+b};S.prototype.y=function(){return ea(this)};S.prototype.toString=function(){return this.A()};var ja=O({b:0},"java.lang.Object",{b:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.a){var c=a.m||0;return!(c<b)&&(c>b||!a.k.isPrimitive)}return!1});S.prototype.a=ja;function R(){this.o=null}
R.prototype=new Q;R.prototype.constructor=R;R.prototype.A=function(){return(this.o.isInterface?"interface ":this.o.isPrimitive?"":"class ")+this.o.name};R.prototype.a=O({M:0},"java.lang.Class",{M:1,b:1});function K(){this.h=!1;this.F=this.t=this.l=null;this.x=!1;this.H=this.G=0}K.prototype=new Q;K.prototype.constructor=K;
K.prototype.e=function(){J=this;this.l=(this.h=!!(l.ArrayBuffer&&l.Int32Array&&l.Float32Array&&l.Float64Array))?new l.ArrayBuffer(8):null;this.t=this.h?new l.Int32Array(this.l,0,2):null;this.h&&new l.Float32Array(this.l,0,2);this.F=this.h?new l.Float64Array(this.l,0,1):null;if(this.h)this.t[0]=16909060,a=1===((new l.Int8Array(this.l,0,8))[0]|0);else var a=!0;this.G=(this.x=a)?0:1;this.H=this.x?1:0;return this};K.prototype.a=O({S:0},"scala.scalajs.runtime.Bits$",{S:1,b:1});var J=void 0;
function I(){}I.prototype=new Q;I.prototype.constructor=I;I.prototype.e=function(){return this};I.prototype.a=O({U:0},"scala.scalajs.runtime.RuntimeString$",{U:1,b:1});var ca=void 0;function T(){this.j=this.E=null}T.prototype=new Q;T.prototype.constructor=T;T.prototype.e=function(){this.E="https://www.dropbox.com/1/oauth2/authorize?client_id\x3d8343b03llcys1pw\x26response_type\x3dtoken\x26redirect_uri\x3dhttp://localhost:3000/auth/db/callback\x26state\x3d433";this.j=null;return this};
function ta(a){var b=$i_electron.BrowserWindow,c=new l.Object;c.width=null;c.height=null;c.width=800;c.height=600;a.j=new b(c);a.j.loadUrl(a.E);a.j.openDevTools();a.j.on("closed",function(){U().j=null})}T.prototype.main=function(){ta(this)};T.prototype.a=O({I:0},"CloudConnectionComponent$",{I:1,b:1,$:1});var V=void 0;function U(){V||(V=(new T).e());return V}m.CloudConnectionComponent=U;m.CloudConnectionComponent=m.CloudConnectionComponent||{};m.CloudConnectionComponent.App=U;function W(){}
W.prototype=new Q;W.prototype.constructor=W;function ua(){}ua.prototype=W.prototype;var F=O({V:0},"scala.runtime.BoxedUnit",{V:1,b:1,d:1},void 0,void 0,function(a){return void 0===a}),E=O({K:0},"java.lang.Boolean",{K:1,b:1,d:1,f:1},void 0,void 0,function(a){return"boolean"===typeof a});function X(){this.w=null}X.prototype=new Q;X.prototype.constructor=X;X.prototype.e=function(){Y=this;this.w=L(0,0);return this};
function va(a,b){if(0===(-2097152&b))return""+(4294967296*b+ +(a>>>0));var c=(32+q(1E9)|0)-(0!==b?q(b):32+q(a)|0)|0,d=c,g=0===(32&d)?1E9<<d:0,d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d,f=a,h=b;for(a=b=0;0<=c&&0!==(-2097152&h);){var k=f,r=h,ra=g,da=d;if(r===da?(-2147483648^k)>=(-2147483648^ra):(-2147483648^r)>=(-2147483648^da))k=h,r=d,h=f-g|0,k=(-2147483648^h)>(-2147483648^f)?-1+(k-r|0)|0:k-r|0,f=h,h=k,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;k=d>>>1|0;g=g>>>1|0|d<<31;d=k}c=h;if(0===c?-1147483648<=(-2147483648^
f):-2147483648<=(-2147483648^c))c=4294967296*h+ +(f>>>0),f=c/1E9,g=f/4294967296|0,d=b,b=f=d+(f|0)|0,a=(-2147483648^f)<(-2147483648^d)?1+(a+g|0)|0:a+g|0,c%=1E9,f=c|0,h=c/4294967296|0;b=[b,a,f,h];a=""+(b["2"]|0);return""+(4294967296*(b["1"]|0)+ +((b["0"]|0)>>>0))+"000000000".substring(a.length|0)+a}X.prototype.a=O({T:0},"scala.scalajs.runtime.RuntimeLong$",{T:1,b:1,Z:1,d:1});var Y=void 0;function P(){Y||(Y=(new X).e());return Y}
var y=O({J:0},"java.lang.String",{J:1,b:1,d:1,X:1,f:1},void 0,void 0,function(a){return"string"===typeof a}),z=O({L:0},"java.lang.Byte",{L:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return a<<24>>24===a&&1/a!==1/-0}),D=O({N:0},"java.lang.Double",{N:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),C=O({O:0},"java.lang.Float",{O:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),B=O({P:0},"java.lang.Integer",{P:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return(a|
0)===a&&1/a!==1/-0}),G=O({Q:0},"java.lang.Long",{Q:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return!!(a&&a.a&&a.a.g.z)}),A=O({R:0},"java.lang.Short",{R:1,i:1,b:1,d:1,f:1},void 0,void 0,function(a){return a<<16>>16===a&&1/a!==1/-0});function Z(){this.s=this.u=0}Z.prototype=new ua;Z.prototype.constructor=Z;Z.prototype.A=function(){P();var a=this.u,b=this.s;return b===a>>31?""+a:0>b?"-"+va(-a|0,0!==a?~b:-b|0):va(a,b)};function L(a,b){var c=new Z;c.u=a;c.s=b;return c}
Z.prototype.y=function(){return this.u^this.s};Z.prototype.a=O({z:0},"scala.scalajs.runtime.RuntimeLong",{z:1,i:1,b:1,d:1,f:1});
}).call(this);
//# sourceMappingURL=cloud-manager-app.js.map
