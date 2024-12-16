// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = ` ${currentYear}`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the second paragraph
document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;
document.body.style.fontFamily = "'Bree Serif', serif";


// projects.js
async function fetchProjectsData() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Function to create project cards
async function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    const projectsData = await fetchProjectsData();
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.name}" loading="lazy">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank">GitHub</a>
                <a href="${project.liveLink}" target="_blank">Live Site</a>
                <button class="view-details" data-project-id="${project.id}">View Details</button>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });

    // Add event listeners for modal
    setupProjectModals(projectsData);
}

// Function to set up project modal interactions
function setupProjectModals(projectsData) {
    const modal = document.getElementById('project-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.querySelector('.close-modal');

    // Event delegation for project details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = parseInt(button.getAttribute('data-project-id'));
            const project = projectsData.find(p => p.id === projectId);
            
            // Populate modal with project details
            modalDetails.innerHTML = `
                <h2>${project.name}</h2>
                <img src="${project.imageUrl}" alt="${project.name}">
                <h3>Overview</h3>
                <p>${project.detailed.overview}</p>
                
                <h3>Key Features</h3>
                <ul>
                    ${project.detailed.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3>Development Challenges</h3>
                <ul>
                    ${project.detailed.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
                
                <div class="modal-project-links">
                    <a href="${project.githubLink}" target="_blank">View on GitHub</a>
                    <a href="${project.liveLink}" target="_blank">Live Website</a>
                </div>
            `;
            
            // Show the modal
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', createProjectCards);