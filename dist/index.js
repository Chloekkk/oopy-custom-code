(()=>{function s(t,n=100){let o;return function(...a){o&&clearTimeout(o),o=setTimeout(()=>t.apply(this,a),n)}}var e={active:!1,headerHeight:45,elementTitle:{},elementTCB:{},elementCover:{},tcbOriginStyle:"",timer:()=>{}};function r(){let t=Math.round((innerWidth-e.elementTitle.offsetWidth)/2)+e.elementTitle.offsetWidth,n=(e.elementCover?.height??0)+e.headerHeight+e.elementTitle.offsetHeight;return{offsetX:t,offsetY:n}}function d(){let{offsetX:t,offsetY:n}=r(),o=e.elementTCB.childNodes[0].childNodes[0]?.style?.color;t-e.elementTitle.offsetWidth>150?(e.active=!0,e.elementTCB.style.cssText="position: absolute;",e.elementTCB.style.cssText+=`left: ${t}px; top: ${n}px; width: 240px;`,e.elementTCB.style.cssText+=`border-left: medium solid ${o??""}; padding-left: 1rem;`):(e.active=!1,e.elementTCB.style.cssText="",e.elementTCB.style.cssText+=e.tcbOriginStyle)}function f(){if(!!e.active)if(e.elementTCB.offsetTop+128<=window.scrollY)e.elementTCB.style.cssText+="position: fixed; top: 128px;";else{let{offsetY:t}=r();e.elementTCB.style.cssText+=`position: absolute; top: ${t}px;`}}function i(){e.elementTitle=document.getElementsByClassName("width")[0],e.elementTCB=document.getElementsByClassName("notion-table_of_contents-block")[0],e.elementCover=document.querySelector("img.page_cover"),e.tcbOriginStyle=document.querySelector(".notion-table_of_contents-block").style.cssText,e.elementTCB&&d(),window.addEventListener("resize",s(d,200)),window.addEventListener("scroll",f)}document.addEventListener("DOMContentLoaded",i);function l(){let t=document.querySelector("div.notion-topbar");console.log("fuck",t),t&&(console.log("sibal",t.nextSibling.nextSibling),t.nextSibling.nextSibling.style.display="none")}document.addEventListener("DOMContentLoaded",l);var c={_sidebar:window.sidebar??!1,_hiddenTranslate:window.hiddenTranslate??!0};document.addEventListener("DOMContentLoaded",function(){c._sidebar&&i(),c._hiddenTranslate&&l()});})();
//# sourceMappingURL=index.js.map
