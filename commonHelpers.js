import{a as g,S as w,i as S}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api";async function y(i,e){let c=i;i.includes(" ")&&(c=i.split(" ").join("+"));try{const{data:s}=await g.get("/?key=42562534-6abe2af4317b1372b4a8ab981&q="+c+"&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page="+e);return s}catch(s){if(s.response){const{data:t,status:r,headers:n}=s.response;console.error(t)}else s.request?console.error(s.request):console.error(s.message);throw console.error(s.config),console.error(s.toJSON()),new Error(s)}}function L(i){return i.map(e=>`
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
  </li>`).join("")}const q=document.querySelector(".gallery-form"),h=document.querySelector(".gallery-search"),d=document.querySelector(".gallery"),f=document.querySelector(".loader"),o=document.querySelector(".btn-more"),p=document.querySelector(".btn-loader"),u=document.querySelector(".no-more");let a;const O={overlayOpacity:.8,captionsData:"alt",captionDelay:250},v=15;let l=1,m=0,b=new w(".gallery a",O);q.addEventListener("submit",i=>{i.preventDefault(),l=1,o.classList.add("is-hidden"),u.classList.add("is-hidden"),h.value.trim()!==""&&(d.innerHTML="",f.classList.remove("is-hidden"),a=y(h.value.trim(),l),console.log(a),a.then(e=>{e.totalHits?(m=e.totalHits,d.insertAdjacentHTML("beforeend",L(e.hits)),b.refresh(),m>v?o.classList.remove("is-hidden"):u.classList.remove("is-hidden")):S.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{console.error(e)}).finally(()=>{f.classList.add("is-hidden")}))});o.addEventListener("click",()=>{o.classList.add("is-hidden"),p.classList.remove("is-hidden"),l+=1,a=y(h.value.trim(),l),a.then(i=>{d.insertAdjacentHTML("beforeend",L(i.hits)),window.scrollBy({top:d.firstElementChild.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),b.refresh()}).catch(i=>{console.error(i)}).finally(()=>{p.classList.add("is-hidden"),m<l*v?(o.classList.add("is-hidden"),u.classList.remove("is-hidden")):(o.classList.remove("is-hidden"),u.classList.add("is-hidden"))})});
//# sourceMappingURL=commonHelpers.js.map
