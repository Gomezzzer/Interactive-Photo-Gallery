
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