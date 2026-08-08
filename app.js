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

const slides = [
  {
    image: "students.jpg",
    title: "First Slide",
    description: "This is the text for the first slide."
  },
  {
    image: "seniors.jpg",
    title: "Second Slide",
    description: "This is the text for the second slide."
  },
  {
    image: "calls.jpg",
    title: "Third Slide",
    description: "This is the text for the third slide."
  }
];

let currentSlide = 0;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideDescription = document.getElementById("slideDescription");

function showSlide() {
  slideImage.src = slides[currentSlide].image;
  slideTitle.textContent = slides[currentSlide].title;
  slideDescription.textContent = slides[currentSlide].description;
}

document.getElementById("next").addEventListener("click", function () {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
});

document.getElementById("prev").addEventListener("click", function () {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
});
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
