document.getElementById('timestamp').value = new Date().toISOString();

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

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


       