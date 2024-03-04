import{a as y,S as w,i as u}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(t){if(t.ep)return;t.ep=!0;const i=c(t);fetch(t.href,i)}})();y.defaults.baseURL="https://pixabay.com/api";async function L(s,e){let c=s;return s.includes(" ")&&(c=s.split(" ").join("+")),await y.get("/?key=42562534-6abe2af4317b1372b4a8ab981&q="+c+"&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page="+e)}function b(s){return s.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${e.previewURL}" 
                alt="${e.tags}" 
                />
        </a>
    <ul class="statistic-list">
      <li class="statistic-item">
        <h3 class="statistic-title">Likes</h3>
        <p class="statistic-info">${e.likes}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Views</h3>
        <p class="statistic-info">${e.views}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Comments</h3>
        <p class="statistic-info">${e.comments}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Downloads</h3>
        <p class="statistic-info">${e.downloads}</p>
      </li>
    </ul>
  </li>`).join("")}const S=document.querySelector(".gallery-form"),h=document.querySelector(".gallery-search"),n=document.querySelector(".gallery"),p=document.querySelector(".loader"),a=document.querySelector(".btn-more"),g=document.querySelector(".btn-loader");let o;const q={overlayOpacity:.8,captionsData:"alt",captionDelay:250},f=15;let r=1,l=0,v=new w(".gallery a",q);S.addEventListener("submit",s=>{s.preventDefault(),r=1,a.classList.add("is-hidden"),h.value.trim()!==""&&(n.innerHTML="",p.classList.remove("is-hidden"),o=L(h.value.trim(),r),console.log(o),o.then(e=>{console.log(e),e.data.total?(l=e.data.totalHits,console.log(l),n.insertAdjacentHTML("beforeend",b(e.data.hits)),v.refresh(),a.classList.remove("is-hidden")):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{l<r*f&&u.error({message:e,position:"topRight"}),a.classList.add("is-hidden")}).finally(()=>{p.classList.add("is-hidden")}))});a.addEventListener("click",()=>{a.classList.add("is-hidden"),g.classList.remove("is-hidden"),r+=1,o=L(h.value.trim(),r),o.then(s=>{n.insertAdjacentHTML("beforeend",b(s.data.hits)),window.scrollBy({top:n.firstElementChild.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),v.refresh()}).catch(s=>{l<r*f&&u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}).finally(()=>{g.classList.add("is-hidden"),l<r*f?a.classList.add("is-hidden"):a.classList.remove("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
