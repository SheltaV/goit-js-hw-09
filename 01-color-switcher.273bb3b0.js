const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",function(){n=setInterval(()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3),t.disabled=!0}),e.addEventListener("click",function(){t.disabled=!1,clearInterval(n)});let n=null;
//# sourceMappingURL=01-color-switcher.273bb3b0.js.map
