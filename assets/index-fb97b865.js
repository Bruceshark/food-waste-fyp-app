import{o as s,c as i,w as a,K as p,r as f,a as d,b as m}from"./vue-router.esm-bundler-838e7efe.js";import{R as _}from"./index-de8f2d7e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y={__name:"App",setup(u){return(o,l)=>{const r=d("router-view");return s(),i(r,null,{default:a(({Component:e})=>[(s(),i(p,null,[(s(),i(f(e),{key:o.$route.fullPath}))],1024))]),_:1})}}};const c=m(y);c.use(_);c.mount("#app");
