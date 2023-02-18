// Fade-in animation for sections
const sections = document.querySelectorAll("section");
const intObserver = new IntersectionObserver((entries, observer) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  }
});

for (let section of sections) {
  intObserver.observe(section);
}

// Experience functionality
const experienceNav = document.querySelectorAll(".jobs nav a");
const jobContainer = document.querySelector(".jobs .job");
const jobsTemplates = [...document.querySelectorAll(".jobs template")];
for (let link of experienceNav) {
  link.addEventListener("click", () => {
    let template = jobsTemplates.find((j) => j.id === link.id);
    let jobContent = template.content.cloneNode(true);
    jobContainer.innerHTML = "";
    jobContainer.appendChild(jobContent);
  });
}

let defualtTemplate = jobsTemplates[0];
let defaultContent = defualtTemplate.content.cloneNode(true);
jobContainer.innerHTML = "";
jobContainer.appendChild(defaultContent);

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
