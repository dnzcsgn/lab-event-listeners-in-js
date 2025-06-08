// Helpers for setting up the testing environment
const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("src/index.html", "utf8");

const dom = new JSDOM(html);
const document = dom.window.document;

global.document = document;

module.exports = {
  document,
};
