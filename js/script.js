// Back to Top Button

const backToTopButton = document.getElementById('back-to-top');

// Show & Hide Button Based on ScrollY
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = 1;
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = 0;
        backToTopButton.style.visibility = 'hidden';
    }
});