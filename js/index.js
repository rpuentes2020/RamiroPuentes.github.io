document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    drag: "free",
    perMove: 2,
    speed: 4500,
    interval: 8000,
    autoplay: true,
    focus: 0,
    width: "100%",
    gap: "1rem",
    trimSpace: false,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  });

  splide.mount();

  //   let s = document.getElementById("autoplay");
  //   const splide = new Splide(s, {
  //     type: "loop",
  //     // rewind: true,
  //     // drag: "free",
  //     focus: "center",
  //     perPage: 4,
  //     cloneStatus: false,
  //     autoScroll: {
  //       speed: 6,
  //     },
  //   });

  //   splide.mount(window.splide.Extensions);
});
