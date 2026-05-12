import{a as b,S as v,i as u}from"./assets/vendor-DnCMJMY2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const w="55836567-c9271527a299f964d26049cdd",L=async(e,r,a)=>{const s=Math.max(a,15);return(await b.get("https://pixabay.com/api/",{params:{key:w,q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data},p="data:image/svg+xml,",m=document.querySelector("ul.gallery");let P=new v(".gallery a",{captionsData:"alt",captionDelay:250});const n=e=>{u.show({message:e,position:"center",iconUrl:p,iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B"})},B=e=>{u.show({message:e,position:"bottomCenter",iconUrl:p,iconColor:"#FFFFFF",backgroundColor:"#4e75ff",messageColor:"#FFFFFF",progressBarColor:"#4e75ff"})},C=e=>{const r=e.map(({webformatURL:a,largeImageURL:s,tags:o,likes:t,views:i,comments:y,downloads:F})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${a}"
      alt="${o}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p>${t}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${i}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${y}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${F}</p>
  </div>
</div>
</li>
`).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()},S=()=>{m.innerHTML=""},g=document.querySelector(".loader-placeholder"),f=document.querySelector(".load-more"),M=()=>{g.classList.add("loader")},q=()=>{g.classList.remove("loader")},$=()=>{f.classList.remove("is-hidden")},k=()=>{f.classList.add("is-hidden")},E=document.querySelector(".search-form"),O=document.querySelector(".load-more");let c="";const d=15;let l=1;const h=async()=>{try{M(),k();const e=await L(c,l,d);if(!e.hits.length){n("Sorry, there are no images matching your search query. Please, try again!");return}C(e.hits);const r=Math.ceil(e.totalHits/d);l<r?$():B("We're sorry, but you've reached the end of search results.")}catch{n("Something went wrong. Please try again later.")}finally{q()}};E.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.input.value.trim(),!c)return n("Please fill out this field");S(),l=1,await h()});O.addEventListener("click",async()=>{l++,await h();const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
