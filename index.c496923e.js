document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("form input"),t=function(e){for(var t="",n=0;n<e.length;n++)n>0&&e[n]===e[n].toUpperCase()&&(t+=" "),t+=e[n];return t};e.forEach(function(e){var n=document.createElement("label");n.className="field-label",n.setAttribute("for",e.id),n.textContent=t(e.name),e.placeholder=t(e.name.charAt(0).toUpperCase()+e.name.slice(1)),e.parentNode.append(n)})});
//# sourceMappingURL=index.c496923e.js.map
