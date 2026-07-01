const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Mouse click toggle
hamburger.addEventListener('click', function() {
navLinks.classList.toggle('active');
    
// Update aria-expanded for accessibility
const expanded = navLinks.classList.contains('active');
hamburger.setAttribute('aria-expanded', expanded);
});

// Keyboard support - open menu with Enter or Space key
hamburger.addEventListener('keydown', function(e) {
if (e.key === 'Enter' || e.key === ' ') {
navLinks.classList.toggle('active');
const expanded = navLinks.classList.contains('active');
hamburger.setAttribute('aria-expanded', expanded);
}
});