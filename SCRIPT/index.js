// Select elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.navbar');
const profileIcon = document.querySelector('.profile-icon'); // Profile icon selector
const cartIcon = document.querySelector('.cart-icon'); // Cart icon selector

// Burger menu toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');

    // Show profile and cart icons when menu is active
    if (navLinks.classList.contains('active')) {
        profileIcon.style.display = 'block';
        cartIcon.style.display = 'block';
    } else {
        profileIcon.style.display = 'none';
        cartIcon.style.display = 'none';
    }
});

// Dropdown functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth > 768) return; // Exit if not mobile

        if (e.target === link || link.contains(e.target)) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));

        // Hide icons when closing menu
        profileIcon.style.display = 'none';
        cartIcon.style.display = 'none';
    }
});
