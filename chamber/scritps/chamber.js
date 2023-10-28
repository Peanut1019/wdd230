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
const visitsDisplay = document.querySelector(".visits");
const theDateToday = new Date();
const today = Date.now();
let numbVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let daysleft = Number(window.localStorage.getItem("numDays-ls")) || 0;
daysleft = (theDateToday.getTime() - Date.now()) / msToDays;
if (numbVisits !== 0) {
	if (daysleft == 1){
		visitsDisplay.textContent = 'Back so soon! Awesome!';
	}
	else{
		visitsDisplay.textContent = 'You last visited ago.'
	}
} 
else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numbVisits++;

localStorage.setItem("numDays-ls", daysleft);
daysElement.textContent = `${daysleft.toFixed(0)} days`;
