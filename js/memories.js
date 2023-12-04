
let box = document.querySelector(".box")
let right = document.querySelectorAll(".right")

let left = document.querySelector(".left")

let imgs = document.querySelectorAll("img") 
console.log(imgs.length)

let index = 1000

imgs.forEach(img => {
    img.style.zIndex = index--;
})

right.forEach(right =>{
    right.style.zIndex = index--
    right.addEventListener("click" , () =>{
        if(right.parentElement.previousElementSibling.classList.contains("active")) {
            right.style.display = "none"
            right.parentElement.previousElementSibling.classList.remove("active")
            right.parentElement.previousElementSibling.classList.add("inactive")
            right.parentElement.nextElementSibling.classList.add("active")
            
            if(left.previousElementSibling.previousElementSibling.classList.contains("active")) {
                left.previousElementSibling.children[0].remove();
            }
            
            if (box.children[0].classList.contains("inactive")){
                left.style.display = "inline";
            }

        }
        
    })
})

if(box.children[0].classList.contains("active")) {
    left.style.display = "none"
} 

// left.style.zIndex = index--

left.addEventListener("click" , () => {
    imgs.forEach(ele => {
        if(ele.classList.contains("active")) {
            ele.classList.remove("active")
            ele.previousElementSibling.previousElementSibling.classList.remove("inactive")
            
            ele.previousElementSibling.children[0].style.display = "inline";
            
            ele.previousElementSibling.previousElementSibling.classList.add("active") 
        }
    })
    
    if(box.children[0].classList.contains("active")) {
        left.style.display = "none"
    } else {
        left.style.display = "inline"
    }
})


//Dark-light Mode

let darkLight = document.querySelector(".dark-light")

let darkChange = document.querySelector(".dark-light .bullet")

let dark_span = document.querySelector(".dark-light .dark-span")

darkLight.addEventListener("click" , () => {
    darkLight.classList.toggle("active")
    
    if(darkLight.classList.contains("active")) {
        addActive();
    } else {
        removeActive();
    }

    localStorage.setItem("dark-light-mode" , darkLight.classList.item(1));
})

if(darkLight.classList.contains("dark-light")) {
    darkLight.classList.add(localStorage.getItem("dark-light-mode"))
    darkLight.classList.remove("null")
    
    if(darkLight.classList.contains(localStorage.getItem("dark-light-mode"))) {
        addActive();
    }
}

function addActive() {
    darkChange.classList.add("active")
    dark_span.classList.add("active")
    document.body.classList.add("active")
}

function removeActive() {
    darkChange.classList.remove("active")
    dark_span.classList.remove("active")
    document.body.classList.remove("active")
}

let h1 = document.querySelector("h1")
h1.style.transition = "1s"
let image = document.querySelector(".image")

image.style.opacity = "0"

setTimeout(amazingEffect , 5000)

function amazingEffect() {
    image.style.opacity = "1"
    h1.style.opacity = "0"
}