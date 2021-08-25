const cardLinks = document.querySelector(".card__links");
const cardBtn = document.querySelector(".card__btn");
const cardBtnWrapper = document.querySelector(".card__btn-wrapper");
const cardContent = document.querySelector(".card__content");

console.log(cardBtnWrapper);



window.addEventListener("resize", handleResize);
window.addEventListener("load", () => {
    if(window.innerWidth <= 980){
        handleResize();
        console.log("xxx");
    }
})

function handleResize(){
    if(window.innerWidth > 980){
        if(cardLinks.parentElement !== cardBtnWrapper){
            cardBtnWrapper.appendChild(cardLinks);
        }
    }else{
        if(cardLinks.parentElement !== cardContent){
            cardContent.appendChild(cardLinks);
        }
    
    }
   
}





/****************** Card Links show/hide toggle ************/
/****************** Card Links show/hide toggle ************/
/****************** Card Links show/hide toggle ************/
/****************** Card Links show/hide toggle ************/

cardBtn.addEventListener("click", (e) => {
    const display = getComputedStyle(cardLinks).getPropertyValue("display");
    if(display === "flex"){
        cardLinks.style.display = "none";
        if(window.innerWidth < 330){
            cardBtnWrapper.style.display = "block";
        }
    }else{
        cardLinks.style.display = "flex";
        setTimeout(() => {
            window.addEventListener("click", hideCardLinks);
            window.addEventListener("keydown", handleHideCardLinks);
        })
        if(window.innerWidth < 330){
            cardBtnWrapper.style.display = "none";

        }
    }
})

function handleHideCardLinks(e){
    if(e.key === "Escape"){
        hideCardLinks();
    }
}

function hideCardLinks(){
    cardBtnWrapper.style.display = "block";
    cardLinks.style.display = "none";
    window.removeEventListener("click", hideCardLinks);
    window.removeEventListener("keydown", handleHideCardLinks);

}