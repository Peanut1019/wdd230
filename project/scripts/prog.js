let currentYear = document.querySelector('#year');
if (currentYear !== null) {
document.querySelector('#year').textContent = 2023;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
//20.427571204307664, -86.92484252134481
const currentTemp = document.querySelector('#current-temp');
const currentHum = document.querySelector('#current-hum')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const forecast = document.querySelector("#forecast");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.43&lon=-86.92&units=imperial&appid=5497b55e3924af4b31a9a1ea3f35f231';
const fore = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.436&lon=-86.92&units=imperial&cnt=3&appid=5497b55e3924af4b31a9a1ea3f35f231';
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
function displayResults(data) {
    if (currentTemp !== null) {
    currentTemp.innerHTML = `Temp: ${data.main.temp}&deg;F`;
    }
    if (currentHum !== null) {
    currentHum.innerHTML = `Humidity: ${data.main.humidity}%`;
    }
    const iconsrc =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent= `${desc}`;
}
async function apiFetch2() {
    try {
        const response = await fetch(fore);
        if (response.ok) {
            const duty = await response.json();
            // displayForecast(duty);
			console.log(duty);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
function displayForecast(duty) {
	duty.list.forEach((value)=>{
		let ficonsrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;
        let desc = value.weather[0].description;
        let figure = document.createElement('div');
        let forecastIcon = document.createElement('img');
		let foreTemp = document.createElement('p');
		let forecastDay = document.createElement('h4');
		forecastDay.textContent = `Day #${dia}`;
		const temp = value.main.temp;
		foreTemp.textContent = `${temp}F`
        forecastIcon.setAttribute('id', "weather-icon");
        forecastIcon.setAttribute('src', ficonsrc);
        forecastIcon.setAttribute('alt', value.main);
        let foreDesc = document.createElement('figcaption');
        foreDesc.textContent = `${desc}`;
		figure.appendChild(forecastIcon);
		figure.appendChild(foreTemp);
		figure.appendChild(foreDesc);
        if (forecast !== null) {
		forecast.appendChild(figure);
		}
	});
	
}   
apiFetch();
const baseURL = "https://Peanut1019.github.io/wdd230/";
const linksURL = "https://Peanut1019.github.io/wdd230/project/data/pricing.json";
const dollars = document.querySelector('#dollars');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const displayLinks = (prices) => {
    prices.forEach(price => {
    	let row = document.createElement('tr');
		let heading = document.createElement('th');
    	let max = document.createElement('td');
    	let resHalf = document.createElement('td');
		let resFull = document.createElement('td');
        let walkHalf = document.createElement('td');
		let walkFull = document.createElement('td');
     
     heading.textContent = (`${price.vechile}`);
     max.textContent = (`${price.max}`);
	 resHalf.textContent = (`${price.pricing.reserve.half}`);
     resFull.textContent = (`${price.pricing.reserve.full}`);
     walkHalf.textContent = (`${price.pricing.walk.half}`);
     walkFull.textContent = (`${price.pricing.walk.full}`);

	 row.appendChild(heading);
     row.appendChild(max);
     row.appendChild(resHalf);
     row.appendChild(resFull);
	 row.appendChild(walkHalf);
     row.appendChild(walkFull);
	 if (dollars !== null) {
     dollars.appendChild(row);
	 }
        });
    }
    displayLinks(data.prices);
}
getLinks();