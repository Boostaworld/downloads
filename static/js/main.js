/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('glass') 
                       : header.classList.remove('glass')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
})

sr.reveal(`.home__images`, {distance: '100px', delay: 800, origin: 'top'})
sr.reveal(`.home__title`, {delay: 700, origin: 'bottom'})
sr.reveal(`.home__description`, {delay: 1200})
sr.reveal(`.home__button`, {delay: 1400})
sr.reveal(`.home__footer`, {delay: 1600})
sr.reveal(`.home__data div`, {origin: 'right', interval: 100, delay: 1800})

ScrollReveal().reveal('.animated-title', {
    duration: 800,
    scale: 0.5,
    reset: true,
  });
  



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".animated-element").forEach(function (element, index) {
      ScrollReveal().reveal(element, {
        distance: "20px",
        duration: 800,
        delay: 200 * index,
        origin: index % 2 === 0 ? 'right' : 'left',
        reset: true,
      });
    });
  });