const baseURL = "https://Peanut1019.github.io/wdd230/";
const linksURL = "https://Peanut1019.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    const displayLinks = (lessons) => {
        let headline = document.createElement('h3');
        headline.textContent = 'Learning Activities';
        let list = document.createElement('ol');
        lessons.forEach(lesson => {
            let listItem = document.createElement('li');
            listItem.setAttribute('value',lessons.lesson);
            let listSubItem = document.createElement('div');
            let linkCounter = 0;
            lesson.links.forEach(link => {
                let linkAnchor = document.createElement('a');
                linkAnchor.setAttribute('href',link.url);
                linkAnchor.setAttribute('target','_blank');
                linkAnchor.textContent = `${link.title}`;
                listSubItem.appendChild(linkAnchor);
                linkCounter += 1;
                if(linkCounter < lesson.links.length) {
                    let padText = document.createElement('p');
                    padText.textContent = " | ";
                    listSubItem.appendChild(padText);
                }
            });
            listItem.appendChild(listSubItem);
            list.appendChild(listItem);
        });
        cards.appendChild(headline);
        cards.appendChild(list);
    };
    displayLinks(data.lessons);
}
getLinks();