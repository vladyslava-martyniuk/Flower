document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  const slides = document.querySelector(".slides");
  let slideIndex = 0;

  prevButton.addEventListener("click", function () {
    slideIndex =
      slideIndex === 0 ? slides.childElementCount - 1 : slideIndex - 1;
    updateSlidePosition();
  });

  nextButton.addEventListener("click", function () {
    slideIndex =
      slideIndex === slides.childElementCount - 1 ? 0 : slideIndex + 1;
    updateSlidePosition();
  });

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});
