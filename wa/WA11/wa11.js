const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images= ['/img/carousel2.png', '/img/carousel1.png', '/img/carousel3.png', '/img/carousel4.png', '/img/carousel5.png'];

/* Declaring the alternative text for each image file */
const alt= {
    '/img/carousel2.png' : 'Carousel horse',
    '/img/carousel1.png' : 'Carousel seahorse',
    '/img/carousel3.png' : 'Carousel zebra',
    '/img/carousel4.png' : 'Carousel rabbit',
    '/img/carousel5.png' : 'Carousel pink horse'

}
/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);  
    newImage.setAttribute('alt', alt[images[i]]);
    thumbBar.appendChild(newImage);
newImage.addEventListener('click', e=>{
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */


overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
btn.textContent = "Darken"; 
btn.setAttribute('class', 'dark'); 
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class'); 
    
    if (btnClass === "dark") { 
        btn.setAttribute('class', 'light');  
        btn.textContent = "Lighten";  
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
        
    } else {
        btn.setAttribute('class', 'dark');  
        btn.textContent = "Darken";  
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    }
});