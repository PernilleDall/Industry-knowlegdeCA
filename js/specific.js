const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

import { projects } from "./api.js";

const project = projects.find((project) => project.id == id);

console.log(project);

const specificProject = document.querySelector(".specific-project");

let i = 0;
const maxIndex = project.image.length - 1; // Maximum index of images

function updateImage() {
  const imgElement = document.querySelector(".specific-project-image img");
  imgElement.src = project.image[i].url;
  imgElement.alt = project.image[i].alt;
}

specificProject.innerHTML += `
  <div class="specific-project-image">
    <i class="fa-solid fa-chevron-left" id="carousel-left"></i>
    <img src="${project.image[i].url}" alt="${project.image[i].alt}" />
    <i class="fa-solid fa-chevron-right" id="carousel-right"></i>
  </div>
  <div class="specific-project-text">
    <h2>${project.title}</h2>
    <p>${project.text}</p>
  </div>`;

const carouselLeft = document.querySelector("#carousel-left");
const carouselRight = document.querySelector("#carousel-right");

carouselLeft.addEventListener("click", () => {
  console.log("left");
  i = (i - 1 + project.image.length) % project.image.length; // Handle boundary conditions
  updateImage();
});

carouselRight.addEventListener("click", () => {
  console.log("right");
  i = (i + 1) % project.image.length; // Handle boundary conditions
  updateImage();
});
