import '../css/main.css';

const sections = document.querySelectorAll('section');
window.onscroll = () => {
  const scrollPos =
    document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((s) => {
    if (s.offsetTop <= scrollPos + 300) {
      document
        .querySelector('a.text-white.js-scroll-trigger')
        ?.classList.remove('text-white');
      document.querySelector(`a[href*=${s.id}]`).classList.add('text-white');
    }
  });
};

const links = document.querySelectorAll('a.js-scroll-trigger');

links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('toggle-nav').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  const hide = navLinks.classList.toggle('hidden');
  const menuIcon = document.getElementById('menu-icon');
  const crossIcon = document.getElementById('cross-icon');

  if (hide) {
    menuIcon.classList.remove('hidden');
    crossIcon.classList.add('hidden');
  } else {
    menuIcon.classList.add('hidden');
    crossIcon.classList.remove('hidden');
  }
});
