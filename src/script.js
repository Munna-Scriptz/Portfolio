let scrollTarget = window.scrollY;
let currentScroll = window.scrollY;
let isTicking = false;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  scrollTarget += e.deltaY;
  scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));

  if (!isTicking) {
    isTicking = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });

function smoothScroll() {
  const distance = scrollTarget - currentScroll;
  const delta = distance * 0.1; // easing factor, smaller is smoother/slower

  currentScroll += delta;

  if (Math.abs(distance) < 0.5) {
    currentScroll = scrollTarget; // snap to target when close enough
    isTicking = false;
  } else {
    requestAnimationFrame(smoothScroll);
  }

  window.scrollTo(0, currentScroll);
}


// ----------Vertical Slider--------
