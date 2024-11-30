const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = ` ${currentYear}`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the second paragraph
document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;
document.body.style.fontFamily = "'Bree Serif', serif";


const urlParams = new URLSearchParams(window.location.search);

document.getElementById('first_name').textContent = urlParams.get('first_name');
document.getElementById('last_name').textContent = urlParams.get('last_name');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('organization_name').textContent = urlParams.get('organization_name');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');      