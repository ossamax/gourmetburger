gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "top center",
      scrub: true,
    },
  })
  .to(".top_bun", { yPercent: -30 }, 0)
  .to(".meat", { width: "109%" }, 0)
  .to(".bottom_bun", { yPercent: 40 }, 0)
  .to(".pepper_img", { yPercent: -10 }, 0)
  .to(".salt_img", { yPercent: -40 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about_us",
      start: "top top",
      end: "top center",
      scrub: true,
    },
  })
  .to(".salt_img", { yPercent: -30 }, 0);
