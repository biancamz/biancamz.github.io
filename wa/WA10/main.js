const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

console.log("logged");

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText= "The sound of midnight filled the air at 90 degrees fahrenheit, so :insertX:, decided it was time to go to bed. As they tucked themselves into bed :insertY:, all 5,000 pounds of it crumbled, then :insertZ:. Bob went to fix it, and crumbled too — :insertX: woke up realizing it had all been a bad dream.";

var insertX = ['Willy wonka', 'Santa Clause', 'Tooth fairy'];
var insertY = ['the pillow', 'the chocolate factory', 'a chimney'];
var insertZ = ['disappeared into the dark forrest', 'get up and bounced away', 'flew away on a carpet'];


randomize.addEventListener('click', result);

function result() {

var newStory= storyText;
var xItem = randomValueFromArray (insertX);
var yItem = randomValueFromArray (insertY);
var zItem = randomValueFromArray (insertZ);

newStory= newStory.replace(':insertX:', xItem);
newStory= newStory.replace(':insertX:', xItem);
newStory= newStory.replace(':insertY:', yItem);
newStory= newStory.replace(':insertZ:', zItem);

  if(customName.value !== ''){
    var name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286)+ ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit',temperature); 
    newStory = newStory.replaceAll('300 pounds',weight);
  }

  
story.textContent = newStory;
story.style.visibility = 'visible';
}