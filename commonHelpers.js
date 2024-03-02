import{a as b,S as v,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();async function p(o,e){const a="42458886-d6d62fa6987d6f72b0a5e97bb",i="https://pixabay.com/api/";return(await b.get(i,{params:{per_page:15,page:e,key:a,q:o,IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal"}})).data}function g(o){return o.map(e=>`
        <li class="gallery-item">
          <div class="gallery-box item-card-wrapper">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${e.likes}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${e.views}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${e.comments}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${e.downloads}</p>
              </div>
            </div>
          </div>
        </li>`).join("")}const h="/goit-js-hw-12/assets/octagon-c1967aa5.svg",m=new v(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let f=1,l=null;u();c();async function x(o){if(o.preventDefault(),l=s.form.elements.query.value.trim(),l===""){n.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}y(),await p(l,f).then(e=>{if(e&&e.hits&&e.hits.length>0)return e;e.hits.length<15&&c()}).then(e=>{const a=e.hits;s.gallery.innerHTML=g(a),a.length<15?c():w(),m.refresh()}).catch(e=>n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:h,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})).finally(()=>{u(),s.form.reset()})}s.form.addEventListener("submit",x);s.loadMoreBtn.addEventListener("click",async()=>{await p(l,f).then(o=>{f++,y(),s.gallery.insertAdjacentHTML("beforeend",g(o.hits)),m.refresh(),o.hits.length<15&&(c(),n.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollTo({top:e*2+window.pageYOffset,behavior:"smooth"})}).catch(o=>n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:h,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})).finally(()=>{u()})});function w(){s.loadMoreBtn.classList.remove("is-hidden")}function c(){s.loadMoreBtn.classList.add("is-hidden")}function y(){s.loader.style.display="block"}function u(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
