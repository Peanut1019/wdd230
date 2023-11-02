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
const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const spotlights = document.querySelector(".spotlights");
const weather = document.querySelector(".weather");
const events = document.querySelector(".events");
const hero = document.querySelector(".hero");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☾")) {
		main.style.background = "#000";
		spotlights.style.color = "#0f0326";
		spotlights.style.background = "#5e9cae";
		weather.style.color = "#5e9cae";
		weather.style.background = "#0f0326";
		events.style.color = "#5e9cae";
		events.style.background = "#0f0326";
		hero.style.color = "#5e9cae";
		hero.style.background = "#0f0326";
		modeButton.textContent = "☼";
		modeButton.color = "#0f0326";
	} else {
		main.style.background = "aliceblue";
		main.style.color = "#000";
		spotlights.style.color = "#5e9cae";
		spotlights.style.background = "#0f0326";
		weather.style.color = "#0f0326";
		weather.style.background = "#5e9cae";
		events.style.color = "#0f0326";
		events.style.background = "#5e9cae";
		hero.style.color = "#0f0326";
		hero.style.background = "#5e9cae";
		modeButton.textContent = "☾";
	}
});
const messageElement = document.querySelector(".visits");
const theDateToday = new Date();
const today = Date.now();
function setLastVisit(lastVisitDate) {
    localStorage.setItem("lastVisit", lastVisitDate);
}
 
function getLastVisit() {
    return localStorage.getItem("lastVisit");
}
    const currentDate = new Date();
    const lastVisitValue = getLastVisit();

	if(lastVisitValue == null) {
		message = "Welcome! Let us know if you have any questions.";
	} else {
		const lastVisitDate = new Date(lastVisitValue);
		/* https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript */
		const dateDifference = new Date(currentDate.getTime() - lastVisitDate.getTime());
		const daysDifference = dateDifference.getUTCDate() - 1;
		if(daysDifference < 1) {
			message = "Back so soon! Awesome!";
		} else {
			if (daysDifference > 1) {
				message = "You last visited " + daysDifference + " days ago.";
			} else {
				message = "You last visited " + daysDifference + " day ago.";
			}
		}
	}
	 
	if(messageElement != null) {
		messageElement.textContent = message;
	}
	let lastOpend =  document.querySelector('#time')
	document.querySelector('#time').textContent = new Date().toDateString();
