(function(s,z,j){var E,F;function k(a,b){return P.call(a).indexOf("[object "+b)==0}function Q(a){function b(b){if(b in a)return b=a[b].charAt(0)!="."?(!a.path||t(a.path)?a.path:a.path+"/")+a[b]:n(a[b],a.path),o(b)}k(a,"String")&&(a=o(a),a={name:a,path:a,main:E,lib:F});a.path=a.path||"";a.h=b("lib");a.i=b("main");return a}function G(a){var b,c,d,e=[];u=a.baseUrl||"";if(a.debug)v=!0,l.cache=g,l.cfg=a,l.undefine=function(a){delete g[a]};var f=a.paths;for(b in f)c=o(b),d=q[c]={path:o(f[b])},d.f=(d.path.match(H)||
[]).length,e.push(c);f=a.packages;for(b in f)c=o(f[b].name||b),d=q[c]=Q(f[b]),d.f=(d.path.match(H)||[]).length,e.push(c);I=RegExp("^("+e.sort(function(a,b){return q[a].f<q[b].f}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");m=a.pluginPath||m}function R(){}function A(a){function b(a,b){return S(a,b||R,e)}function c(a){return B(w(n(a,d)),u)}var d=a.substr(0,a.lastIndexOf("/")),e={baseName:d},f={};e.c={exports:f,module:{id:n(a,d),uri:c(a),exports:f}};v&&(b.curl=l);e.e=e.c.require=b;b.toUrl=c;return e}
function C(){function a(a,b){f.push([a,b])}function b(a){d(!0,a)}function c(a){d(!1,a)}function d(d,e){a=d?function(a){a&&a(e)}:function(a,b){b&&b(e)};b=c=function(){throw Error("Promise already completed.");};for(var i,g=0;i=f[g++];)(i=i[d?0:1])&&i(e)}var e=this,f=[];this.b=function(b,c){a(b,c)};this.d=function(a){e.l=a;b(a)};this.a=function(a){e.n=a;c(a)}}function x(a){C.apply(this);this.name=a}function t(a){return a.charAt(a.length-1)=="/"}function o(a){return t(a)?a.substr(0,a.length-1):a}function w(a){var b;
return a.replace(I,function(c){b=q[c]||{};return b.i&&c==a?b.i:b.h?b.h:b.path})}function B(a,b){return(b&&!T.test(a)?(!b||t(b)?b:b+"/")+a:a)+(U.test(a)?"":".js")}function V(a,b,c){var d=z.createElement("script");d.type="text/javascript";d.onload=d[J]=function(c){c=c||s.event;if(c.type==="load"||W[this.readyState])delete y[a.name],this.onload=this[J]=this.onerror=null,b(d)};d.onerror=function(){c(Error("Syntax error or http error: "+a.url))};d.charset=a.charset||"utf-8";d.async=!0;d.src=a.url;y[a.name]=
d;K.insertBefore(d,K.firstChild)}function X(a){var b,c,d,e,f=a.length;d=a[f-1];e=k(d,"Function");f==2?k(a[0],"Array")?c=a[0]:b=a[0]:f==3&&(b=a[0],c=a[1]);!c&&e&&d.length>0&&(c=["require","exports","module"]);return{name:b,j:c||[],k:e?d:function(){return d}}}function L(a,b){v&&console&&console.log("curl: resolving",a.name);var c=A(a.baseName||a.name);M(b.j,c,function(d){try{var e=b.k.apply(c.c.exports,d)||c.c.exports;v&&console&&console.log("curl: defined",a.name,e.toString().substr(0,50).replace(/\n/,
" "))}catch(f){a.a(f)}a.d(e)},a.a)}function N(a){V(a,function(){var b=r;r=D;a.m!==!1&&(b?b.g?a.a(Error(b.g.replace("${url}",a.url))):L(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a)}function n(a,b){return a.replace(Y,function(a,d,e){return(e?b.substr(0,b.lastIndexOf("/")):b)+"/"})}function Z(a,b){var c,d,e,f;c=a.indexOf("!");if(c>=0){d=a.substr(0,c);e=n(a.substr(c+1),b.baseName);c=d+"!"+e;var p=w(d);p.indexOf("/")<0&&(p=w((!m||t(m)?m:m+"/")+p));f=g[c];if(!f){var h=g[d];if(!h)h=
g[d]=new x(d),h.url=B(p,u),h.baseName=p,N(h);f=new x(c);e&&(g[c]=f);h.b(function(a){var c=f.d;c.resolve=c;c.reject=f.a;a.load(e,b.e,c,j)},f.a)}}else if(e=c=n(a,b.baseName),f=g[e],!f)f=g[e]=new x(e),f.url=B(w(e),u),N(f);return f}function M(a,b,c,d){for(var e=[],f=a.length,g=f,h=!1,i=0;i<g&&!h;i++)(function(a,g){g in b.c?(e[a]=b.c[g],f--):Z(g,b).b(function(b){e[a]=b;--f==0&&(h=!0,c(e))},function(a){h=!0;d(a)})})(i,a[i]);f==0&&!h&&c(e)}function S(a,b,c){if(k(a,"String")){c=(c=g[a])&&c.l;if(c===D)throw Error("Module is not already resolved: "+
a);return c}M(a,c,function(a){b.d?b.d(a):b.apply(null,a)},function(a){if(b.a)b.a(a);else throw a;})}function l(){var a=$.call(arguments),b,c;k(a[0],"Object")&&(j=a.shift(),G(j));b=a[0];a=a[1];c=A("");var d=new C,e={};e.then=function(a,b){d.b(function(b){a&&a.apply(null,b)},function(a){if(b)b(a);else throw a;});return e};e.next=function(a,b){var g=d;d=new C;g.b(function(){c.e(a,d,c)},function(a){d.a(a)});b&&d.b(function(a){b.apply(this,a)});return e};a&&e.then(a);c.e(b,d,c);return e}function O(){var a=
X(arguments),b=a.name;if(b==null)if(r!==D)r={g:"Multiple anonymous defines found in ${url}."};else{var c;if(!k(s.opera,"Opera"))for(var d in y)if(y[d].readyState=="interactive"){c=d;break}if(!(b=c))r=a}if(b!=null)(c=g[b])||(c=g[b]=new x(b)),c.m=!1,"resolved"in c||L(c,a,A(b))}var K=z.head||z.getElementsByTagName("head")[0],u,m="curl/plugin",q={},g={},r,y={},P={}.toString,D,$=[].slice,T=/^\/|^[^:]*:\/\//,Y=/^(\.)(\.)?(\/|$)/,H=/\//,U=/\.\w+($|[?#])/,I,W={loaded:1,interactive:1,complete:1},J="onreadystatechange";
E="./lib/main";F="./lib";var v;k(j,"Function")||G(j);(j.apiContext||s)[j.apiName||"curl"]=l;s.define=l.define=O;l.version="0.5.2";O.amd={plugins:!0}})(this,document,this.curl||{});
