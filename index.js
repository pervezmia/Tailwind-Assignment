const htmltag = document.querySelector("#htmltag");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click",()=>{
    htmltag.classList.toggle("dark");
});