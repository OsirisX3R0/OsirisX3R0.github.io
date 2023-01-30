// Smooth scrolling for the main nav
let nav = document.querySelectorAll("header nav a");
for (let link of nav) {
  link.addEventListener("click", () => {
    let id = link.href.substring(link.href.lastIndexOf("#"));
    let element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}

// Single-open accordion functionality for jobs
const jobs = document.querySelectorAll("details.job");
for (let details of jobs) {
  details.addEventListener("toggle", (e) => {
    let open = e.currentTarget.open;
    e.currentTarget.setAttribute("data-active", open);
    for (let d of jobs) {
      if (
        open &&
        (d.id !== e.currentTarget.id ||
          e.currentTarget.dataset.active !== "true") &&
        (d.open || d.dataset.active !== "true")
      ) {
        d.open = false;
        d.setAttribute("data-active", false);
      }
    }
  });
}

// Generate project nav
const projectSlider = document.querySelector(".projects .slider + nav");
const projects = document.querySelectorAll(".project");
for (let project of projects) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = `#${project.id}`;
  li.appendChild(a);
  projectSlider.appendChild(li);
}
