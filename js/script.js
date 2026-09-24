// Back to Top Button

const backToTopButton = document.getElementById('back-to-top');

// Scroll Listener - how & Hide Button Based on ScrollY
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = 1;
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = 0;
        backToTopButton.style.visibility = 'hidden';
    }
});

// Click Listener - Bump user up when button is clicked

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});

// Scroll Listener - Highlight nav links

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-bar a');


window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 250 && section.getBoundingClientRect().bottom > 250) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            activeLink.classList.add('active')
        };
    })
});