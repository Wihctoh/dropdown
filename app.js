document.querySelector(".active").addEventListener("click", function () {
  let wrapper = document.querySelector(".wrapper");

  if (wrapper.hidden) {
    wrapper.hidden = false;
    document.querySelector(".arrow").style =
      "background-image: url(./assets/Chevron.svg)";
  } else {
    wrapper.hidden = true;
    document.querySelector(".arrow").style =
      "background-image: url(./assets/Chevron-1.svg)";
  }
});
