'use strict';

const toTop = document.querySelector('.to-top');
const header = document.querySelector('header');
const about = document.querySelector('.section__about');
const nav = document.querySelector('.nav-bar');
const headingSlide = document.querySelectorAll('.heading-slide');

// Scroll to top handler
function addToTopBtnHandler() {
  toTop.addEventListener('click', () => window.scrollTo(0, 0));
}
addToTopBtnHandler();

const toTopObserver = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});

toTopObserver.observe(header);

// Nav bar links
nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-bar__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView();
  }
});

headingSlide.forEach(heading => {
  const headingSlideObserver = new IntersectionObserver(
    entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        heading.classList.add('slide-in');
        heading.style.opacity = 1;
      }
      // else headingAbout.classList.remove('slide-in');
    },
    {
      root: null,
      threshold: 1,
    }
  );

  headingSlideObserver.observe(heading);
});
