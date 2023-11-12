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
	let lastOpend =  document.querySelector('#time');
	if (lastOpend !== null) {
	document.querySelector('#time').textContent = new Date().toDateString();
	}
	const gridbutton = document.querySelector("#grid");
	const listbutton = document.querySelector("#list");
	const display = document.querySelector("article");
	
	// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
	
	gridbutton.addEventListener("click", () => {
		// example using arrow function
		display.classList.add("grid");
		display.classList.remove("list");
	});
	
	listbutton.addEventListener("click", showList); // example using defined function
	
	function showList() {
		display.classList.add("list");
		display.classList.remove("grid");
	}

const baseURL = "https://Peanut1019.github.io/wdd230/";
const linksURL = "https://Peanut1019.github.io/wdd230/chamber/data/members.json";
const disc = document.querySelector('#disc');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const displayLinks = (members) => {
    members.forEach(member => {
    	let card = document.createElement('section');
    	let name = document.createElement('h2');
    	let image = document.createElement('img');
    	let address = document.createElement('h3');
    	let phone = document.createElement('h3');
		let url = document.createElement('a');
		let membership = document.createElement('h3');
     
     name.textContent = ('Name: ${member.name}', member.name);
     address.textContent = ('Address: ${member.address}', member.address);
     phone.textContent = ('Phone #: ${member.phone}', member.phone);
	 url.setAttribute('href', member.url);
     image.setAttribute('src', member.imgurl);
     image.setAttribute('alt', 'Protrait of ${member.name}', member.name);
     image.setAttribute('loading', 'lazy');
     image.setAttribute('width', '340');
     image.setAttribute('height', '440');
	 membership.textContent = ('Membership: ${member.membership}', member.membership);

     card.appendChild(name);
     card.appendChild(image);
     card.appendChild(address);
     card.appendChild(phone);
	 card.appendChild(url);
	 card.appendChild(membership);
     disc.appendChild(card);
        });
    };
    displayLinks(data.members);
}
getLinks();