!function(){let t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",function(){a=setInterval(()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3),t.disabled=!0}),e.addEventListener("click",function(){t.disabled=!1,clearInterval(a)});let a=null}();
//# sourceMappingURL=01-color-switcher.29655370.js.map