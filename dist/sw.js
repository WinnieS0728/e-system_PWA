if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>s(e,c),a={module:{uri:c},exports:o,require:t};i[c]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-0f61d7a0.css",revision:null},{url:"assets/index-4eb379ec.js",revision:null},{url:"index.html",revision:"2b9a3d755968a4215ccc82589b84b5a6"},{url:"registerSW.js",revision:"6f7ec1ebc053e81d8228c30cfea12fa2"},{url:"./pwa/16.png",revision:"69e88b448d0113ab344d822b00435c1b"},{url:"./pwa/64.png",revision:"02c5532e8a6912b1480c0928a6993bc4"},{url:"./pwa/180.png",revision:"a854f5583ae73808ccd094f577922f01"},{url:"./pwa/192.png",revision:"d57c460ad3500c8af69552f6cc058fb1"},{url:"./pwa/512.png",revision:"436b8fe65aaf2acbb506848fa7cf8385"},{url:"manifest.webmanifest",revision:"62f13a39d3929b60892ca0ba89f2883b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
