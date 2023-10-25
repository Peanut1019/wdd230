let currentYear = document.querySelector('#year')
document.querySelector('#year').textContent = 2023;
let oLastModif = document.querySelector('#lastModified')
document.querySelector('#lastModified').textContent = new Date(document.lastModified).toDateString();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
const visitsDisplay = document.querySelector(".visits");

let numbVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numbVisits !== 0) {
	visitsDisplay.textContent = numbVisits;
} else {
	visitsDisplay.textContent = `First time? You're lucky...`;
}

numbVisits++;

localStorage.setItem("numbVisits-ls", numbVisits);