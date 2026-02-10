const reveals = document.querySelectorAll(
  '.reveal-left, .reveal-right, .reveal-zoom, .reveal-fade'
);

function animateOnScroll() {
  const trigger = window.innerHeight - 120;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
