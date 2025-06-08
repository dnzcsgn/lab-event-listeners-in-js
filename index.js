function changeBackgroundColor() {
  document.body.style.backgroundColor = "blue";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  display.textContent = `You pressed: ${event.key}`;
}

function displayUserInput() {
  const input = document.getElementById("textInput").value;
  const display = document.getElementById("realTimeDisplay");
  display.textContent = `You typed: ${input}`;
}

// Attach event listeners

document
  .getElementById("changeColorButton")
  .addEventListener("click", changeBackgroundColor);

document
  .getElementById("resetColorButton")
  .addEventListener("dblclick", resetBackgroundColor);

document.addEventListener("keydown", displayKeyPress);

document
  .getElementById("textInput")
  .addEventListener("input", displayUserInput);
