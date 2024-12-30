function generatePoem(event) {
  event.preventDefault();

  alert("Generateing poem");
}
let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
