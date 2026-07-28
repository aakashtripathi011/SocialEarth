const slides = [
  {
    image: "images/img1.jpeg",
    title: "Connect",
    text: "Meet people from around the world.",
  },

  {
    image: "images/img2.jpeg",
    title: "Jam",
    text: "Listen and enjoy music together.",
  },

  {
    image: "images/img3.jpeg",
    title: "Create",
    text: "Share your moments with everyone.",
  },
];

let currentSlide = 0;

const image = document.getElementById("carousel-image");
const title = document.getElementById("carousel-title");
const text = document.getElementById("carousel-text");

function showSlide() {
  const slide = slides[currentSlide];

  image.src = slide.image;

  title.textContent = slide.title;

  text.textContent = slide.text;
}
showSlide();

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", function () {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
});

prevButton.addEventListener("click", function () {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});
