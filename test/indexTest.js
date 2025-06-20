const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let dom;
let document;

describe("Handling Events with JavaScript", () => {
  let changeColorButton;
  let resetColorButton;
  let textInput;
  let keyPressDisplay;
  let textInputDisplay;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8",
    );
    dom = new JSDOM(html);
    document = dom.window.document;

    // Make globals available (optional but useful)
    global.document = document;
    global.window = dom.window;

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
    const event = new dom.window.KeyboardEvent("keydown", { key: "A" });
    document.dispatchEvent(event);

    expect(keyPressDisplay.textContent).toContain("A");
  });

  it("should display user input in real-time", () => {
    textInput.value = "Hello";
    const event = new dom.window.Event("input");
    textInput.dispatchEvent(event);

    expect(textInputDisplay.textContent).toContain("Hello");
  });
});
