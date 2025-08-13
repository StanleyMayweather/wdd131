const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');

let chaptersArray = getChapterList() || [];

// Load stored chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add button click
button.addEventListener('click', addChapter);

// Allow pressing Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addChapter();
  }
});

function addChapter() {
  let chapterText = input.value.trim();

  if (chapterText === '') {
    showError("Please enter a book and chapter.");
    return;
  }

  displayList(chapterText);
  chaptersArray.push(chapterText);
  setChapterList();

  input.value = '';
  input.focus();
  clearError();
}

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

function showError(message) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = '';
}
