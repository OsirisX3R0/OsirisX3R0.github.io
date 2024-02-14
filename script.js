const body = document.querySelector("body");

// Theme switcher
let theme = localStorage.getItem("theme") || "dark";
const themeButton = document.querySelector(".button.theme");
themeButton.innerHTML = theme === "light" ? "\u263c" : "\u263d";
if (theme === "light") body.classList.toggle("light");

const toggleTheme = () => {
  body.classList.toggle("light");
  theme = theme === "light" ? "dark" : "light";
  themeButton.innerHTML = theme === "light" ? "\u263c" : "\u263d";
  localStorage.setItem("theme", theme);
};

themeButton.addEventListener("click", toggleTheme);

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
const experienceNavLinks = document.querySelectorAll(".jobs nav a");
const jobContainer = document.querySelector(".jobs .job");
const jobsTemplates = [...document.querySelectorAll(".jobs template")];

/**
 * Updates the content of the experience UI
 * @param {Element?} template Template element to use
 */
const updateExpContent = (template = jobsTemplates[0]) => {
  /** @type {Element} */
  let content = template.content.cloneNode(true);
  jobContainer.classList.toggle("show");
  setTimeout(() => {
    jobContainer.innerHTML = "";
    jobContainer.appendChild(content);
    jobContainer.classList.toggle("show");
  }, 300);
};

for (let link of experienceNavLinks) {
  link.addEventListener("click", () => {
    updateExpContent(jobsTemplates.find((j) => j.id === link.id));
  });
}

updateExpContent();

// Single-open accordion functionality for jobs
const jobs = document.querySelectorAll("details.job");
for (let details of jobs) {
  details.addEventListener("toggle", (ev) => {
    let open = ev.currentTarget.open;
    ev.currentTarget.setAttribute("data-active", open);
    for (let d of jobs) {
      if (
        open &&
        (d.id !== ev.currentTarget.id ||
          ev.currentTarget.dataset.active !== "true") &&
        (d.open || d.dataset.active !== "true")
      ) {
        d.open = false;
        d.setAttribute("data-active", false);
      }
    }
  });
}
