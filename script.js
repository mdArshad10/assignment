console.log("this is for testing");

gsap.to(".row1", {
  x: "-100%",
  scrollTrigger: {
    trigger: "#main",
    scrub: 2,
    start: "1vh top",
    markers: true,
    pin: true,
  },
});

gsap.to(".row2", {
  x: "100%",
  scrollTrigger: {
    trigger: "#main",
    scrub: 2,
    markers: true,
    pin: true,
  },
});
