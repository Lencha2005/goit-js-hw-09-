import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},r=document.querySelector(".feedback-form");function m(t){const o=t.target.value.trim(),a=t.target.name.trim();e[a]=o,console.log(e),localStorage.setItem("feedback-form-state",JSON.stringify(e))}r.addEventListener("input",m);
//# sourceMappingURL=commonHelpers2.js.map
