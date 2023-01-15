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
