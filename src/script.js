

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
 //loader animation
    document.querySelector("html").classList.add("scroll-hide");
    function updateProgressBar(progress) {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = progress + "%";
    }

    function simulateProgress() {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        updateProgressBar(progress);
        if (progress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            const loader_text = document.querySelectorAll('.loader-text h3');
            loader_text.forEach((text, index) => {
              const loader_single_text = new SplitType(text, {
                types: 'chars'
              });
              gsap.from(loader_single_text.chars, {
                opacity: 0,
                x: 50,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.8
              });
            })

            gsap.to(".progress-wrapper", 1.2, {
              scale: 1.5,
              opacity: 0,
              display: "none",
              ease: "power3.inOut",
              delay: 0.2
            });

            gsap.to(".revealer", 2.2, {
              top: "0%",
              ease: "power3.inOut",
              delay: 1
            });

            gsap.to(".loader", 1, {
              yPercent: -100,
              ease: "power3.inOut",
              delay: 1.9
            });
            setTimeout(() => {
              document.querySelector("html").classList.remove("scroll-hide");
            }, 2600);

          }, 500);
        }
      }, 0);
    }

    window.addEventListener('load', function () {
      simulateProgress();
    });

// ---------Animated Cursor --------

(function () {

      const link = document.querySelectorAll('nav > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();


