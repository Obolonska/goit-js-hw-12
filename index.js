import{a as b,S as q,i as o}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const S="50264582-5072b5ac7075dcbe954d58fd2";async function h(r,t){return(await b.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",page:t,per_page:15}})).data}const g=document.querySelector(".gallery");let f;function w({largeImageURL:r,webformatURL:t,tags:a,likes:c,views:e,comments:s,downloads:n}){return`<li class="gallery-item">
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
  <span class="value">${n}</span>
          </p>
        </div>
      </li>`}function L(r){const t=r.map(w).join("");g.insertAdjacentHTML("beforeend",t),f?f.refresh():f=new q(".gallery a",{captionsData:"alt",captionDelay:250}),i()}function I(){g.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("is-hidden")}function i(){document.querySelector(".loader").classList.add("is-hidden")}function E(){document.querySelector(".load-more").classList.remove("is-hidden")}function u(){document.querySelector(".load-more").classList.add("is-hidden")}const $=document.querySelector(".form"),p=document.querySelector('input[name="search-text"]'),M=document.querySelector(".load-more");let l=1,m="",y=0,d=0;$.addEventListener("submit",async r=>{r.preventDefault();const t=p.value.trim();if(t===""){o.error({title:"Error",message:"Введіть текст для пошуку"}),i();return}t!==m&&(l=1,m=t,I(),u()),v();try{const a=await h(t,l);if(y=a.totalHits,d=a.hits.length,a.hits.length===0){o.info({title:"Info",message:"Зображення не знайдено"}),i();return}L(a.hits),l+=1,d>=y?(u(),o.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):E(),p.value=""}catch{o.error({title:"Error",message:"Помилка під час запиту"})}finally{i(),p.value=""}});M.addEventListener("click",async()=>{v();try{const r=await h(m,l);if(r.hits.length===0){u(),o.info({title:"Info",message:"Більше зображень не знайдено"});return}L(r.hits),l+=1,d+=r.hits.length,d>=y&&(u(),o.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{o.error({title:"Error",message:"Помилка під час завантаження зображень"})}finally{i()}});
//# sourceMappingURL=index.js.map
