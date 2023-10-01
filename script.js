const scrollIndicator = document.getElementById("scroll-indicator");
let scrollTimeout;

const slides = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const widthOfSlide = document.getElementById("slide");

prevBtn.addEventListener("click", () => {
  slides.style.scrollBehavior = "smooth";
  slides.scrollLeft -= widthOfSlide.offsetWidth - 200;
});

nextBtn.addEventListener("click", () => {
  slides.style.scrollBehavior = "smooth";
  slides.scrollLeft += widthOfSlide.offsetWidth - 200;
});

const buttons = document.querySelectorAll(".custom-button");

buttons[0].classList.add("active");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
