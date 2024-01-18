import { projects } from "./api.js";

console.log(projects);

const projectsList = document.querySelector(".projects-list");

projects.forEach((project) => {
  projectsList.innerHTML += `
    <div class="project">
      <div class="project-image">
      <a href="./specific.html?id=${project.id}"><img src="${project.image[0].url}" alt="${project.image[0].alt}" /></a>
      </div>
      <div class="project-text">
        <h2>${project.title}</h2>
      </div>
    </div>
  `;
});
