let chakra =  document.querySelector(".chakra")
for(let i=0; i< 24;i ++){
    chakra.innerHTML+=`<div class="line"></div>`
    let line = document.querySelectorAll(".line")
    line[i].style.transform=`rotateZ(${i* 15}deg )`
}
let orange = document.querySelector(".orange")
let white = document.querySelector(".white")
let green = document.querySelector(".green")
let degree = 0;

setInterval(()=>{
    orange.style.background=`linear-gradient( ${degree}deg,orange,orangered)`
    white.style.background=`linear-gradient(${degree}deg,white,whitesmoke)`
    green.style.background=`linear-gradient( ${degree}deg,rgb(14, 210, 3),rgb(23, 141, 2))`
    degree++
},10);