// OpenWeatherMap API call for weather data
const apiKey = '929dbcee389e0286ed4b3c3028a6e246'; // Replace with your OpenWeatherMap API key//
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=San+Miguel,SV&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=San+Miguel,SV&units=imperial&appid=${apiKey}`;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecast = forecastData.list.slice(0, 3).map(f => {
            return {
                date: f.dt_txt,
                temp: f.main.temp
            };
        });

        const weatherInfo = `
            <p>Temperature: ${temperature}°F</p>
            <p>Description: ${description}</p>
            <h3>3-Day Forecast:</h3>
            <ul>
                ${forecast.map(f => `<li>${f.date}: ${f.temp}°F</li>`).join('')}
            </ul>
        `;

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('weather-info').innerHTML = '<p>Failed to load weather data.</p>';
    }
}

fetchWeather();

//Randomly select spotlight members from JSON
const members = [
    { 
        name: 'Mountainview Tech Solutions', 
        logo: 'images/mountainviewtech.png', 
        phone: '(801) 555-1234', 
        address: '123 Innovation Drive, Sandy, UT 84070', 
        website: 'https://www.mountainviewtech.com', 
        level: 'gold' 
    },
    { 
        name: 'Summit Fitness Center', 
        logo: 'images/summitfitness.png', 
        phone: '(801) 555-7532', 
        address: '890 Fitness Loop, Sandy, UT 84070', 
        website: 'https://www.summitfitness.com', 
        level: 'silver' 
    },
    { 
        name: 'Helping Hands Food Bank', 
        logo: 'images/helpinghands.jpeg', 
        phone: '(801) 555-9988', 
        address: '321 Community Drive, Sandy, UT 84070', 
        website: 'https://www.helpinghandsutah.org', 
        level: 'gold' 
    },
    { 
        name: 'Sandy Arts Council', 
        logo: 'images/sandyartscouncil.jpeg', 
        phone: '(801) 555-1357', 
        address: '654 Creative Way, Sandy, UT 84070', 
        website: 'https://www.sandyarts.org', 
        level: 'silver' 
    },
    { 
        name: 'Bright Futures Preschool', 
        logo: 'images/brightfutures.jpeg', 
        phone: '(801) 555-8642', 
        address: '987 Learning Lane, Sandy, UT 84092', 
        website: 'https://www.brightfuturesutah.com', 
        level: 'gold' 
    },
    { 
        name: 'QuickFix Auto Repair', 
        logo: 'images/quickfixauto.jpeg', 
        phone: '(801) 555-3321', 
        address: '741 Car Care Circle, Sandy, UT 84070', 
        website: 'https://www.quickfixauto.com', 
        level: 'silver' 
    },
    { 
        name: 'GreenLeaf Landscaping', 
        logo: 'images/greenleaflandscape.jpeg', 
        phone: '(801) 555-4428', 
        address: '159 Garden Path, Sandy, UT 84092', 
        website: 'https://www.greenleaflandscape.com', 
        level: 'gold' 
    }
];


function displaySpotlights() {
    const spotlightList = document.getElementById('spotlight-list');
    const spotlightMembers = members.filter(m => m.level === 'gold' || m.level === 'silver');
    const randomSpotlights = [];

    while (randomSpotlights.length < 3) {
        const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
        if (!randomSpotlights.includes(spotlightMembers[randomIndex])) {
            randomSpotlights.push(spotlightMembers[randomIndex]);
        }
    }

    randomSpotlights.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" style="width: 100px;">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.level}</p>
        `;
        spotlightList.appendChild(card);
    });
}

displaySpotlights();

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



