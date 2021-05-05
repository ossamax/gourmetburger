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

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".menu_header",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(".frises", { rotateZ: 120 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main_dish",
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: true,
    },
  })
  .to(".main_dish", { rotateZ: 120 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main_dish",
      start: "top top",
      end: "center center",
      scrub: true,
    },
  })
  .to(".salade", { rotateZ: -120 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".salade",
      start: "top top",
      end: "center center",
      scrub: true,
    },
  })
  .to(".dessert", { rotateZ: 120 }, 0);
