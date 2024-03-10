import{a as b,S as v,i as c}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function m(r,t){const a="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await b.get(l,{params:{per_page:15,page:t,key:a,q:r,IMAGE_TYPE:"photo",SAFESEARCH:"true",ORIENTATION:"horizontal"}})).data}function p(r){return r.map(t=>`
        <li class="gallery-item">
          <div class="gallery-box item-card-wrapper">
            <a class="gallery-link" href="${t.largeImageURL}">
              <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${t.likes}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${t.views}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${t.comments}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${t.downloads}</p>
              </div>
            </div>
          </div>
        </li>`).join("")}const y="/goit-js-hw-12/assets/octagon-c1967aa5.svg",g=new v(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let d=1,n=null;u();f();async function x(r){if(r.preventDefault(),n=s.form.elements.query.value.trim(),d=1,s.gallery.innerHTML="",n===""){c.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}h();const t=await m(n,d);try{const a=t.hits;s.gallery.innerHTML=p(a),a.length<15?f():w(),g.refresh()}catch{c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:y,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}finally{u(),s.form.reset()}}s.form.addEventListener("submit",x);s.loadMoreBtn.addEventListener("click",async()=>{try{h();const r=await m(n,++d),a=document.querySelectorAll(".gallery-item").length;s.gallery.insertAdjacentHTML("beforeend",p(r.hits));const l=document.querySelectorAll(".gallery-item");l.length>a&&l[a].scrollIntoView({block:"start",behavior:"smooth"}),g.refresh(),r.hits.length<15&&(f(),c.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(r){throw new y(r.status)}finally{u()}});function w(){s.loadMoreBtn.classList.remove("is-hidden")}function f(){s.loadMoreBtn.classList.add("is-hidden")}function h(){s.loader.style.display="block"}function u(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
