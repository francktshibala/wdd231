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

document.addEventListener("DOMContentLoaded", () => {


    
    // Lazy Loading Images
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => observer.observe(image));
});

document.addEventListener("DOMContentLoaded", () => {
    // Calendar
    function generateCalendar() {
        const calendarElement = document.getElementById("calendar");
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Day of the week the month starts
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Total days in the month

        // Days of the week
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;
            calendarElement.appendChild(dayElement);
        });

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("day");
            calendarElement.appendChild(emptyCell);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;

            // Highlight today
            if (
                day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
            ) {
                dayElement.classList.add("today");
            }

            calendarElement.appendChild(dayElement);
        }
    }

    generateCalendar();
});


document.addEventListener("DOMContentLoaded", () => {
    try {
        // Visitor Tracking
        const visitorMessage = document.getElementById("visitor-message"); // Ensure this element exists in your HTML
        if (!visitorMessage) {
            console.error("Element with ID 'visitor-message' not found.");
            return;
        }

        const lastVisitKey = "lastVisit"; // Key for localStorage
        const currentTime = Date.now(); // Current time in milliseconds
        const lastVisit = localStorage.getItem(lastVisitKey); // Retrieve last visit from localStorage

        if (!lastVisit) {
            // First visit case
            visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            // Calculate days since last visit
            const lastVisitTime = parseInt(lastVisit, 10); // Convert stored value to integer
            const daysSinceVisit = Math.floor((currentTime - lastVisitTime) / (1000 * 60 * 60 * 24)); // Days difference

            if (daysSinceVisit < 1) {
                visitorMessage.textContent = "Back so soon! Awesome!";
            } else {
                visitorMessage.textContent = `You last visited ${daysSinceVisit} day${daysSinceVisit > 1 ? "s" : ""} ago.`;
            }
        }

        // Store the current visit time
        localStorage.setItem(lastVisitKey, currentTime.toString());
    } catch (error) {
        console.error("An error occurred while processing the last visit message:", error);
    }
});
