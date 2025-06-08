// app.js

// Change background color when "Change Background Color" button is clicked
document.getElementById("changeColorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

// Reset background color when "Reset Background Color" button is clicked
document.getElementById("resetColorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});

// Display the key pressed by the user in the #keyPressDisplay paragraph
document.addEventListener("keydown", (event) => {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  keyPressDisplay.textContent = `You pressed: ${event.key}`;
});

// Display real-time user input in the #textInputDisplay paragraph
document.getElementById("textInput").addEventListener("input", (event) => {
  const textInputDisplay = document.getElementById("textInputDisplay");
  textInputDisplay.textContent = event.target.value;
});
