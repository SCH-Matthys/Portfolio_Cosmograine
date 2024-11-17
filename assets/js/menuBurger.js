const menuBurger = document.getElementById("menuBurger");
const ulBurger = document.getElementById("ulBurger");
const links = document.querySelectorAll("#ulBurger a");

function closeMenu() {
    ulBurger.classList.remove("active");
    menuBurger.classList.toggle("menuClose");
}

menuBurger.addEventListener("click", (event) => {
    ulBurger.classList.toggle("active");
    menuBurger.classList.toggle("menuClose");
    event.stopPropagation();
});

document.body.addEventListener("click", closeMenu);

links.forEach((link) => {
    link.addEventListener("click", closeMenu);
});
