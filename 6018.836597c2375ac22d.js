"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6018],{227:(Q,T,b)=>{b.d(T,{m:()=>F});var l=b(655),M=b(7579),j=b(2504),$=b(5562);let F=(()=>{class _{constructor(u,w){this.toastController=u,this.loadingCtrl=w,this.nCount=new M.x,this.notificationCount=this.nCount.asObservable()}presentToast(u,w,Z){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:u,duration:2500,icon:w,color:Z})).present()})}showLoading(u){return(0,l.mG)(this,void 0,void 0,function*(){return yield this.loadingCtrl.create({message:u})})}setnotificationCount(u){this.nCount.next(u)}}return _.\u0275fac=function(u){return new(u||_)(j.LFG($.yF),j.LFG($.HT))},_.\u0275prov=j.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},7423:(Q,T,b)=>{b.d(T,{Uw:()=>I,fo:()=>S,xz:()=>w});var l=b(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var u=(()=>((u=u||{}).Unimplemented="UNIMPLEMENTED",u.Unavailable="UNAVAILABLE",u))();class w extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const K=r=>{var e,t,o,s,n;const a=r.CapacitorCustomPlatform||null,i=r.Capacitor||{},g=i.Plugins=i.Plugins||{},c=r.CapacitorPlatforms,O=(null===(e=null==c?void 0:c.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==a?a.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),oe=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==O()),se=(null===(o=null==c?void 0:c.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(d=>{const f=H.get(d);return!!(null!=f&&f.platforms.has(O())||q(d))}),q=(null===(s=null==c?void 0:c.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(d=>{var f;return null===(f=i.PluginHeaders)||void 0===f?void 0:f.find(k=>k.name===d)}),H=new Map,ue=(null===(n=null==c?void 0:c.currentPlatform)||void 0===n?void 0:n.registerPlugin)||((d,f={})=>{const k=H.get(d);if(k)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),k.proxy;const L=O(),x=q(d);let P;const fe=function(){var m=(0,l.Z)(function*(){return!P&&L in f?P=P="function"==typeof f[L]?yield f[L]():f[L]:null!==a&&!P&&"web"in f&&(P=P="function"==typeof f.web?yield f.web():f.web),P});return function(){return m.apply(this,arguments)}}(),B=m=>{let v;const p=(...y)=>{const C=fe().then(h=>{const E=((m,v)=>{var p,y;if(!x){if(m)return null===(y=m[v])||void 0===y?void 0:y.bind(m);throw new w(`"${d}" plugin is not implemented on ${L}`,u.Unimplemented)}{const C=null==x?void 0:x.methods.find(h=>v===h.name);if(C)return"promise"===C.rtype?h=>i.nativePromise(d,v.toString(),h):(h,E)=>i.nativeCallback(d,v.toString(),h,E);if(m)return null===(p=m[v])||void 0===p?void 0:p.bind(m)}})(h,m);if(E){const W=E(...y);return v=null==W?void 0:W.remove,W}throw new w(`"${d}.${m}()" is not implemented on ${L}`,u.Unimplemented)});return"addListener"===m&&(C.remove=(0,l.Z)(function*(){return v()})),C};return p.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(p,"name",{value:m,writable:!1,configurable:!1}),p},J=B("addListener"),Y=B("removeListener"),me=(m,v)=>{const p=J({eventName:m},v),y=function(){var h=(0,l.Z)(function*(){const E=yield p;Y({eventName:m,callbackId:E},v)});return function(){return h.apply(this,arguments)}}(),C=new Promise(h=>p.then(()=>h({remove:y})));return C.remove=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield y()}),C},G=new Proxy({},{get(m,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?me:J;case"removeListener":return Y;default:return B(v)}}});return g[d]=G,H.set(d,{name:d,proxy:G,platforms:new Set([...Object.keys(f),...x?[L]:[]])}),G});return i.convertFileSrc||(i.convertFileSrc=d=>d),i.getPlatform=O,i.handleError=d=>r.console.error(d),i.isNativePlatform=oe,i.isPluginAvailable=se,i.pluginMethodNoop=(d,f,k)=>Promise.reject(`${k} does not have an implementation of "${f}".`),i.registerPlugin=ue,i.Exception=w,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},U=(r=>r.Capacitor=K(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=U.registerPlugin;class I{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const a=function(){var g=(0,l.Z)(function*(){return o.removeListener(e,t)});return function(){return g.apply(this,arguments)}}(),i=Promise.resolve({remove:a});return Object.defineProperty(i,"remove",{value:(g=(0,l.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield a()}),function(){return g.apply(this,arguments)})}),i;var g}removeAllListeners(){var e=this;return(0,l.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new U.Exception(e,u.Unimplemented)}unavailable(e="not available"){return new U.Exception(e,u.Unavailable)}removeListener(e,t){var o=this;return(0,l.Z)(function*(){const s=o.listeners[e];if(!s)return;const n=s.indexOf(t);o.listeners[e].splice(n,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const V=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),z=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class X extends I{getCookies(){return(0,l.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=z(s).trim(),n=z(n).trim(),t[s]=n}),t})()}setCookie(e){return(0,l.Z)(function*(){try{const t=V(e.key),o=V(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${n}; ${a};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,l.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,l.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,l.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}S("CapacitorCookies",{web:()=>new X});const N=function(){var r=(0,l.Z)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const n=s.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},s.onerror=n=>o(n),s.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class ne extends I{request(e){return(0,l.Z)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),s=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,n,a)=>(s[n]=r[e[a]],s),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[a,i]of Object.entries(r.data||{}))n.set(a,i);t.body=n.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){const n=new FormData;if(r.data instanceof FormData)r.data.forEach((i,g)=>{n.append(g,i)});else for(const i of Object.keys(r.data))n.append(i,r.data[i]);t.body=n;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,s)=>{const[n,a]=s;let i,g;return Array.isArray(a)?(g="",a.forEach(c=>{i=e?encodeURIComponent(c):c,g+=`${n}=${i}&`}),g.slice(0,-1)):(i=e?encodeURIComponent(a):a,g=`${n}=${i}`),`${o}&${g}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,n=yield fetch(s,t),a=n.headers.get("content-type")||"";let g,c,{responseType:i="text"}=n.ok?e:{};switch(a.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":c=yield n.blob(),g=yield N(c);break;case"json":g=yield n.json();break;default:g=yield n.text()}const A={};return n.headers.forEach((O,R)=>{A[R]=O}),{data:g,headers:A,status:n.status,url:n.url}})()}get(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,l.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}S("CapacitorHttp",{web:()=>new ne})}}]);