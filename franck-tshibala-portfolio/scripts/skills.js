// skills.js
const skillsData = [
    { name: 'HTML', proficiency: 90, icon: '🌐' },
    { name: 'CSS', proficiency: 85, icon: '🎨' },
    { name: 'JavaScript', proficiency: 80, icon: '💻' },
    { name: 'Python', proficiency: 70, icon: '🐍' },
    // Add more skills
];

export async function fetchSkills() {
    try {
        const skillsContainer = document.getElementById('skills-container');
        
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            
            skillCard.innerHTML = `
                <span class="skill-icon">${skill.icon}</span>
                <h3>${skill.name}</h3>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.proficiency}%"></div>
                </div>
                <p>${skill.proficiency}% Proficiency</p>
            `;
            
            skillsContainer.appendChild(skillCard);
        });
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
}