(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))l(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function v(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(m){if(m.ep)return;m.ep=!0;const h=v(m);fetch(m.href,h)}})();var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var X={exports:{}};(function(g,H){(function(v,l){g.exports=l()})(G,function(){var v=1e3,l=6e4,m=36e5,h="millisecond",y="second",b="minute",j="hour",M="day",Y="week",S="month",W="quarter",O="year",L="date",N="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},E=function(i,n,t){var u=String(i);return!u||u.length>=n?i:""+Array(n+1-u.length).join(t)+i},P={s:E,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),u=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+E(u,2,"0")+":"+E(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var u=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(u,S),d=t-e<0,a=n.clone().add(u+(d?-1:1),S);return+(-(u+(t-e)/(d?e-a:a-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:S,y:O,w:Y,d:M,D:L,h:j,m:b,s:y,ms:h,Q:W}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},c="en",s={};s[c]=q;var r=function(i){return i instanceof w},$=function i(n,t,u){var e;if(!n)return c;if(typeof n=="string"){var d=n.toLowerCase();s[d]&&(e=d),t&&(s[d]=t,e=d);var a=n.split("-");if(!e&&a.length>1)return i(a[0])}else{var p=n.name;s[p]=n,e=p}return!u&&e&&(c=e),e||!u&&c},f=function(i,n){if(r(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new w(t)},o=P;o.l=$,o.i=r,o.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var w=function(){function i(t){this.$L=$(t.locale,null,!0),this.parse(t)}var n=i.prototype;return n.parse=function(t){this.$d=function(u){var e=u.date,d=u.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(I);if(a){var p=a[2]-1||0,D=(a[7]||"0").substring(0,3);return d?new Date(Date.UTC(a[1],p,a[3]||1,a[4]||0,a[5]||0,a[6]||0,D)):new Date(a[1],p,a[3]||1,a[4]||0,a[5]||0,a[6]||0,D)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==N},n.isSame=function(t,u){var e=f(t);return this.startOf(u)<=e&&e<=this.endOf(u)},n.isAfter=function(t,u){return f(t)<this.startOf(u)},n.isBefore=function(t,u){return this.endOf(u)<f(t)},n.$g=function(t,u,e){return o.u(t)?this[u]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,u){var e=this,d=!!o.u(u)||u,a=o.p(t),p=function(J,k){var z=o.w(e.$u?Date.UTC(e.$y,k,J):new Date(e.$y,k,J),e);return d?z:z.endOf(M)},D=function(J,k){return o.w(e.toDate()[J].apply(e.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(k)),e)},_=this.$W,x=this.$M,Z=this.$D,C="set"+(this.$u?"UTC":"");switch(a){case O:return d?p(1,0):p(31,11);case S:return d?p(1,x):p(0,x+1);case Y:var B=this.$locale().weekStart||0,V=(_<B?_+7:_)-B;return p(d?Z-V:Z+(6-V),x);case M:case L:return D(C+"Hours",0);case j:return D(C+"Minutes",1);case b:return D(C+"Seconds",2);case y:return D(C+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,u){var e,d=o.p(t),a="set"+(this.$u?"UTC":""),p=(e={},e[M]=a+"Date",e[L]=a+"Date",e[S]=a+"Month",e[O]=a+"FullYear",e[j]=a+"Hours",e[b]=a+"Minutes",e[y]=a+"Seconds",e[h]=a+"Milliseconds",e)[d],D=d===M?this.$D+(u-this.$W):u;if(d===S||d===O){var _=this.clone().set(L,1);_.$d[p](D),_.init(),this.$d=_.set(L,Math.min(this.$D,_.daysInMonth())).$d}else p&&this.$d[p](D);return this.init(),this},n.set=function(t,u){return this.clone().$set(t,u)},n.get=function(t){return this[o.p(t)]()},n.add=function(t,u){var e,d=this;t=Number(t);var a=o.p(u),p=function(x){var Z=f(d);return o.w(Z.date(Z.date()+Math.round(x*t)),d)};if(a===S)return this.set(S,this.$M+t);if(a===O)return this.set(O,this.$y+t);if(a===M)return p(1);if(a===Y)return p(7);var D=(e={},e[b]=l,e[j]=m,e[y]=v,e)[a]||1,_=this.$d.getTime()+t*D;return o.w(_,this)},n.subtract=function(t,u){return this.add(-1*t,u)},n.format=function(t){var u=this,e=this.$locale();if(!this.isValid())return e.invalidDate||N;var d=t||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),p=this.$H,D=this.$m,_=this.$M,x=e.weekdays,Z=e.months,C=function(k,z,R,K){return k&&(k[z]||k(u,d))||R[z].slice(0,K)},B=function(k){return o.s(p%12||12,k,"0")},V=e.meridiem||function(k,z,R){var K=k<12?"AM":"PM";return R?K.toLowerCase():K},J={YY:String(this.$y).slice(-2),YYYY:this.$y,M:_+1,MM:o.s(_+1,2,"0"),MMM:C(e.monthsShort,_,Z,3),MMMM:C(Z,_),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:C(e.weekdaysMin,this.$W,x,2),ddd:C(e.weekdaysShort,this.$W,x,3),dddd:x[this.$W],H:String(p),HH:o.s(p,2,"0"),h:B(1),hh:B(2),a:V(p,D,!0),A:V(p,D,!1),m:String(D),mm:o.s(D,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:a};return d.replace(A,function(k,z){return z||J[k]||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,u,e){var d,a=o.p(u),p=f(t),D=(p.utcOffset()-this.utcOffset())*l,_=this-p,x=o.m(this,p);return x=(d={},d[O]=x/12,d[S]=x,d[W]=x/3,d[Y]=(_-D)/6048e5,d[M]=(_-D)/864e5,d[j]=_/m,d[b]=_/l,d[y]=_/v,d)[a]||_,e?x:o.a(x)},n.daysInMonth=function(){return this.endOf(S).$D},n.$locale=function(){return s[this.$L]},n.locale=function(t,u){if(!t)return this.$L;var e=this.clone(),d=$(t,u,!0);return d&&(e.$L=d),e},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),T=w.prototype;return f.prototype=T,[["$ms",h],["$s",y],["$m",b],["$H",j],["$W",M],["$M",S],["$y",O],["$D",L]].forEach(function(i){T[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,w,f),i.$i=!0),f},f.locale=$,f.isDayjs=r,f.unix=function(i){return f(1e3*i)},f.en=s[c],f.Ls=s,f.p={},f})})(X);var tt=X.exports;const F=Q(tt);var et={exports:{}};(function(g,H){(function(v,l){g.exports=l()})(G,function(){var v,l,m=1e3,h=6e4,y=36e5,b=864e5,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M=31536e6,Y=2592e6,S=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,W={years:M,months:Y,days:b,hours:y,minutes:h,seconds:m,milliseconds:1,weeks:6048e5},O=function(c){return c instanceof P},L=function(c,s,r){return new P(c,r,s.$l)},N=function(c){return l.p(c)+"s"},I=function(c){return c<0},A=function(c){return I(c)?Math.ceil(c):Math.floor(c)},q=function(c){return Math.abs(c)},E=function(c,s){return c?I(c)?{negative:!0,format:""+q(c)+s}:{negative:!1,format:""+c+s}:{negative:!1,format:""}},P=function(){function c(r,$,f){var o=this;if(this.$d={},this.$l=f,r===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return L(r*W[N($)],this);if(typeof r=="number")return this.$ms=r,this.parseFromMilliseconds(),this;if(typeof r=="object")return Object.keys(r).forEach(function(i){o.$d[N(i)]=r[i]}),this.calMilliseconds(),this;if(typeof r=="string"){var w=r.match(S);if(w){var T=w.slice(2).map(function(i){return i!=null?Number(i):0});return this.$d.years=T[0],this.$d.months=T[1],this.$d.weeks=T[2],this.$d.days=T[3],this.$d.hours=T[4],this.$d.minutes=T[5],this.$d.seconds=T[6],this.calMilliseconds(),this}}return this}var s=c.prototype;return s.calMilliseconds=function(){var r=this;this.$ms=Object.keys(this.$d).reduce(function($,f){return $+(r.$d[f]||0)*W[f]},0)},s.parseFromMilliseconds=function(){var r=this.$ms;this.$d.years=A(r/M),r%=M,this.$d.months=A(r/Y),r%=Y,this.$d.days=A(r/b),r%=b,this.$d.hours=A(r/y),r%=y,this.$d.minutes=A(r/h),r%=h,this.$d.seconds=A(r/m),r%=m,this.$d.milliseconds=r},s.toISOString=function(){var r=E(this.$d.years,"Y"),$=E(this.$d.months,"M"),f=+this.$d.days||0;this.$d.weeks&&(f+=7*this.$d.weeks);var o=E(f,"D"),w=E(this.$d.hours,"H"),T=E(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3);var n=E(i,"S"),t=r.negative||$.negative||o.negative||w.negative||T.negative||n.negative,u=w.format||T.format||n.format?"T":"",e=(t?"-":"")+"P"+r.format+$.format+o.format+u+w.format+T.format+n.format;return e==="P"||e==="-P"?"P0D":e},s.toJSON=function(){return this.toISOString()},s.format=function(r){var $=r||"YYYY-MM-DDTHH:mm:ss",f={Y:this.$d.years,YY:l.s(this.$d.years,2,"0"),YYYY:l.s(this.$d.years,4,"0"),M:this.$d.months,MM:l.s(this.$d.months,2,"0"),D:this.$d.days,DD:l.s(this.$d.days,2,"0"),H:this.$d.hours,HH:l.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:l.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:l.s(this.$d.seconds,2,"0"),SSS:l.s(this.$d.milliseconds,3,"0")};return $.replace(j,function(o,w){return w||String(f[o])})},s.as=function(r){return this.$ms/W[N(r)]},s.get=function(r){var $=this.$ms,f=N(r);return f==="milliseconds"?$%=1e3:$=f==="weeks"?A($/W[f]):this.$d[f],$===0?0:$},s.add=function(r,$,f){var o;return o=$?r*W[N($)]:O(r)?r.$ms:L(r,this).$ms,L(this.$ms+o*(f?-1:1),this)},s.subtract=function(r,$){return this.add(r,$,!0)},s.locale=function(r){var $=this.clone();return $.$l=r,$},s.clone=function(){return L(this.$ms,this)},s.humanize=function(r){return v().add(this.$ms,"ms").locale(this.$l).fromNow(!r)},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},c}();return function(c,s,r){v=r,l=r().$utils(),r.duration=function(o,w){var T=r.locale();return L(o,{$l:T},w)},r.isDuration=O;var $=s.prototype.add,f=s.prototype.subtract;s.prototype.add=function(o,w){return O(o)&&(o=o.asMilliseconds()),$.bind(this)(o,w)},s.prototype.subtract=function(o,w){return O(o)&&(o=o.asMilliseconds()),f.bind(this)(o,w)}}})})(et);var st=et.exports;const it=Q(st);var nt={exports:{}};(function(g,H){(function(v,l){g.exports=l()})(G,function(){return function(v,l,m){v=v||{};var h=l.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(M,Y,S,W){return h.fromToBase(M,Y,S,W)}m.en.relativeTime=y,h.fromToBase=function(M,Y,S,W,O){for(var L,N,I,A=S.$locale().relativeTime||y,q=v.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=q.length,P=0;P<E;P+=1){var c=q[P];c.d&&(L=W?m(M).diff(S,c.d,!0):S.diff(M,c.d,!0));var s=(v.rounding||Math.round)(Math.abs(L));if(I=L>0,s<=c.r||!c.r){s<=1&&P>0&&(c=q[P-1]);var r=A[c.l];O&&(s=O(""+s)),N=typeof r=="string"?r.replace("%d",s):r(s,Y,c.l,I);break}}if(Y)return N;var $=I?A.future:A.past;return typeof $=="function"?$(N):$.replace("%s",N)},h.to=function(M,Y){return b(M,Y,this,!0)},h.from=function(M,Y){return b(M,Y,this)};var j=function(M){return M.$u?m.utc():m()};h.toNow=function(M){return this.to(j(this),M)},h.fromNow=function(M){return this.from(j(this),M)}}})})(nt);var ot=nt.exports;const ut=Q(ot);var at={exports:{}};(function(g,H){(function(v,l){g.exports=l(tt)})(G,function(v){function l(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var m=l(v),h={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(y){return y+"º"}};return m.default.locale(h,null,!0),h})})(at);var rt={exports:{}};(function(g,H){(function(v,l){g.exports=l()})(G,function(){return function(v,l,m){m.updateLocale=function(h,y){var b=m.Ls[h];if(b)return(y?Object.keys(y):[]).forEach(function(j){b[j]=y[j]}),b}}})})(rt);var dt=rt.exports;const ct=Q(dt);F.extend(it);F.extend(ut);F.extend(ct);F.updateLocale(F.locale("es"));function U(g){const H=F(g),v=F(),l=v.diff(H,"years"),m=v.diff(H,"months");let h="";return l>0?h=H.format("MMMM DD, YYYY"):m<1?h=H.from(v):h=`${H.format("MMMM DD")}`,h}U("2022-04-14T16:30:15.000Z");U("2023-04-14T16:30:15.000Z");U("2024-04-14T16:30:15.000Z");U(F());function ft(g){g.preventDefault(),console.log("Hola mundo")}const ht=document.querySelector("form");ht.addEventListener("submit",ft);console.log(`Hello World 😱 ${U("2021-01-01")}`);const lt=document.querySelector("#age"),mt=F("2001-03-04"),$t=mt.fromNow(!0);lt.innerHTML=$t;const yt=[...document.querySelectorAll("time")];yt.forEach(g=>{g.textContent=U(g.getAttribute("datetime"))});
