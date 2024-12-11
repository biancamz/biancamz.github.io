let currentProjectIndex = 0;
let projects = [];  // Initially empty, will be filled with data from the JSON file
let filteredProjects = [];  // Array to store filtered projects based on category

// Fetch projects data from the JSON file
function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;  // Store the JSON data in the projects array
            openProjectsList();  // Once the data is loaded, populate the projects list
        })
        .catch(error => {
            console.error('Error loading projects:', error);
        });
}

// Open the Projects List and Filter by Category
function openProjectsList() {
    const projectsListContainer = document.getElementById('projectsList');
    projectsListContainer.innerHTML = '';  // Clear the container

    // Get the selected category from the filter dropdown
    const selectedCategory = document.getElementById('categoryFilter').value;

    // Filter projects based on the selected category
    filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // Reset current project index when filtering
    currentProjectIndex = 0;

    // Create project items dynamically
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

// Open the carousel when a project thumbnail is clicked
function openCarousel(index) {
    currentProjectIndex = index;
    const carouselPopup = document.getElementById('carouselPopup');
    const pdfViewer = document.getElementById('pdfViewer');

    // Load the selected PDF into the iframe (embed)
    pdfViewer.src = filteredProjects[index].file;
    carouselPopup.style.display = 'block';  // Show the carousel popup
}

// Close the carousel
function closeCarousel() {
    const carouselPopup = document.getElementById('carouselPopup');
    carouselPopup.style.display = 'none';  // Close the carousel popup
}

// Go to the previous project in the carousel
function prevProject() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = filteredProjects[currentProjectIndex].file;
    }
}

// Go to the next project in the carousel
function nextProject() {
    if (currentProjectIndex < filteredProjects.length - 1) {
        currentProjectIndex++;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = filteredProjects[currentProjectIndex].file;
    }
}

// Filter projects based on category selection
function filterProjects() {
    openProjectsList();  // Reopen the filtered list after category selection
}

// Call loadProjects() when the page loads to fetch the JSON data
window.onload = function() {
    loadProjects();  // Load the projects from the JSON file
}




// Function to open a specific popup by its ID
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

// Function to close a specific popup by its ID
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Function to minimize a popup
function minimizePopup(popupId) {
    const popup = document.getElementById(popupId);
    const content = popup.querySelector('.content');
    const bottomBar = popup.querySelector('.bottom-bar');
    
    // Save the current size to restore later (if needed)
    const defaultWidth = '700px'; // Default width before maximizing
    const defaultHeight = '600px'; // Default height before maximizing

    // Set the popup size to a smaller minimized state
    popup.style.width = '300px'; // Minimized width
    popup.style.height = '100px'; // Minimized height
    
    // Ensure content remains visible but compact
    content.style.display = 'block';
    content.style.overflow = 'hidden';  // Hide any overflowing content
    bottomBar.style.display = 'none';   // Optionally hide bottom bar when minimized
    
    // Update the state to minimized
    popup.setAttribute('data-state', 'minimized');
    
    // Optionally, adjust title size or other UI elements for minimized state
    const titleBar = popup.querySelector('.title-bar');
    titleBar.style.fontSize = '14px'; // Smaller title size when minimized
}

// Function to maximize a popup
function maximizePopup(popupId) {
    const popup = document.getElementById(popupId);
    const content = popup.querySelector('.content');
    const bottomBar = popup.querySelector('.bottom-bar');
    
    const currentState = popup.getAttribute('data-state');  // Check current state of popup

    if (currentState === 'minimized') {
        // Restore to normal size from minimized state
        popup.style.width = '700px';  // Normal width
        popup.style.height = '600px';  // Normal height
        
        content.style.display ='flex'  // Show content
        content.style.overflow = 'auto'; // Allow content overflow if needed
        bottomBar.style.display = 'flex'; // Show bottom bar

        // Reset the title size
        const titleBar = popup.querySelector('.title-bar');
        titleBar.style.fontSize = '';  // Reset to default title size

        // Update state to maximized
        popup.setAttribute('data-state', 'maximized');
    } else {
        // Maximize the popup to fullscreen or predefined size
        popup.style.width = '100vw';  // Fullscreen width
        popup.style.height = '100vh';  // Fullscreen height
        
        content.style.display = 'flex';  // Ensure content is displayed
        content.style.overflow = 'auto';  // Allow content overflow
        bottomBar.style.display = 'flex';  // Ensure bottom bar is visible

        // Update state to maximized
        popup.setAttribute('data-state', 'maximized');
    }
}

// Function to close the popup (if needed)
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';  // Close the popup
}

let canvas;

function setup() {
    canvas = createCanvas(650, 600);
    canvas.parent("canvas-wrapper");
    background(255);  // Initial background (white)
}

function mouseDragged() {
    let type = _("#pen-pencil").checked ? "pencil" : "brush";
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;

    console.log('Drawing type:', type);  // Check tool selected
    console.log('Pen size:', size);      // Check size input
    console.log('Pen color:', color);    // Check color input

    fill(color);
    stroke(color);
    strokeWeight(2);  // Ensure strokes are visible

    if (type === "pencil") {
        line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
        ellipse(mouseX, mouseY, size, size);
    }
}

// Reset canvas on button click
_("#reset-canvas").addEventListener("click", function () {
    background(255);  // Reset the canvas (clear it)
});

// Save canvas on button click
_("#save-canvas").addEventListener("click", function () {
    saveCanvas(canvas, "sketch", "png");
});
