gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "top top",
      scrub: true,
    },
  })
  .to(".top_bun", { yPercent: -20 }, 0)
  .to(".meat", { width: "110%" }, 0)
  .to(".bottom_bun", { yPercent: 30 }, 0);
