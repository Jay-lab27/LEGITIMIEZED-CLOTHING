
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.navbar');


document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.cart-count').textContent = cart.length;
});


burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});