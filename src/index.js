function displayPoem(response) {
  new Typewriter("#poem-location", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4.0,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let prompt = `User instructions: generate a poem about ${userInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic html. Do not show the words html. Follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
