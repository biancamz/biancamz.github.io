let currentProjectIndex = 0;
let projects = [];  // Initially empty, will be filled with data from the JSON file

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

    // Filter projects based on the selected category
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // Create project items dynamically
    filteredProjects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <div class="project-thumbnail" onclick="openCarousel(${index})">
                <img src="thumbnail.jpg" alt="${project.title}" /> <!-- Replace with actual thumbnail -->
                <span>${project.title}</span>
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

    // Load the selected PDF into the iframe
    pdfViewer.src = projects[index].file;
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
        pdfViewer.src = projects[currentProjectIndex].file;
    }
}

// Go to the next project in the carousel
function nextProject() {
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = projects[currentProjectIndex].file;
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
