$(document).foundation();
console.log("Foundation is initialized.");

document.addEventListener("DOMContentLoaded", () => {
  const fans = document.querySelector(".js-fans-carousel");
  if (fans) {
    // eslint-disable-next-line no-undef
    new Flickity(fans, {
      cellAlign: "left",
      contain: true,
      pageDots: false,
      prevNextButtons: false,
      groupCells: true
    });
  }
});
