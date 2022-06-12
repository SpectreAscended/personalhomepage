'use strict';

const toTop = document.querySelector('.to-top');
const header = document.querySelector('header');
const about = document.querySelector('.section__about');

function addToTopBtnHandler() {}
addToTopBtnHandler();

toTop.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

let observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (!entries[0].isIntersecting) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});

observer.observe(header);
