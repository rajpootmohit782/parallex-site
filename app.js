const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");

let header_height = header.offsetHeight;

window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    translate.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    })

    big_title.style.opacity = - scroll/(header_height/2) + 1 ;
    shadow.style.height = `$(scroll * 0.5 + 300)px`
})