function generateGardenTip(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b1a0o1ft9108d6b76f71c2fa34c10e16";
  let context = 
    "You are an expert gardener with a passion for helping people grow small plants, flowers, and vegetables. Your mission is to generate a brief and helpful garden tip using basic HTML. Each tip should be 1-2 sentences long and easy to understand. Keep the language simple and practical. Sign the tip with 'GreenThumb AI' inside a <strong> element at the end of the tip.";
  let prompt = `User instructions: Generate a Garden tip about plants ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let gardenTipElement = document.querySelector("#Garden-Tip");
  gardenTipElementElement.classList.remove("hidden");
  gardenTipElementElement.innerHTML = `<div class="generating"> Generating a Gadern tip ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayGardenTip);
}

let gardenFormElement = document.querySelector("#Gadern-tip-generator-form");
gardenFormElement.addEventListener("submit", generateGardenTip);