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
        if (!section.id) return;

        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 250 && bottom > 250) {
            const activeLink = document.querySelector(`.nav-bar a[href="#${section.id}"]`);
            if (!activeLink) return;

            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    });
});

// Scroll Listener - Blur header

const headerBlurEffect = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerBlurEffect.classList.add('scrolled');
    } else {
        headerBlurEffect.classList.remove('scrolled');
    };
});


// Hamburger & Mobile Menu Functionailty

