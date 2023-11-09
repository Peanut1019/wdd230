const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophtes);
    displayProphets(data.prophets);
}
getProphetData();
const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
     let card = document.createElement('section');
     let fullName = document.createElement('h2');
     let portrait = document.createElement('img');
     let doB = document.createElement('h3');
     let place = document.createElement('h3');
     
     fullName.textContent = ('${prophet.name}', prophet.lastname);
     doB.textContent = ('Date of Birth: ${prophet.birthdateurl}', prophet.birthdate);
     place.textContent = ('Place of Birth: ${prophet.?}', prophet.birthplace);
     portrait.setAttribute('src', prophet.imageurl);
     portrait.setAttribute('alt', 'Protrait of ${prophet.name} ${prophet.lastname}');
     portrait.setAttribute('loading', 'lazy');
     portrait.setAttribute('width', '340');
     portrait.setAttribute('height', '440');

     card.appendChild(fullName);
     card.appendChild(portrait);
     card.appendChild(doB);
     card.appendChild(place);
     cards.appendChild(card);
    });
  }