import{A as E,S,a as M,i as m}from"./assets/vendor-wGsJTA7v.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const b=document.querySelector(".page-header");window.addEventListener("scroll",()=>{window.scrollY>50?b.classList.add("scrolled"):b.classList.remove("scrolled")});const k=document.querySelector(".dropdown-content"),A=document.querySelector(".dropdown-btn"),P=document.querySelectorAll(".menu-item-link");A.addEventListener("click",()=>{k.classList.toggle("show")});P.forEach(e=>{e.addEventListener("click",()=>{k.classList.remove("show")})});const V=document.querySelectorAll(".mobile-item-link"),O=document.querySelector(".burger-btn"),C=document.querySelector(".close-btn-mob-menu"),h=document.querySelector(".mobile-menu"),T=document.querySelector(".btn-order-mobile-menu");function q(){h.classList.toggle("is-open")}O.addEventListener("click",q);C.addEventListener("click",q);V.forEach(e=>{e.addEventListener("click",()=>{h.classList.remove("is-open")})});T.addEventListener("click",()=>{h.classList.remove("is-open")});const d=["red-theme","lightGreen-theme","blue-theme","orange-theme","green-theme","yellow-theme"];let a=0;const u=localStorage.getItem("selectedTheme");if(u&&d.includes(u))document.body.classList.add(u),a=d.indexOf(u);else{const e=d[0];document.body.classList.add(e),localStorage.setItem("selectedTheme",e)}document.getElementById("rollButton").addEventListener("click",()=>{const e=document.body;e.classList.remove(d[a]),a=(a+1)%d.length;const s=d[a];e.classList.add(s),localStorage.setItem("selectedTheme",s)});document.addEventListener("DOMContentLoaded",function(){new E("#accordion-container",{duration:200,showMultiple:!1,openOnInit:[0]});const e=document.querySelector(".about-slider"),s=document.querySelector(".swiper-button-next");if(!e){console.error("не знайдено");return}const i=new S(e,{navigation:{nextEl:".swiper-button-next"},slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},spaceBetween:0,loop:!0,autoplay:{delay:200,disableOnInteraction:!1},observeParents:!0,keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!1},mousewheel:{invert:!1},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("keydown",t=>{t.key==="ArrowRight"?i.slideNext():t.key==="ArrowLeft"&&i.slidePrev()}),s?s.addEventListener("click",()=>{i.slideNext()}):console.error("не знайдена"),i.on("slideChange",()=>{document.querySelectorAll(".about-swiper-slide").forEach(n=>{n.classList.remove("active")});const t=i.slides[i.activeIndex];t&&t.classList.add("active")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers-content"),s=document.querySelector(".covers-list");function i(n){if(!n)return!1;const o=n.getBoundingClientRect();return o.top<window.innerHeight&&o.bottom>0}function t(){i(e)?s.classList.contains(".covers-list")||s.classList.add(".covers-list"):s.classList.contains(".covers-list")&&s.classList.remove(".covers-list")}t(),window.addEventListener("coversAnimation",t)});new E(".faq-list",{duration:900,showMultiple:!0,elementClass:"faq-item"});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".slide-prj"),s=document.querySelectorAll(".project"),i=document.querySelector(".button-next-prj"),t=document.querySelector(".button-prev-prj"),n=document.querySelectorAll(".see-project");let o=0;const r=s.length,l=()=>{e.style.transform=`translateX(-${o*100}%)`},p=()=>{o===0?(t.disabled=!0,t.setAttribute("tabindex","-1")):(t.disabled=!1,t.removeAttribute("tabindex")),o===r-1?(i.disabled=!0,i.setAttribute("tabindex","-1")):(i.disabled=!1,i.removeAttribute("tabindex"))},v=()=>{n.forEach((L,x)=>{x===o?L.setAttribute("tabindex","0"):L.setAttribute("tabindex","-1")})};i.addEventListener("click",()=>{o<r-1&&(o++,l(),p(),v())}),t.addEventListener("click",()=>{o>0&&(o--,l(),p(),v())}),l(),p(),v()});document.addEventListener("DOMContentLoaded",function(){const e=new S(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},speed:1e3,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});function s(){const t=document.getElementById("custom-prev"),n=document.getElementById("custom-next");t.disabled=e.isBeginning,n.disabled=e.isEnd}function i(){const t=document.querySelectorAll(".swiper-slide");let n=0;t.forEach(o=>{o.style.height="auto";const r=o.offsetHeight;r>n&&(n=r)}),t.forEach(o=>{o.style.height=`${n}px`})}e.on("init",function(){s(),i()}),e.on("reachEnd",function(){s()}),e.on("reachBeginning",function(){s()}),e.on("slideChange",function(){s()}),e.on("resize",function(){i()}),document.getElementById("custom-prev").addEventListener("click",function(){e.isBeginning||e.slidePrev()}),document.getElementById("custom-next").addEventListener("click",function(){e.isEnd||e.slideNext()}),M.get("https://portfolio-js.b.goit.study/api/reviews").then(t=>{const n=document.querySelector(".swiper-wrapper"),o=t.data;o.length>0?o.forEach(r=>{const l=document.createElement("li");l.classList.add("swiper-slide"),l.innerHTML=`
            <div class="review-content">
              <img src="${r.avatar_url}" alt="${r.author}'s avatar" class="review-avatar"/>
              <h3 class="review-author">${r.author}</h3>
              <p class="review-text">${r.review}</p>
            </div>
          `,n.appendChild(l)}):n.innerHTML='<li class="swiper-slide">Not found</li>',e.update(),i(),s()}).catch(t=>{m.error({title:"Error",message:"An error occurred: "+t.message});const n=document.querySelector(".swiper-wrapper");n.innerHTML='<li class="swiper-slide">Not found</li>'})});const c=document.getElementById("user-email"),j=document.getElementById("user-comments"),y=document.getElementById("footer-error"),g=document.getElementById("footer-success"),f=document.querySelector(".overlay"),B=document.getElementById("modal-footer"),N=document.querySelector(".footer-button"),H=document.querySelector(".footer-form"),D=document.querySelector(".close-modal");c.addEventListener("input",function(){const e=c.checkValidity();c.classList.toggle("valid",e),c.classList.toggle("invalid",!e),g.classList.toggle("show",e),y.classList.toggle("show",!e),c.value||(g.style.display="none",y.style.display="none",c.classList.remove("valid","invalid"))});N.addEventListener("click",function(e){e.preventDefault();const s=c.value.trim(),i=j.value.trim();if(!s||!i)return m.info({title:"Info",message:"Please fill in all fields.",position:"center",timeout:5e3});fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,comment:i})}).then(t=>t.json()).then(t=>{t.title&&t.message?(document.getElementById("modal-title").textContent=t.title,document.getElementById("modal-message").textContent=t.message,$(),H.reset(),F()):m.error({title:"Error",message:"Invalid e-mail. Check the data you entered.",position:"center",timeout:5e3})}).catch(()=>{m.error({title:"Network Error",message:"Unable to connect to the server. Please check your internet connection.",position:"center",timeout:5e3})})});function $(){B.classList.add("show"),f.classList.add("show"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",I)}function w(){B.classList.remove("show"),f.classList.remove("show"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",I)}function F(){c.classList.remove("valid","invalid"),g.style.display="none",y.style.display="none"}D.addEventListener("click",w);f.addEventListener("click",e=>{e.target===f&&w()});function I(e){e.key==="Escape"&&w()}
//# sourceMappingURL=index.js.map
