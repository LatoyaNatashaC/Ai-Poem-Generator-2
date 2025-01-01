function generatePoem(event) {
  event.preventDefault();

  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  new Typewriter("#poem-location", {
    strings:
      "A tree is beautiful, but what's more, it has a right to life; like water, the sun, and the stars, it is essential. Life on earth is inconceivable without trees.",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
