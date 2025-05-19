import{a as b,S as q,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="50264582-5072b5ac7075dcbe954d58fd2";async function g(r,t){return(await b.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",page:t,per_page:15}})).data}const h=document.querySelector(".gallery");let f;function w({largeImageURL:r,webformatURL:t,tags:o,likes:c,views:e,comments:s,downloads:n}){return`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${o}"
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
  <span class="value">${n}</span>
          </p>
        </div>
      </li>`}function v(r){const t=r.map(w).join("");h.insertAdjacentHTML("beforeend",t),f?f.refresh():f=new q(".gallery a",{captionsData:"alt",captionDelay:250}),l()}function I(){if(!document.querySelector(".gallery-item"))return;const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function E(){h.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}function $(){document.querySelector(".load-more").classList.remove("is-hidden")}function u(){document.querySelector(".load-more").classList.add("is-hidden")}const M=document.querySelector(".form"),p=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more");let i=1,m="",y=0,d=0;M.addEventListener("submit",async r=>{r.preventDefault();const t=p.value.trim();if(t===""){a.error({title:"Error",message:"Введіть текст для пошуку"}),l();return}t!==m&&(i=1,m=t,E(),u()),L();try{const o=await g(t,i);if(y=o.totalHits,d=o.hits.length,o.hits.length===0){a.info({title:"Info",message:"Зображення не знайдено"}),l();return}v(o.hits),i+=1,d>=y?(u(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):$(),p.value=""}catch{a.error({title:"Error",message:"Помилка під час запиту"})}finally{l(),p.value=""}});O.addEventListener("click",async()=>{L();try{const r=await g(m,i);if(r.hits.length===0){u(),a.info({title:"Info",message:"Більше зображень не знайдено"});return}v(r.hits),I(),i+=1,d+=r.hits.length,d>=y&&(u(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Помилка під час завантаження зображень"})}finally{l()}});
//# sourceMappingURL=index.js.map
