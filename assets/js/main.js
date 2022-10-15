/* SKILLS TABS */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
})
 

/* mixitup filter */

let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    
    linkWork.forEach(L=> L.classList.remove('active-work++000000000000'))
    this.classList.add('active-work')

}

linkWork.forEach(L => L.addEventListener("click", activeWork))




/* work poput */

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortafolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortafolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open")
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortafolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}

/**services modal */
const modalViews = document.querySelectorAll('.services__modal'),
     modelBtns = document.querySelectorAll('.services__button'),
     modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}


modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
} )


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/**INPUT ANIMATION */

const inputs = document.querySelectorAll(".input")

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
    
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})


/* scroll section active link  */

//get all sections that have an id defines
const sections = document.querySelectorAll("section[id]")
console.log(sections)
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    //get current scroll position
    let scrollY = window.pageYOffset;

    //now we loop through sections to get height, top and ID values for eeach

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        


        /* if our current scroll position enters the space where current section onscreen is, add .active class
        tocorresponding navidate link, else remove it 
        - to know wich link need on active class, we use sectionId variable we are getting shile looping through
        section as an selector */


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })

}
/* Contador de visitas  */
let contador = 0;

function contadorClicIncrementa(){
    document.getElementById("counting").innerHTML = ++contador;
}