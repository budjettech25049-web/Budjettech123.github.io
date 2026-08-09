const elements = document.querySelectorAll('nav');

let prevScrollPos = window.scrollY;

window.onscroll = function(){
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos){
        elements.forEach(header => {
           header.classList.remove('scroll'); 
        });
    }else{
        elements.forEach(header => {
            header.classList.add('scroll'); 
        });
    }
    prevScrollPos = currentScrollPos;
}

const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {

    const slides = slider.querySelectorAll(".slide");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let currentSlide = 0;

    function showSlide(number) {

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[number].style.display = "flex";
    }

    next.addEventListener("click", function() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    prev.addEventListener("click", function() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

    showSlide(currentSlide);

});

const dimeSection = document.querySelector(".dime-section");
const dimeLabels = document.querySelectorAll(".dime-label");

if (dimeSection) {

    window.addEventListener("scroll", () => {

        const sectionPosition = dimeSection.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        let progress = 1 - (sectionPosition.top / screenHeight);

        progress = Math.max(0, Math.min(1, progress));

        // First label
        if (progress > 0.25) {
            dimeLabels[0].classList.add("show");
        }

        // Second label
        if (progress > 0.40) {
            dimeLabels[1].classList.add("show");
        }

        // Third label
        if (progress > 0.55) {
            dimeLabels[2].classList.add("show");
        }

    });

}

const mouse = document.querySelector('.sponsorlistsection')
const front = document.querySelector('.front-layer')
const back = document.querySelector('.back-layer')

const sensFront = 600
const sensBack = 900

mouse.addEventListener('mousemove', e=> {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
    translate(
        ${-x/sensFront}%,
         ${-y/sensFront}%
    )` ; 
    back.style.transform = `
    translate(
        ${
           -x/sensBack
        }%, ${-y/sensBack
}% ) ` ;
})
