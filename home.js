const menuIcon = document.querySelector(".icon_menu");
const links = document.querySelector(".links_container");

menuIcon.addEventListener("click", () => {
  if (links.classList.contains("active")) {
    links.classList.remove("active");
  } else {
    links.classList.add("active");
  }
});

function closeMenu() {
  links.classList.remove("active");
}
