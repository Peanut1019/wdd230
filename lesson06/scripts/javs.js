const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function alreadyPresent(string) {
    var present = false;
    if(list.hasChildNodes){
        list.childNodes.forEach(
            (node) => {
                if(node.textContent == string + '⌫') {
                    present = true;
                }
            });
    }
    return present;
}
button.addEventListener('click', () => { 
    if (input.value == '' || input.value == '---') {
        input.focus();
    } else if(alreadyPresent(input.value)) {
        input.value = '';
        input.focus();
    } else {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList();
        
        const nodeArray = Array.prototype.slice.call(list.childNodes, 0);
        nodeArray.sort((a,b)=>{
            if(a.textContent > b.textContent) return 1;
            if(a.textContent < b.textContent) return -1;
            return 0;
        });
        nodeArray.forEach((node)=>{
            list.appendChild(node);
        });
        input.focus();
        input.value = '';
    }
 });
 function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '⌫';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
  }
  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }
  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
 chaptersArray.forEach(chapter => {
    displayList(chapter);
 })
