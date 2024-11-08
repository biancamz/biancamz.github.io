const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images= ['/img/carousel1.png', '/img/carousel2.png', '/img/carousel3.png', '/img/carousel4.png', '/img/carousel5.png'];

/* Declaring the alternative text for each image file */
const alt= {
    '/img/carousel1.png' : 'Carousel seahorse',
    '/img/carousel2.png' : 'Carousel Horse',
    '/img/carousel3.png' : 'Carousel zebra',
    '/img/carousel4.png' : 'Carousel rabbit',
    '/img/carousel5.png' : 'Carousel pink horse'

}
/* Looping through images */
for (let i = 0; i<images.length; i++){

const newImage = document.createElement('img');
newImage.setAttribute('src', '/img/' + images[i]);
newImage.setAttribute('alt', alt[images[i]]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e=>{
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
 const btnClass= btn.getAttribute('class');
 if (btnClass == "dark"){ 
    btn.setAttribute('class','light');
    btn.textContent = "lighten";
    overlay.style.backgroundColor= "RGB(0 0 0/50%)"; 
 } else {
    btn.setAttribute('class','dark')
    btn.textContent = "Darken";
    overlay.style.backgroundColor= "RGB(0 0 0)"
 };
})