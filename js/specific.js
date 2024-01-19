const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

import { projects } from "./api.js";

const project = projects.find((project) => project.id == id);

console.log(project);

const specificProject = document.querySelector(".specific-project");

let i = 0;

function updateImage() {
  const imgElement = document.querySelector("#modal_toggle");
  imgElement.src = project.image[i].url;
  imgElement.alt = project.image[i].alt;
}

function updateModalImage() {
  const modalImage = document.querySelector("#modal-carousel-image");
  modalImage.src = project.image[i].url;
  modalImage.alt = project.image[i].alt;
}

specificProject.innerHTML += `
  <div class="modal hidden">
    <div class="modal-content">
      <i class="fa-solid fa-chevron-left" id="modal-carousel-left"></i>
      <img id="modal-carousel-image" src="${project.image[i].url}" alt="${project.image[i].alt}" />
      <i class="fa-solid fa-chevron-right" id="modal-carousel-right"></i>
    </div>
  </div>
  <div class="specific-project-image">
    <i class="fa-solid fa-chevron-left" id="carousel-left"></i>
    <img id="modal_toggle" src="${project.image[i].url}" alt="${project.image[i].alt}" />
    <i class="fa-solid fa-chevron-right" id="carousel-right"></i>
  </div>
  <div class="specific-project-text">
    <h2>${project.title}</h2>
    <p>${project.text}</p>
  </div>`;

const carouselLeft = document.querySelector("#carousel-left");
const carouselRight = document.querySelector("#carousel-right");
const modalCarouselLeft = document.querySelector("#modal-carousel-left");
const modalCarouselRight = document.querySelector("#modal-carousel-right");
const modalToggle = document.querySelector("#modal_toggle");

carouselLeft.addEventListener("click", () => {
  console.log("left");
  i = (i - 1 + project.image.length) % project.image.length;
  updateImage();
});

carouselRight.addEventListener("click", () => {
  console.log("right");
  i = (i + 1) % project.image.length;
  updateImage();
});

modalCarouselLeft.addEventListener("click", () => {
  console.log("modal left");
  i = (i - 1 + project.image.length) % project.image.length;
  updateModalImage();
});

modalCarouselRight.addEventListener("click", () => {
  console.log("modal right");
  i = (i + 1) % project.image.length;
  updateModalImage();
});

modalToggle.addEventListener("click", () => {
  console.log("modal");
  document.querySelector(".modal").classList.toggle("hidden");
  updateModalImage();
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    document.querySelector(".modal").classList.toggle("hidden");
  }
});
