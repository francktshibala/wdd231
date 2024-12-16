
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
	

	

	const skillsData = [
		{ name: 'HTML', proficiency: 90, icon: '🌐' },
		{ name: 'CSS', proficiency: 85, icon: '🎨' },
		{ name: 'JavaScript', proficiency: 80, icon: '💻' },
		{ name: 'Python', proficiency: 70, icon: '🐍' },
	];

	const skillsList = document.getElementById('skills-list');

	skillsData.forEach(skill => {
		const li = document.createElement('li');

		li.innerHTML = `
			<span>${skill.icon} ${skill.name} </span>
			<div class="bar">
				<div class="progress" style="width: ${skill.proficiency}%;"></div>
			</div>
		`;

		skillsList.appendChild(li);
	});



	document.getElementById('timestamp').value = new Date().toISOString();

	function openModal(id) {
    document.getElementById(id).style.display = 'block';
	}

	function closeModal(id) {
		document.getElementById(id).style.display = 'none';
	}

