let currentYear = document.querySelector('#year');
if (currentYear !== null) {
document.querySelector('#year').textContent = 2023;
}
let oLastModif = document.querySelector('#lastModified')
document.querySelector('#lastModified').textContent = new Date(document.lastModified).toDateString();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
//
const exButton = document.querySelector('#ex');
const advert = document.querySelector('#advert');
const d = new Date();
let day = d.getDay();

if ((day == 0) || (day == 4) || (day == 5) || (day == 6)) {
	if (advert !==null) {
	advert.classList.toggle('close');
	}
	if (exButton !== null) {
	exButton.classList.toggle('close');
	}
}
if (exButton !== null) {
exButton.addEventListener('click', () => {
	advert.classList.toggle('close');
	exButton.classList.toggle('close');
});
}
// 
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.36&lon=-111.89&units=imperial&appid=5497b55e3924af4b31a9a1ea3f35f231';
const fore = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.36&lon=-111.89&units=imperial&cnt=6&appid=5497b55e3924af4b31a9a1ea3f35f231'
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
			// console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
async function apiFetch2() {
    try {
        const response = await fetch(fore);
        if (response.ok) {
            const duty = await response.json();
            displayForecast(duty);
			// console.log(duty);
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
function displayForecast(duty) {
	const sol = 0;
	duty.list.forEach((value)=>{
		let ficonsrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;
        let desc = value.weather[0].description;
        let figure = document.createElement('div');
        let forecastIcon = document.createElement('img');
		let foreTemp = document.createElement('p');
		let forecastDay = document.createElement('h4');
		const dia = sol +1;
		forecastDay.textContent = `Day #${dia}`;
		const temp = value.main.temp;
		foreTemp.textContent = `${temp}F`
        forecastIcon.setAttribute('id', "weather-icon");
        forecastIcon.setAttribute('src', ficonsrc);
        forecastIcon.setAttribute('alt', value.main);
        let foreDesc = document.createElement('figcaption');
        foreDesc.textContent = `${desc}`;
        // figure.appendChild(forecastDay);
		figure.appendChild(forecastIcon);
		figure.appendChild(foreTemp);
		figure.appendChild(foreDesc);
        if (forecast !== null) {
		forecast.appendChild(figure);
		}
	});
	
}   
apiFetch();
apiFetch2();
const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const spotlights = document.querySelector(".spotlights");
const weather = document.querySelector(".weather");
const forecast = document.querySelector(".forecast");
const events = document.querySelector(".events");
const hero = document.querySelector(".hero");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☾")) {
		main.style.background = "#000";
		spotlights.style.color = "#0f0326";
		spotlights.style.background = "#5e9cae";
		weather.style.color = "#5e9cae";
		weather.style.background = "#0f0326";
		forecast.style.color = "#5e9cae";
		forecast.style.background = "#0f0326";
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
		forecast.style.color = "#0f0326";
		forecast.style.background = "#5e9cae";
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
	let lastOpend =  document.querySelector('#time');
	if (lastOpend !== null) {
	document.querySelector('#time').textContent = new Date().toDateString();
	}
	const gridbutton = document.querySelector("#grid");
	const listbutton = document.querySelector("#list");
	const display = document.querySelector("article");
	
	// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
	if (gridbutton !== null) {
	gridbutton.addEventListener("click", () => {
		// example using arrow function
		display.classList.add("grid");
		display.classList.remove("list");
	});
}
if (listbutton !== null) {
	listbutton.addEventListener("click", showList); // example using defined function
}
	function showList() {
		display.classList.add("list");
		display.classList.remove("grid");
	}

const baseURL = "https://Peanut1019.github.io/wdd230/";
const linksURL = "https://Peanut1019.github.io/wdd230/chamber/data/members.json";
const disc = document.querySelector('#disc');
const mess = document.querySelector('#mess');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const displayLinks = (members) => {
    members.forEach(member => {
    	let card = document.createElement('section');
    	let image = document.createElement('img');
		let name = document.createElement('h2');
    	let address = document.createElement('h3');
    	let phone = document.createElement('h3');
		let url = document.createElement('a');
		let membership = document.createElement('h3');
     
     name.textContent = ('Name: ${member.name}', member.name);
     address.textContent = ('Address: ${member.address}', member.address);
     phone.textContent = ('Phone #: ${member.phone}', member.phone);
		let linkAnchor = document.createElement('a');
		linkAnchor.setAttribute('href',member.url);
		linkAnchor.setAttribute('target','_blank');
		linkAnchor.textContent = (`${member.name}'s website`);
		url.appendChild(linkAnchor);
     image.setAttribute('src', member.imgurl);
     image.setAttribute('alt', 'Protrait of ${member.name}', member.name);
     image.setAttribute('loading', 'lazy');
     image.setAttribute('width', '340');
     image.setAttribute('height', '440');
	 membership.textContent = ('Membership: ${member.membership}', member.membership);
	 
	 card.appendChild(image);
     card.appendChild(name);
     card.appendChild(address);
     card.appendChild(phone);
	 card.appendChild(url);
	 card.appendChild(membership);
	 if (disc !== null) {
     disc.appendChild(card);
	 }
        });
    }
    displayLinks(data.members);
}
getLinks();
async function getLnks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const dispLinks = (members) => {
    members.forEach(member => {
    	let card = document.createElement('div');
		let image = document.createElement('img');
		let name = document.createElement('h3');
    	let address = document.createElement('h4');
    	let phone = document.createElement('h4');
		let url = document.createElement('a');
		let membership = document.createElement('h4');
		function getMultipleRandom(members, num) {
			const shuffled = [...members].sort(() => 0.5 - Math.random());
		  
			return shuffled.slice(0, num);
		  }
	const meme = (member.membership);
     if ((meme == "Silver") || (meme == "Gold")) {
	if (members = getMultipleRandom(members, 1)) {
     name.textContent = (`Name: ${member.name}`);
     address.textContent = (`Address: ${member.address}`);
     phone.textContent = (`Phone #: ${member.phone}`);
     image.setAttribute('src', member.imgurl);
     image.setAttribute('alt', 'Protrait of ${member.name}', member.name);
     image.setAttribute('loading', 'lazy');
     image.setAttribute('width', '340');
     image.setAttribute('height', '440');
	 let linkAnchor = document.createElement('a');
		linkAnchor.setAttribute('href',member.url);
		linkAnchor.setAttribute('target','_blank');
		linkAnchor.textContent = (`${member.name}'s website`);
		url.appendChild(linkAnchor);
	 membership.textContent = (`Membership: ${member.membership}`);

	 card.appendChild(image);
     card.appendChild(name);
     card.appendChild(address);
     card.appendChild(phone);
	 card.appendChild(url);
	 card.appendChild(membership);
	 if (mess !== null) {
	mess.appendChild(card);
	 }
	}
	}
        });
    }
    dispLinks(data.members);
}
getLnks();