function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem-location");
  poemElement.innerHTML = "about the rain, the fog, the dew";
}
let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
