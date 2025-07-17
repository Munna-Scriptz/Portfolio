gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
  content: "#scrollsmoother-container",
  smooth: 3,
  normalizeScroll: true,
  ignoreMobileResize: true,
	effects: true,
  //preventDefault: true,
  //ease: 'power4.out',
  //smoothTouch: 0.1, 
});

// ----------Box Width--------
gsap.registerPlugin(ScrollTrigger);

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "center ", 
  ease: "none"
});