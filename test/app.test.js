const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Handling Events with JavaScript", () => {
  let dom, document;
  let changeColorButton,
    resetColorButton,
    textInput,
    keyPressDisplay,
    textInputDisplay;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8",
    );
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;

    // Make globals available for event constructors etc.
    global.window = dom.window;
    global.document = document;

    // Require your app code to attach event listeners
    require("../app.js");

    changeColorButton = document.getElementById("changeColorButton");
    resetColorButton = document.getElementById("resetColorButton");
    textInput = document.getElementById("textInput");
    keyPressDisplay = document.getElementById("keyPressDisplay");
    textInputDisplay = document.getElementById("textInputDisplay");
  });

  it("should select the changeColorButton element", () => {
    expect(changeColorButton).not.toBeNull();
  });

  it("should select the resetColorButton element", () => {
    expect(resetColorButton).not.toBeNull();
  });

  it("should select the textInput element", () => {
    expect(textInput).not.toBeNull();
  });

  it("should display the key pressed by the user", () => {
    const event = new window.KeyboardEvent("keydown", { key: "A" });
    document.dispatchEvent(event);

    expect(keyPressDisplay.textContent).toContain("A");
  });

  it("should display user input in real-time", () => {
    textInput.value = "Hello";
    const event = new window.Event("input");
    textInput.dispatchEvent(event);

    expect(textInputDisplay.textContent).toContain("Hello");
  });
});
