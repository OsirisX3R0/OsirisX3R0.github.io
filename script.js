// Single-open accordion functionality for jobs
// const jobs = document.querySelectorAll("details.job");
// for (let details of jobs) {
//   details.addEventListener("toggle", (e) => {
//     let open = e.currentTarget.open;
//     e.currentTarget.setAttribute("data-active", open);
//     for (let d of jobs) {
//       if (
//         open &&
//         (d.id !== e.currentTarget.id ||
//           e.currentTarget.dataset.active !== "true") &&
//         (d.open || d.dataset.active !== "true")
//       ) {
//         d.open = false;
//         d.setAttribute("data-active", false);
//       }
//     }
//   });
// }

// Generate experience nav
const jobSliderWidth = document.querySelector(
  ".experience .slider"
).offsetWidth;
const jobSliderNav = document.querySelector(".experience .slider + nav");
const jobs = document.querySelectorAll(".job");
for (let job of jobs) {
  job.style.width = `${jobSliderWidth}px`;
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = `#${job.id}`;
  // a.addEventListener("click", () => {
  //   a.classList.toggle("active");
  // });
  li.appendChild(a);
  jobSliderNav.appendChild(li);
}
