// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


async function loadMembers() {
    const response = await fetch('./data/members.json');
    const members = await response.json();
  
    const directory = document.querySelector('.directory');
    directory.innerHTML = members.map(member => `
      <article class="card">
        <img src="./images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </article>
    `).join('');
  }
  
  document.getElementById('grid-view').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('grid-view');
    document.querySelector('.directory').classList.remove('list-view');
  });
  
  document.getElementById('list-view').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('list-view');
    document.querySelector('.directory').classList.remove('grid-view');
  });
  
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
  
  loadMembers();

