let currentProjectIndex = 0;
let projects = [];  
let filteredProjects = [];  
function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;  
            openProjectsList();  
        })
        .catch(error => {
            console.error('Error loading projects:', error);
        });
}

function openProjectsList() {
    const projectsListContainer = document.getElementById('projectsList');
    projectsListContainer.innerHTML = '';  

    const selectedCategory = document.getElementById('categoryFilter').value;

    filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    currentProjectIndex = 0;

    filteredProjects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        
        projectItem.innerHTML = `
            <div class="project-thumbnail" onclick="openCarousel(${index})">
                <img src="${project.image}" alt="${project.name}" /> <!-- Use actual thumbnail -->
                <span>${project.name}</span>
            </div>
        `;
        
        projectsListContainer.appendChild(projectItem);
    });
}

function openCarousel(index) {
    currentProjectIndex = index;
    const carouselPopup = document.getElementById('carouselPopup');
    const pdfViewer = document.getElementById('pdfViewer');

    pdfViewer.src = filteredProjects[index].file;
    carouselPopup.style.display = 'block';  
}

function closeCarousel() {
    const carouselPopup = document.getElementById('carouselPopup');
    carouselPopup.style.display = 'none';  
}

function prevProject() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = filteredProjects[currentProjectIndex].file;
    }
}

function nextProject() {
    if (currentProjectIndex < filteredProjects.length - 1) {
        currentProjectIndex++;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = filteredProjects[currentProjectIndex].file;
    }
}

function filterProjects() {
    openProjectsList();  
}

window.onload = function() {
    loadProjects(); 
}


function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function minimizePopup(popupId) {
    const popup = document.getElementById(popupId);
    const content = popup.querySelector('.content');
    const bottomBar = popup.querySelector('.bottom-bar');
    
    const defaultWidth = '700px'; 
    const defaultHeight = '600px'; 

    popup.style.width = '300px'; 
    popup.style.height = '100px'; 
    
    content.style.display = 'block';
    content.style.overflow = 'hidden';  
    bottomBar.style.display = 'none';  
    
    popup.setAttribute('data-state', 'minimized');
    
    const titleBar = popup.querySelector('.title-bar');
    titleBar.style.fontSize = '14px'; 
}

function maximizePopup(popupId) {
    const popup = document.getElementById(popupId);
    const content = popup.querySelector('.content');
    const bottomBar = popup.querySelector('.bottom-bar');
    
    const currentState = popup.getAttribute('data-state');  

    if (currentState === 'minimized') {
        popup.style.width = '700px';  
        popup.style.height = '600px';  
        
        content.style.display ='flex'  
        content.style.overflow = 'auto'; 
        bottomBar.style.display = 'flex'; 

        const titleBar = popup.querySelector('.title-bar');
        titleBar.style.fontSize = '';  

        popup.setAttribute('data-state', 'maximized');
    } else {
        popup.style.width = '100vw';  
        popup.style.height = '100vh'; 
        
        content.style.display = 'flex';  
        content.style.overflow = 'auto';  
        bottomBar.style.display = 'flex';  

        popup.setAttribute('data-state', 'maximized');
    }
}


function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';  
}

let canvas;

function setup() {
    canvas = createCanvas(650, 600);
    canvas.parent("canvas-wrapper");
    background(255);  
}

function mouseDragged() {
    let type = document.querySelector("#pen-pencil").checked ? "pencil" : "brush";
    let size = parseInt(document.querySelector("#pen-size").value);
    let color = document.querySelector("#pen-color").value;

    console.log('Drawing type:', type);  
    console.log('Pen size:', size);      
    console.log('Pen color:', color);   

    fill(color);
    stroke(color);
    strokeWeight(1);  

    if (type === "pencil") {
        line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
        ellipse(mouseX, mouseY, size, size);
    }
}

document.querySelector("#reset-canvas").addEventListener("click", function () {
    background(255);  
});

document.querySelector("#save-canvas").addEventListener("click", function () {
    saveCanvas(canvas, "sketch", "png");
});