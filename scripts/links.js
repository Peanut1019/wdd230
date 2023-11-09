const baseURL = "https://Peanut1019.github.io/wdd230/";
const linksURL = "https://Peanut1019.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
function displayLinks() {
    weeks.forEach((week) => {
        let card = document.createElement('section');
        let assignment = document.createElement('h3');
        let link = document.createElement('a');
        
        assignment.textContent = ('${week.lesson}-{week.title}', week.lesson, week.title);
        link.setAttribute('href', week.url);
   
        card.appendChild(assignment);
        card.appendChild(link);
        cards.appendChild(card);
       });
     }
getLinks();