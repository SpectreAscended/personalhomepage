'use strict';

const toTop = document.querySelector('.to-top');
const header = document.querySelector('header');
const about = document.querySelector('.section__about');
const nav = document.querySelector('.nav-bar');

function addToTopBtnHandler() {
  toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
}
addToTopBtnHandler();

let observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (!entries[0].isIntersecting) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});

observer.observe(header);

// Nav bar links
nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-bar__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView();
  }
});
