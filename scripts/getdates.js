let currentYear = document.querySelector('#year')
document.querySelector('#year').textContent = new Date().toDateString();
let oLastModif = document.querySelector('#lastModified')
document.querySelector('#lastModified').textContent = new Date(document.lastModified).toDateString();