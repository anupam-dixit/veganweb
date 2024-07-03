"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3323],{3323:(E,g,f)=>{f.d(g,{$:()=>D});var p=f(655),u=f(7598),v=f(2504),D=function(l){function o(){var e=null!==l&&l.apply(this,arguments)||this;return e.cordovaFileError={1:"NOT_FOUND_ERR",2:"SECURITY_ERR",3:"ABORT_ERR",4:"NOT_READABLE_ERR",5:"ENCODING_ERR",6:"NO_MODIFICATION_ALLOWED_ERR",7:"INVALID_STATE_ERR",8:"SYNTAX_ERR",9:"INVALID_MODIFICATION_ERR",10:"QUOTA_EXCEEDED_ERR",11:"TYPE_MISMATCH_ERR",12:"PATH_EXISTS_ERR",13:"WRONG_ENTRY_TYPE",14:"DIR_READ_ERR"},e}return(0,p.ZT)(o,l),o.prototype.getFreeDiskSpace=function(){var e=this;return function(){if(!0===(0,u.gR)(e))return(0,u.sM)(function(i,n){cordova.exec(i,n,"File","getFreeDiskSpace",[])})}()},o.prototype.checkDir=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return n.resolveDirectoryUrl(e+i).then(function(){return!0})}}()},o.prototype.createDir=function(e,i,n){var r=this;return function(){if(!0===(0,u.gR)(r)){if(/^\//.test(i)){var t=new FileError(5);return t.message="directory cannot start with /",Promise.reject(t)}var s={create:!0};return n||(s.exclusive=!0),r.resolveDirectoryUrl(e).then(function(c){return r.getDirectory(c,i,s)})}}()},o.prototype.removeDir=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return n.resolveDirectoryUrl(e).then(function(t){return n.getDirectory(t,i,{create:!1})}).then(function(t){return n.remove(t)})}}()},o.prototype.moveDir=function(e,i,n,r){var t=this;return function(){if(!0===(0,u.gR)(t)){if(/^\//.test(r=r||i)){var s=new FileError(5);return s.message="directory cannot start with /",Promise.reject(s)}return t.resolveDirectoryUrl(e).then(function(c){return t.getDirectory(c,i,{create:!1})}).then(function(c){return t.resolveDirectoryUrl(n).then(function(a){return t.move(c,a,r)})})}}()},o.prototype.copyDir=function(e,i,n,r){var t=this;return function(){if(!0===(0,u.gR)(t)){if(/^\//.test(r)){var s=new FileError(5);return s.message="directory cannot start with /",Promise.reject(s)}return t.resolveDirectoryUrl(e).then(function(c){return t.getDirectory(c,i,{create:!1})}).then(function(c){return t.resolveDirectoryUrl(n).then(function(a){return t.copy(c,a,r)})})}}()},o.prototype.listDir=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return n.resolveDirectoryUrl(e).then(function(t){return n.getDirectory(t,i,{create:!1,exclusive:!1})}).then(function(t){var s=t.createReader();return n.readEntries(s)})}}()},o.prototype.removeRecursively=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return n.resolveDirectoryUrl(e).then(function(t){return n.getDirectory(t,i,{create:!1})}).then(function(t){return n.rimraf(t)})}}()},o.prototype.checkFile=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="file cannot start with /",Promise.reject(r)}return n.resolveLocalFilesystemUrl(e+i).then(function(t){if(t.isFile)return!0;var s=new FileError(13);return s.message="input is not a file",Promise.reject(s)})}}()},o.prototype.createFile=function(e,i,n){var r=this;return function(){if(!0===(0,u.gR)(r)){if(/^\//.test(i)){var t=new FileError(5);return t.message="file-name cannot start with /",Promise.reject(t)}var s={create:!0};return n||(s.exclusive=!0),r.resolveDirectoryUrl(e).then(function(c){return r.getFile(c,i,s)})}}()},o.prototype.removeFile=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n)){if(/^\//.test(i)){var r=new FileError(5);return r.message="file-name cannot start with /",Promise.reject(r)}return n.resolveDirectoryUrl(e).then(function(t){return n.getFile(t,i,{create:!1})}).then(function(t){return n.remove(t)})}}()},o.prototype.writeFile=function(e,i,n,r){var t=this;return void 0===r&&(r={}),function(){if(!0===(0,u.gR)(t)){if(/^\//.test(i)){var s=new FileError(5);return s.message="file-name cannot start with /",Promise.reject(s)}var c={create:!r.append,exclusive:!r.replace};return t.resolveDirectoryUrl(e).then(function(a){return t.getFile(a,i,c)}).then(function(a){return t.writeFileEntry(a,n,r)})}}()},o.prototype.writeFileEntry=function(e,i,n){var r=this;return this.createWriter(e).then(function(t){return n.append&&t.seek(t.length),n.truncate&&t.truncate(n.truncate),r.write(t,i)}).then(function(){return e})},o.prototype.writeExistingFile=function(e,i,n){var r=this;return function(){if(!0===(0,u.gR)(r))return r.writeFile(e,i,n,{replace:!0})}()},o.prototype.readAsText=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n))return n.readFile(e,i,"Text")}()},o.prototype.readAsDataURL=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n))return n.readFile(e,i,"DataURL")}()},o.prototype.readAsBinaryString=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n))return n.readFile(e,i,"BinaryString")}()},o.prototype.readAsArrayBuffer=function(e,i){var n=this;return function(){if(!0===(0,u.gR)(n))return n.readFile(e,i,"ArrayBuffer")}()},o.prototype.moveFile=function(e,i,n,r){var t=this;return function(){if(!0===(0,u.gR)(t)){if(/^\//.test(r=r||i)){var s=new FileError(5);return s.message="file name cannot start with /",Promise.reject(s)}return t.resolveDirectoryUrl(e).then(function(c){return t.getFile(c,i,{create:!1})}).then(function(c){return t.resolveDirectoryUrl(n).then(function(a){return t.move(c,a,r)})})}}()},o.prototype.copyFile=function(e,i,n,r){var t=this;return function(){if(!0===(0,u.gR)(t)){if(/^\//.test(r=r||i)){var s=new FileError(5);return s.message="file name cannot start with /",Promise.reject(s)}return t.resolveDirectoryUrl(e).then(function(c){return t.getFile(c,i,{create:!1})}).then(function(c){return t.resolveDirectoryUrl(n).then(function(a){return t.copy(c,a,r)})})}}()},o.prototype.fillErrorMessage=function(e){try{e.message=this.cordovaFileError[e.code]}catch{}},o.prototype.resolveLocalFilesystemUrl=function(e){var i=this;return function(){if(!0===(0,u.gR)(i))return(0,u.sM)(function(n,r){try{window.resolveLocalFileSystemURL(e,function(t){n(t)},function(t){i.fillErrorMessage(t),r(t)})}catch(t){i.fillErrorMessage(t),r(t)}})}()},o.prototype.resolveDirectoryUrl=function(e){var i=this;return function(){if(!0===(0,u.gR)(i))return i.resolveLocalFilesystemUrl(e).then(function(n){if(n.isDirectory)return n;var r=new FileError(13);return r.message="input is not a directory",Promise.reject(r)})}()},o.prototype.getDirectory=function(e,i,n){var r=this;return function(){if(!0===(0,u.gR)(r))return new Promise(function(t,s){try{e.getDirectory(i,n,function(c){t(c)},function(c){r.fillErrorMessage(c),s(c)})}catch(c){r.fillErrorMessage(c),s(c)}})}()},o.prototype.getFile=function(e,i,n){var r=this;return function(){if(!0===(0,u.gR)(r))return new Promise(function(t,s){try{e.getFile(i,n,t,function(c){r.fillErrorMessage(c),s(c)})}catch(c){r.fillErrorMessage(c),s(c)}})}()},o.prototype.readFile=function(e,i,n){var r=this;if(/^\//.test(i)){var t=new FileError(5);return t.message="file-name cannot start with /",Promise.reject(t)}return this.resolveDirectoryUrl(e).then(function(s){return r.getFile(s,i,{create:!1})}).then(function(s){var c=new FileReader;return(0,u.sM)(function(a,h){c.onloadend=function(){void 0!==c.result||null!==c.result?a(c.result):h(void 0!==c.error||null!==c.error?c.error:{code:null,message:"READER_ONLOADEND_ERR"})},s.file(function(y){c["readAs"+n].call(c,y)},function(y){h(y)})})})},o.prototype.remove=function(e){var i=this;return new Promise(function(n,r){e.remove(function(){n({success:!0,fileRemoved:e})},function(t){i.fillErrorMessage(t),r(t)})})},o.prototype.move=function(e,i,n){var r=this;return new Promise(function(t,s){e.moveTo(i,n,function(c){t(c)},function(c){r.fillErrorMessage(c),s(c)})})},o.prototype.copy=function(e,i,n){var r=this;return new Promise(function(t,s){e.copyTo(i,n,function(c){t(c)},function(c){r.fillErrorMessage(c),s(c)})})},o.prototype.readEntries=function(e){var i=this;return new Promise(function(n,r){e.readEntries(function(t){n(t)},function(t){i.fillErrorMessage(t),r(t)})})},o.prototype.rimraf=function(e){var i=this;return new Promise(function(n,r){e.removeRecursively(function(){n({success:!0,fileRemoved:e})},function(t){i.fillErrorMessage(t),r(t)})})},o.prototype.createWriter=function(e){var i=this;return new Promise(function(n,r){e.createWriter(function(t){n(t)},function(t){i.fillErrorMessage(t),r(t)})})},o.prototype.write=function(e,i){return i instanceof Blob?this.writeFileInChunks(e,i):new Promise(function(n,r){e.onwriteend=function(t){e.error?r(e.error):n(t)},e.write(i)})},o.prototype.writeFileInChunks=function(e,i){var r=0;function t(){var s=Math.min(1048576,i.size-r),c=i.slice(r,r+s);r+=s,e.write(c)}return(0,u.sM)(function(s,c){e.onerror=c,e.onwrite=function(){r<i.size?t():s()},t()})},Object.defineProperty(o.prototype,"applicationDirectory",{get:function(){return(0,u.J2)(this,"applicationDirectory")},set:function(e){(0,u.Iq)(this,"applicationDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"applicationStorageDirectory",{get:function(){return(0,u.J2)(this,"applicationStorageDirectory")},set:function(e){(0,u.Iq)(this,"applicationStorageDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"dataDirectory",{get:function(){return(0,u.J2)(this,"dataDirectory")},set:function(e){(0,u.Iq)(this,"dataDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"cacheDirectory",{get:function(){return(0,u.J2)(this,"cacheDirectory")},set:function(e){(0,u.Iq)(this,"cacheDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"externalApplicationStorageDirectory",{get:function(){return(0,u.J2)(this,"externalApplicationStorageDirectory")},set:function(e){(0,u.Iq)(this,"externalApplicationStorageDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"externalDataDirectory",{get:function(){return(0,u.J2)(this,"externalDataDirectory")},set:function(e){(0,u.Iq)(this,"externalDataDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"externalCacheDirectory",{get:function(){return(0,u.J2)(this,"externalCacheDirectory")},set:function(e){(0,u.Iq)(this,"externalCacheDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"externalRootDirectory",{get:function(){return(0,u.J2)(this,"externalRootDirectory")},set:function(e){(0,u.Iq)(this,"externalRootDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"tempDirectory",{get:function(){return(0,u.J2)(this,"tempDirectory")},set:function(e){(0,u.Iq)(this,"tempDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"syncedDataDirectory",{get:function(){return(0,u.J2)(this,"syncedDataDirectory")},set:function(e){(0,u.Iq)(this,"syncedDataDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"documentsDirectory",{get:function(){return(0,u.J2)(this,"documentsDirectory")},set:function(e){(0,u.Iq)(this,"documentsDirectory",e)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"sharedDirectory",{get:function(){return(0,u.J2)(this,"sharedDirectory")},set:function(e){(0,u.Iq)(this,"sharedDirectory",e)},enumerable:!1,configurable:!0}),o.\u0275fac=function(){let e;return function(n){return(e||(e=v.n5z(o)))(n||o)}}(),o.\u0275prov=v.Yz7({token:o,factory:o.\u0275fac}),o.pluginName="File",o.plugin="cordova-plugin-file",o.pluginRef="cordova.file",o.repo="https://github.com/apache/cordova-plugin-file",o.platforms=["Android","Browser","iOS","macOS","Windows"],o=(0,p.gn)([],o)}(u.On)}}]);