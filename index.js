import{a as b,S as q,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const S="50264582-5072b5ac7075dcbe954d58fd2";async function y(r,t){return(await b.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",page:t,per_page:15}})).data}const g=document.querySelector(".gallery");let u;function w({largeImageURL:r,webformatURL:t,tags:a,likes:c,views:e,comments:s,downloads:o}){return`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${a}"
          />
        </a>
        <div class="image-info">
          <p>
          <span class="label">Likes</span>
  <span class="value">${c}</span>
          </p>
          <p>
          <span class="label">Views</span>
  <span class="value">${e}</span>
          </p>
          <p>
          <span class="label">Comments</span>
  <span class="value">${s}</span>
          </p>
          <p>
          <span class="label">Downloads</span>
  <span class="value">${o}</span>
          </p>
        </div>
      </li>`}function h(r){const t=r.map(w).join("");g.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new q(".gallery a",{captionsData:"alt",captionDelay:250}),i()}function E(){g.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function i(){document.querySelector(".loader").classList.add("is-hidden")}function $(){document.querySelector(".load-more").classList.remove("is-hidden")}function p(){document.querySelector(".load-more").classList.add("is-hidden")}const I=document.querySelector(".form"),d=document.querySelector('input[name="search-text"]'),M=document.querySelector(".load-more");let l=1,f="",v=0,m=0;I.addEventListener("submit",async r=>{r.preventDefault();const t=d.value.trim();if(t===""){n.error({title:"Error",message:"Введіть текст для пошуку"}),i();return}t!==f&&(l=1,f=t,E(),p()),L();try{const a=await y(t,l);if(v=a.totalHits,m=a.hits.length,a.hits.length===0){n.info({title:"Info",message:"Зображення не знайдено"}),i();return}h(a.hits),l+=1,$(),d.value=""}catch{n.error({title:"Error",message:"Помилка під час запиту"})}finally{i(),d.value=""}});M.addEventListener("click",async()=>{L();try{const r=await y(f,l);if(r.hits.length===0){p(),n.info({title:"Info",message:"Більше зображень не знайдено"});return}h(r.hits),l+=1,m+=r.hits.length,m>=v&&p()}catch{n.error({title:"Error",message:"Помилка під час завантаження зображень"})}finally{i()}});
//# sourceMappingURL=index.js.map
