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