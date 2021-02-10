const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

const toggleDisplay = element => {
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

// Reset default display when resize (if)
// and don't open menu automatically
// when reduce window size (else)
window.addEventListener('resize', () => {
    if (window.innerWidth >= 750) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

burgerMenu.addEventListener('click', () => {
    toggleDisplay(navLinks);
});