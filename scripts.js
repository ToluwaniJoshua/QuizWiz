// JavaScript for toggling the mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Close the mobile menu when a menu item is clicked
const menuItems = document.querySelectorAll(".menu a");
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

