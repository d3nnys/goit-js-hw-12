import{a as b,S as v,i as c}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function p(t,e){const a="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await b.get(l,{params:{per_page:15,page:e,key:a,q:t,IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal"}})).data}function g(t){return t.map(e=>`
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
        </li>`).join("")}const m="/goit-js-hw-12/assets/octagon-c1967aa5.svg",h=new v(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let d=1,n=null;u();f();async function x(t){if(t.preventDefault(),n=s.form.elements.query.value.trim(),d=1,s.gallery.innerHTML="",n===""){c.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}y(),p(n,d).then(e=>{const a=e.hits;s.gallery.innerHTML=g(a),a.length<15?f():w(),h.refresh()}).catch(e=>c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:m,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})).finally(()=>{u(),s.form.reset()})}s.form.addEventListener("submit",x);s.loadMoreBtn.addEventListener("click",async()=>{try{y();const t=await p(n,++d);s.gallery.insertAdjacentHTML("beforeend",g(t.hits)),h.refresh(),t.hits.length<15&&(f(),c.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollTo({top:e*2+window.pageYOffset,behavior:"smooth"})}catch(t){throw new m(t.status)}finally{u()}});function w(){s.loadMoreBtn.classList.remove("is-hidden")}function f(){s.loadMoreBtn.classList.add("is-hidden")}function y(){s.loader.style.display="block"}function u(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
