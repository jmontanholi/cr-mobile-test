const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('menuCloseBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeBtn.classList.remove('d-none');
  mobileNav.classList.remove('d-none');
});

closeBtn.addEventListener('click', () => {
  menuBtn.classList.remove('d-none');
  closeBtn.classList.add('d-none');
  mobileNav.classList.add('d-none');
});

// mobileLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     menuBtn.classList.remove('d-none');
//     closeBtn.classList.add('d-none');
//     mobileNav.classList.add('d-none');
//   });
// });
