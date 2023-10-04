
baguetteBox.run('.gallery');



let search = document.querySelector('#search');
let legends = document.querySelectorAll('[data-caption]');

let searchBar = event => {
    let searchTerm = event.target.value.toLowerCase();
    legends.forEach(legends => {
        let text = legends.getAttribute('data-caption').toLowerCase();

        if(text.includes(searchTerm)) {
            legends.style.display = "block";
        } else {
            legends.style.display = "none";
        }
    });
}

search.addEventListener('keyup', searchBar);

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
	ul.classList.toggle("show");
  });  

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
	