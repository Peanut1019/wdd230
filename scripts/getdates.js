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
	if (visitsDisplay !== null) {
	visitsDisplay.textContent = numbVisits;
	}
} else {
	if (visitsDisplay !== null) {
	visitsDisplay.textContent = `First time? You're lucky...`;
}
}

numbVisits++;

localStorage.setItem("numVisits-ls", numbVisits);

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password1");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}