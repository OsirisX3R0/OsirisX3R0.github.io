const body = document.querySelector("body");

// Theme switcher
const sunIcon = "\u263c";
const moonIcon = "\u263d";
const themeButton = document.querySelector(".button.theme");
/** @type {'light' | 'dark' | null} */
let theme = null;

/**
 * Toggles the theme
 * @param {'light' | 'dark' | undefined} initial Optional initial theme to be set
 */
const toggleTheme = (initial) => {
  if (initial) theme = initial;
  else theme = theme === "light" ? "dark" : "light";
  if (!initial || theme === "light") body.classList.toggle("light");
  themeButton.innerHTML = theme === "light" ? moonIcon : sunIcon;
  localStorage.setItem("theme", theme);
};

toggleTheme(localStorage.getItem("theme") || "dark");

themeButton.addEventListener("click", () => toggleTheme());

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
 * @param {Element?} link Link element to update with 'selected' class
 */
const updateExpContent = (
  template = jobsTemplates[0],
  link = experienceNavLinks[0]
) => {
  /** @type {Element} */
  let content = template.content.cloneNode(true);
  jobContainer.classList.toggle("show");
  setTimeout(() => {
    jobContainer.innerHTML = "";
    jobContainer.appendChild(content);
    jobContainer.classList.toggle("show");
  }, 300);
  experienceNavLinks.forEach((link) => link.classList.remove("selected"));
  link.classList.add("selected");
};

for (let link of experienceNavLinks) {
  link.addEventListener("click", () => {
    updateExpContent(
      jobsTemplates.find((j) => j.id === link.id),
      link
    );
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
