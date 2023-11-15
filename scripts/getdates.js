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

//Temp Display
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.36&lon=-111.89&units=imperial&appid=5497b55e3924af4b31a9a1ea3f35f231';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent= `${desc}`;
}   
apiFetch();


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
if (kp2 !== null) {
kp2.addEventListener("focusout", checkSame);
}
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
if (range !== null) {
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);
}
function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}