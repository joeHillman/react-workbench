const favCharacterForm = document.querySelector("#favorite-character")
const characterSelectControl = document.querySelector("#character-select");

const eyeColorSet = new Set();
let selectedCharacter = null;

const populateCharacters = (arr) => {
  const optionList = [];
  // not using the array again so forEach is appropriate...
  arr.forEach((item) => {
    let thisEl = document.createElement("option");
    thisEl.setAttribute("value", item.name);
    thisEl.setAttribute("data-eyes", item.eye_color);
    thisEl.innerHTML = item.name;
    characterSelectControl.append(thisEl);
  })
}

const selectCharacter = (element) => {
  if(CSS.supports("background-color", `${element.dataset.eyes}`)){
    favCharacterForm.style.backgroundColor = element.dataset.eyes
  } else {
    favCharacterForm.style.backgroundColor = "#eee"
  }
  selectedCharacter = element.value;
}

const getCharacters = (pages) => {
  // could map over and add 1 to each and use the
  // item but that leaves us with an additional array, the index + 1 will suffice here
  const mapper = Array(pages).fill(0).forEach((item, index) => {
    fetch(`https://swapi.co/api/people/?page=${index+1}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        populateCharacters(myJson.results);
      });
  });
}

getCharacters(6);

const submit = (selectedCharacter) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My Selected Character',
      body: `${selectedCharacter}`,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((json) => {console.log(json); document.body.classList.add("submission-successful"); document.body.classList.remove("submission-failed")})
  .catch((response) => {document.body.classList.add("submission-failed"); document.body.classList.remove("submission-successful")})
}

const closeSuccessMessage = () => {
  document.body.classList.remove("submission-successful");
}

const closeErrorMessage = () => {
  document.body.classList.remove("submission-failed");
}
