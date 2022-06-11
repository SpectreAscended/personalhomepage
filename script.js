'use strict';

const toTop = document.querySelector('.to-top');
const header = document.querySelector('header');

function addToTopBtnHandler() {}
addToTopBtnHandler();

toTop.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

function addToTop() {
  console.log('yo');
  toTop.classList.remove('hidden');
}

// let options = {
//   root: document.querySelector('.nav-wrapper'),
//   rootMargin: '0px',
//   threshold: 1.0,
// };

let observer = new IntersectionObserver(entries => {
  console.log(entries[0].isIntersecting);
  if (!entries[0].isIntersecting) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});

observer.observe(header);
