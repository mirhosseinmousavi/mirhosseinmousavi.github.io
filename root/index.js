$(function () {
  
});

function one(){
  var swiper = new Swiper(".swiper-container.two", {
    pagination: ".swiper-pagination",
    // Optional parameters
    direction: "horizontal",
    paginationClickable: true,
    effect: "coverflow",
    // loop: true,
    speed: 1000,
    autoplay: {
      delay: 15000,
    },

    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
  });
}