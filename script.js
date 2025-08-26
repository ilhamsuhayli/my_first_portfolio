// Menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close navbar on scroll
window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};