// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});




const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient...',
        technology: ['Python'],
        completed: true // Mark this as completed to test
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Mark this as completed to test
    }
];

// Function to display courses based on the selected filter
function displayCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous course list

    // Filter courses based on the selected filter
    const filteredCourses = courses.filter(course => {
        if (filter === 'all') return true;
        return course.subject === filter;
    });

    // Calculate total credits using reduce
const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    
// Update total credits display
document.getElementById('total-credits').innerText = `Total Credits: ${totalCredits}`;


    // Display the courses
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.classList.add(course.completed ? 'completed' : 'incomplete');

        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        
        courseList.appendChild(courseDiv);
    });
}

// Initial display of all courses
displayCourses('all');




const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = ` ${currentYear}`;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the second paragraph
document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;
document.body.style.fontFamily = "'Bree Serif', serif";


