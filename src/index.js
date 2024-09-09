function generateGardenTip(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b1a0o1ft9108d6b76f71c2fa34c10e16";
  let context = "You are an expert gardener with a passion for helping people grow small plants, flowers, and vegetables. Your mission is to generate a brief and helpful garden tip using basic HTML. Each tip should be 1-2 sentences long and easy to understand. Keep the language simple and practical. Sign the tip with 'GreenThumb AI' inside a <strong> element at the end of the tip."
  let prompt = `User instructions: Generate a garden tip about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let gardenTipElement = document.querySelector("#garden-tip");
  gardenTipElement.classList.remove("hidden");
  gardenTipElement.innerHTML = `<div class="generating">Generating a garden tip for: ${instructionsInput.value}...</div>`;

  
  axios.get(apiURL).then(displayGardenTip).catch(handleError);
}

function displayGardenTip(response) {
  let gardenTipElement = document.querySelector("#garden-tip");
  let gardenTip = response.data.choices[0].text; 
  gardenTipElement.innerHTML = `<div class="poem">${gardenTip}</div>`;
}

function handleError(error) {
  let gardenTipElement = document.querySelector("#garden-tip");
  gardenTipElement.innerHTML = `<div class="error">Sorry, something went wrong: ${error.message}</div>`;
}

let gardenFormElement = document.querySelector("#garden-tip-generator-form");
gardenFormElement.addEventListener("submit", generateGardenTip);
