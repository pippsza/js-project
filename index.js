import{A as E,S,a as M,i as f}from"./assets/vendor-wGsJTA7v.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const b=document.querySelector(".page-header");window.addEventListener("scroll",()=>{window.scrollY>50?b.classList.add("scrolled"):b.classList.remove("scrolled")});const k=document.querySelector(".dropdown-content"),A=document.querySelector(".dropdown-btn"),P=document.querySelectorAll(".menu-item-link");A.addEventListener("click",()=>{k.classList.toggle("show")});P.forEach(e=>{e.addEventListener("click",()=>{k.classList.remove("show")})});const V=document.querySelectorAll(".mobile-item-link"),O=document.querySelector(".burger-btn"),C=document.querySelector(".close-btn-mob-menu"),w=document.querySelector(".mobile-menu"),T=document.querySelector(".btn-order-mobile-menu");function q(){w.classList.toggle("is-open")}O.addEventListener("click",q);C.addEventListener("click",q);V.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("is-open")})});T.addEventListener("click",()=>{w.classList.remove("is-open")});const a=["red-theme","lightGreen-theme","blue-theme","orange-theme","green-theme","yellow-theme"];let u=0;const m=localStorage.getItem("selectedTheme");if(m&&a.includes(m))document.body.classList.add(m),u=a.indexOf(m);else{const e=a[0];document.body.classList.add(e),localStorage.setItem("selectedTheme",e)}document.getElementById("rollButton").addEventListener("click",()=>{const e=document.body;e.classList.remove(a[u]),u=(u+1)%a.length;const s=a[u];e.classList.add(s),localStorage.setItem("selectedTheme",s)});document.addEventListener("DOMContentLoaded",function(){new E("#accordion-container",{duration:200,showMultiple:!1,openOnInit:[0]});const e=document.querySelector(".about-slider"),s=document.querySelector(".swiper-button-next");if(!e){console.error("не знайдено");return}const i=new S(e,{navigation:{nextEl:".swiper-button-next"},slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},spaceBetween:0,loop:!0,autoplay:{delay:200,disableOnInteraction:!1},observeParents:!0,keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!1},mousewheel:{invert:!1},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("keydown",n=>{n.key==="ArrowRight"?i.slideNext():n.key==="ArrowLeft"&&i.slidePrev()}),s?s.addEventListener("click",()=>{i.slideNext()}):console.error("не знайдена"),i.on("slideChange",()=>{document.querySelectorAll(".about-swiper-slide").forEach(t=>{t.classList.remove("active")});const n=i.slides[i.activeIndex];n&&n.classList.add("active")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers-content"),s=document.querySelector(".covers-list");function i(t){if(!t)return!1;const o=t.getBoundingClientRect();return o.top<window.innerHeight&&o.bottom>0}function n(){i(e)?s.classList.contains(".covers-list")||s.classList.add(".covers-list"):s.classList.contains(".covers-list")&&s.classList.remove(".covers-list")}n(),window.addEventListener("coversAnimation",n)});new E(".faq-list",{duration:900,showMultiple:!0,elementClass:"faq-item"});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".slide-prj"),s=document.querySelectorAll(".project"),i=document.querySelector(".button-next-prj"),n=document.querySelector(".button-prev-prj"),t=document.querySelectorAll(".see-project");let o=0;const r=s.length,c=()=>{e.style.transform=`translateX(-${o*100}%)`},d=()=>{o===0?(n.disabled=!0,n.setAttribute("tabindex","-1")):(n.disabled=!1,n.removeAttribute("tabindex")),o===r-1?(i.disabled=!0,i.setAttribute("tabindex","-1")):(i.disabled=!1,i.removeAttribute("tabindex"))},v=()=>{t.forEach((L,I)=>{I===o?L.setAttribute("tabindex","0"):L.setAttribute("tabindex","-1")})};i.addEventListener("click",()=>{o<r-1&&(o++,c(),d(),v())}),n.addEventListener("click",()=>{o>0&&(o--,c(),d(),v())}),c(),d(),v()});document.addEventListener("DOMContentLoaded",function(){const e=new S(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},speed:1e3,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});function s(){const t=document.getElementById("custom-prev"),o=document.getElementById("custom-next");t.disabled=e.isBeginning,o.disabled=e.isEnd}function i(){const t=document.querySelectorAll(".swiper-slide");let o=0;t.forEach(r=>{r.style.height="auto",o=Math.max(o,r.offsetHeight)}),t.forEach(r=>{r.style.height=`${o}px`})}e.on("init",()=>{s(),i()}),e.on("reachEnd",s),e.on("reachBeginning",s),e.on("slideChange",s),e.on("resize",i),document.getElementById("custom-prev").addEventListener("click",()=>{e.isBeginning||e.slidePrev()}),document.getElementById("custom-next").addEventListener("click",()=>{e.isEnd||e.slideNext()}),document.addEventListener("keydown",t=>{t.key==="ArrowLeft"&&(t.preventDefault(),e.slidePrev()),t.key==="ArrowRight"&&(t.preventDefault(),e.slideNext())});async function n(){try{const t=await M.get("https://portfolio-js.b.goit.study/api/reviews"),o=document.querySelector(".swiper-wrapper"),r=t.data;r.length>0?r.forEach(c=>{const d=document.createElement("li");d.classList.add("swiper-slide"),d.innerHTML=`
            <div class="review-content">
              <img src="${c.avatar_url}" alt="${c.author}'s avatar" class="review-avatar"/>
              <p class="review-author">${c.author}</p>
              <p class="review-text">${c.review}</p>
            </div>
          `,o.appendChild(d)}):o.innerHTML='<li class="swiper-slide">Not found</li>',e.update(),i(),s()}catch(t){f.error({title:"Error",message:"An error occurred: "+t.message});const o=document.querySelector(".swiper-wrapper");o.innerHTML='<li class="swiper-slide">Not found</li>'}}n()});const l=document.getElementById("user-email"),N=document.getElementById("user-comments"),y=document.getElementById("footer-error"),g=document.getElementById("footer-success"),p=document.querySelector(".overlay"),x=document.getElementById("modal-footer"),j=document.querySelector(".footer-button"),D=document.querySelector(".footer-form"),H=document.querySelector(".close-modal");l.addEventListener("input",function(){const e=l.checkValidity();l.classList.toggle("valid",e),l.classList.toggle("invalid",!e),g.classList.toggle("show",e),y.classList.toggle("show",!e),l.value||(g.style.display="none",y.style.display="none",l.classList.remove("valid","invalid"))});j.addEventListener("click",function(e){e.preventDefault();const s=l.value.trim(),i=N.value.trim();if(!s||!i)return f.info({title:"Info",message:"Please fill in all fields.",position:"center",timeout:5e3});fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,comment:i})}).then(n=>n.json()).then(n=>{n.title&&n.message?(document.getElementById("modal-title").textContent=n.title,document.getElementById("modal-message").textContent=n.message,$(),D.reset(),R()):f.error({title:"Error",message:"Invalid e-mail. Check the data you entered.",position:"center",timeout:5e3})}).catch(()=>{f.error({title:"Network Error",message:"Unable to connect to the server. Please check your internet connection.",position:"center",timeout:5e3})})});function $(){x.classList.add("show"),p.classList.add("show"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",B)}function h(){x.classList.remove("show"),p.classList.remove("show"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",B)}function R(){l.classList.remove("valid","invalid"),g.style.display="none",y.style.display="none"}H.addEventListener("click",h);p.addEventListener("click",e=>{e.target===p&&h()});function B(e){e.key==="Escape"&&h()}
//# sourceMappingURL=index.js.map
