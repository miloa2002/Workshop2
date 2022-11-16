const burger = document.querySelector("#btn__burger");

const links = document.querySelectorAll(".nav__link");

burger.addEventListener("click",()=>{
    links.forEach(link =>{
            if(link.style.display === "block"){
        link.style.display = "none"
    }else{
        link.style.display = "block"
    }
    })
})