const apiEndpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=singleLinks to an external site.';

function init() {
const jokeParagraph = document.getElementsByClassName('joke');
const buttonPress = document.getElementsByClassName('buttonPress')};

buttonPress.addEventListener('click',() => {
    console.log('Button clicked!');
    getJoke(joke);
});


function getJoke(jokeParagraph) {
    fetch(apiEndpoint)
    .then(response => response.json())
    
    .then(data => {
        console.log(data.joke); 
        displayRes(data.joke, jokeParagraph); 
    })
};

function displayRes(joke) {
    jokeParagraph.textContent = joke; 
}