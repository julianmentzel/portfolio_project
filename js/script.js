// Back to Top Button

const backToTopButton = document.getElementById('back-to-top');

// SScroll Listener - how & Hide Button Based on ScrollY
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