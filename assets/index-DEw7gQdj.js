(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let c=(n,r=!1)=>r?document.querySelectorAll(n):document.querySelector(n);document.getElementById("root").innerHTML=`

    <div id="main-container">
    
      <div class="🤡">
        <div id="kuromi-img"></div>
        <h1>Miriam's Website</h1>
        <p id="bottom">🚧Under Construction... Please wait🌼</p>
      </div>

    </div>

`;const l=c(".🤡"),u=c("#kuromi-img"),i=c("h1");let o=0;l.addEventListener("click",()=>{if(o<=144)switch(o++,u.style=`transform: rotate(${o*10}deg);`,o){case 36:i.innerText="Yaaay!";break;case 72:i.innerText="😵‍💫";break;case 108:i.innerText="She's nauseous :(";break;case 144:i.innerText="She gave up >:(",u.classList.add("gave-up");break}});
