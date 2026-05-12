import{a as b,S as v,i as p}from"./assets/vendor-DnCMJMY2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const L="48865554-9c41d4f1cdb1a3126cd29aed3",w="https://pixabay.com/api/",C=(e,r=1,a=40)=>{const s=`${w}?key=${L}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${a}`;return console.log(r),b.get(s)},m="data:image/svg+xml,",g=document.querySelector("ul.gallery");let $=new v(".gallery a",{captionsData:"alt",captionDelay:250});const n=e=>{p.show({message:e,position:"center",iconUrl:m,iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B"})},S=e=>{p.show({message:e,position:"bottomCenter",iconUrl:m,iconColor:"#FFFFFF",backgroundColor:"#4e75ff",messageColor:"#FFFFFF",progressBarColor:"#4e75ff"})},B=e=>{const r=e.map(({webformatURL:a,largeImageURL:s,tags:o,likes:t,views:l,comments:y,downloads:F})=>`
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
    <p>${l}</p>
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
`).join("");g.insertAdjacentHTML("beforeend",r),$.refresh()},q=()=>{g.innerHTML=""},f=document.querySelector(".loader-placeholder"),h=document.querySelector(".load-more"),P=()=>{f.classList.add("loader")},E=()=>{f.classList.remove("loader")},M=()=>{h.classList.remove("is-hidden")},k=()=>{h.classList.add("is-hidden")},I=document.querySelector(".search-form"),O=document.querySelector(".load-more");let c;const u=15;let i=1;const d=async()=>{try{P(),k();const e=await C(c,i,u);if(!e.data.hits.length){n("Sorry, there are no images matching your search query. Please, try again!");return}B(e.data.hits),e.data.totalHits>i*u?M():S("We're sorry, but you've reached the end of search results.")}catch(e){console.error("Error fetching images:",e),n("Something went wrong. Please try again later.")}finally{E()}};I.addEventListener("submit",async e=>{if(await d(),e.preventDefault(),c=e.target.elements.input.value.trim(),!c)return n("Please fill out this field");q(),i=1,d()});O.addEventListener("click",async()=>{i++,await d();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
