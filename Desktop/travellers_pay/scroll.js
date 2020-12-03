const targetElement = document.querySelectorAll(".animation-target");
document.addEventListener("scroll", () => {
for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i]. 
    getBoundingClientRect().top + targetElement[i]. clientHeight * 1
    if(window.innerHeight > getElementDistance){
     targetElement[i].classList.add("show");
    }else{
        targetElement[i].classList.remove("show");
    }
    }
})