import{d as p,e as h}from"./vue-router.esm-bundler-f47d5b1d.js";const E="modulepreload",d=function(a){return"/food-waste-fyp-app/"+a},l={},o=function(_,s,m){if(!s||s.length===0)return _();const c=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e),e in l)return;l[e]=!0;const r=e.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!m)for(let n=c.length-1;n>=0;n--){const i=c[n];if(i.href===e&&(!r||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":E,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((n,i)=>{t.addEventListener("load",n),t.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_())},f=[{path:"/",name:"Home",component:()=>o(()=>import("./Home-cb093c7b.js"),["assets/Home-cb093c7b.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/dailyItem-d6630a94.js","assets/dailyItem-2ec89c0b.css","assets/mainHeader-ea29bf25.js","assets/mainHeader-b17ba9ed.css","assets/tableware_icon-a25ec4a8.js","assets/Home-cfc4da3f.css"])},{path:"/create",name:"Create",component:()=>o(()=>import("./Create-532cef5c.js"),["assets/Create-532cef5c.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/mainHeader-ea29bf25.js","assets/mainHeader-b17ba9ed.css","assets/tableware_icon-a25ec4a8.js","assets/omit-0d83d866.js","assets/Create-b5bd8323.css"])},{path:"/history",name:"History",component:()=>o(()=>import("./History-6ffb90fb.js"),["assets/History-6ffb90fb.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/dailyItem-d6630a94.js","assets/dailyItem-2ec89c0b.css","assets/mainHeader-ea29bf25.js","assets/mainHeader-b17ba9ed.css","assets/History-8af32d93.css"])},{path:"/badge",name:"BadgeWall",component:()=>o(()=>import("./BadgeWall-99e91169.js"),["assets/BadgeWall-99e91169.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/mainHeader-ea29bf25.js","assets/mainHeader-b17ba9ed.css","assets/omit-0d83d866.js","assets/BadgeWall-86081309.css"])},{path:"/login",name:"Login",component:()=>o(()=>import("./Login-219bd7ed.js"),["assets/Login-219bd7ed.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/Login-a2693507.css"])},{path:"/register",name:"Register",component:()=>o(()=>import("./Register-edebf967.js"),["assets/Register-edebf967.js","assets/request-f099dbe5.js","assets/plugin-vueexport-helper-b9105508.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/request-23f691fd.css","assets/Register-dcfde9a9.css"])},{path:"/about",name:"About",component:()=>o(()=>import("./About-10a9425a.js"),["assets/About-10a9425a.js","assets/mainHeader-ea29bf25.js","assets/vue-router.esm-bundler-f47d5b1d.js","assets/plugin-vueexport-helper-b9105508.js","assets/mainHeader-b17ba9ed.css","assets/About-0dc3975a.css"])}],g=p({history:h(),routes:f});export{g as R};
