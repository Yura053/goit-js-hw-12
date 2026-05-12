import{a as b,S as v,i as u}from"./assets/vendor-DnCMJMY2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const L="48865554-9c41d4f1cdb1a3126cd29aed3",w="https://pixabay.com/api/",C=(e,t=1,a=40)=>{const s=`${w}?key=${L}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;return console.log(t),b.get(s)},m="data:image/svg+xml,",g=document.querySelector("ul.gallery");let $=new v(".gallery a",{captionsData:"alt",captionDelay:250});const f=e=>{u.show({message:e,position:"center",iconUrl:m,iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B"})},S=e=>{u.show({message:e,position:"bottomCenter",iconUrl:m,iconColor:"#FFFFFF",backgroundColor:"#4e75ff",messageColor:"#FFFFFF",progressBarColor:"#4e75ff"})},q=e=>{const t=e.map(({webformatURL:a,largeImageURL:s,tags:o,likes:r,views:l,comments:y,downloads:F})=>`
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
      <p></p>${r}</p>
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
`).join("");g.insertAdjacentHTML("beforeend",t),$.refresh()},E=()=>{g.innerHTML=""},P=document.querySelector(".search-form"),d=document.querySelector(".loader-placeholder"),c=document.querySelector(".load-more");let n;const p=40;let i=1;const h=async()=>{try{d.classList.add("loader"),c.classList.add("is-hidden");const e=await C(n,i,p);if(console.log(e),!e.data.hits.length){f("Sorry, there are no images matching your search query. Please, try again!");return}q(e.data.hits),e.data.totalHits>i*p?c.classList.remove("is-hidden"):S("We're sorry, but you've reached the end of search results.")}catch(e){console.error("Error fetching images:",e)}finally{d.classList.remove("loader")}};P.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.input.value.trim(),!n)return f("Please fill out this field");E(),i=1,h()});c.addEventListener("click",async()=>{i++,await h();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
