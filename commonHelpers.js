(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const u=document.querySelector(".menu-btn"),a=document.querySelector(".navigation"),f=()=>{a.classList.toggle("nav-is-visible")};u.addEventListener("click",f);const s=document.querySelector(".backdrop"),m=document.querySelector(".burger-menu"),y=document.querySelector(".mobile-menu-btn"),i=document.querySelector("body"),l=()=>{s.classList.toggle("is-open"),i.classList.toggle("body-is-hidden")};m.addEventListener("click",l);y.addEventListener("click",l);document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{s.classList.remove("is-open"),i.classList.remove("body-is-hidden")}));
//# sourceMappingURL=commonHelpers.js.map
