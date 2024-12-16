export function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });
}