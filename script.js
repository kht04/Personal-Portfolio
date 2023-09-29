/*--------------------------- nav toggle ---------------------------*/

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/*--------------------------- remove menu on link click ---------------------------*/

const navLinks = document.querySelectorAll(".nav-link");

linkAction = () =>{
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n=>n.addEventListener("click", linkAction))

/*--------------------------- add active status ---------------------------*/

navLinks.addEventListener("click", ()=>{
    navLinks.classList.add("active-link")
})
