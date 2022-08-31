const navBar = document.querySelector(".nav-bar"); //getting navBar to append into
const sections = document.querySelectorAll("section"); //getting sections to name each navBar item

//creating navbar dynamically
const ul = document.createElement("ul");
ul.classList.add("nav");
const divLogo = document.createElement("div");
divLogo.classList.add("nav__title");
const divTitle = document.createElement("a");
divTitle.setAttribute("href", "#header");
divTitle.innerHTML = "PinkPink<span class='nav__title-dot'>.</span>";
const divButton = document.createElement("button");
divButton.classList.add("nav__menu");
const divButtonImg = document.createElement("img");
divButtonImg.setAttribute("src", "./assets/icons/hamburger-menu.png");
divButtonImg.setAttribute("alt", "menu");
const divButtonImgClose = document.createElement("img");
divButtonImgClose.setAttribute(
  "src",
  "./assets/icons/close hamburger-menu.png"
);
divButtonImgClose.setAttribute("alt", "menu");
divButtonImgClose.classList.add("nav__menu-close");

divButton.appendChild(divButtonImg);
divButton.appendChild(divButtonImgClose);

divLogo.appendChild(divTitle);
divLogo.appendChild(divButton);

ul.appendChild(divLogo);
navBar.appendChild(ul);

createListItem(); //for each section creating a nav item
function createListItem() {
  for (let i = 1; i < sections.length; i++) {
    const navListItem = document.createElement("li");
    navListItem.classList.add("nav__item");

    const navListItemLink = document.createElement("a");
    navListItemLink.setAttribute("href", `#${sections[i].id}`);
    navListItemLink.textContent = sections[i].getAttribute("data-nav");

    const navListItemImg = document.createElement("img");
    navListItemImg.setAttribute("src", "./assets/icons/nav-mobile-arrow.png");
    navListItemImg.setAttribute("alt", "arrow");
    navListItemImg.classList.add("nav__arrow");

    navListItem.appendChild(navListItemLink);
    navListItem.appendChild(navListItemImg);
    ul.appendChild(navListItem);
  }
}
//adding relavent elements to make navBar functional
const page = document.querySelector(".page");
const navMenu = document.querySelector(".nav__menu");
const navMenuImg = document.querySelector(".nav__menu img");
const navMenuClose = document.querySelector(".nav__menu-close");
const navTitle = document.querySelector(".nav__title");
const navTitleLogo = document.querySelector(".nav__title a");
const navItem = document.querySelectorAll(".nav__item");

navMenu.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
  navBar.classList.toggle("nav--active");
  navMenuImg.classList.toggle("nav__menu--deactive");
  navMenuClose.classList.toggle("nav__menu-close--active");
  navTitle.classList.toggle("nav__title--active");
  page.classList.toggle("page--scroll-lock");
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("nav__item--active");
  }
}

navTitleLogo.addEventListener("click", closeNavMenu);

navItem.forEach((item) => {
  item.addEventListener("click", closeNavMenu);
});

function closeNavMenu() {
  if (navBar.classList.contains("nav--active")) {
    toggleNavMenu();
  }
}
