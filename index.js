// Homework for next class:
// Today's Kadae
// Make https://www.google.com/ website using only HTML and CSS

let num = 0;
let str = "string";
let arr = [];
let obj = {};
let fn = function () {};

const App = {
  init: function () {
    console.log("Starting the app");

    console.log("Create the components");
    this.components.createElements();
    console.log("Components created");

    // Set content and styling
    this.components.googleContainer.style.border = "solid";
    this.components.googleContainer.style.color = "black";
    this.components.googleContainer.style.width = "500px";
    this.components.googleContainer.style.height = "100px";
    this.components.googleContainer.style.marginLeft = "auto";
    this.components.googleContainer.style.marginRight = "auto";

    this.components.g.innerHTML = "G";
    this.components.g.style.color = "blue";
    this.components.g.style.fontSize = "120px";

    this.components.o1.innerHTML = "o";
    this.components.o1.style.color = "red";
    this.components.o1.style.fontSize = "90px";

    this.components.o2.innerHTML = "o";
    this.components.o2.style.color = "orange";
    this.components.o2.style.fontSize = "90px";

    console.log("Final", this);
  },
  components: {
    createElements: function () {
      // Create the elements

      this.app = document.getElementById("app");

      this.googleContainer = document.createElement("div");
      this.app.appendChild(this.googleContainer);

      this.buttonsContainer = document.createElement("div");
      this.app.appendChild(this.buttonsContainer);

      this.g = document.createElement("span");
      this.googleContainer.appendChild(this.g);

      this.o1 = document.createElement("span");
      this.googleContainer.appendChild(this.o1);

      this.o2 = document.createElement("span");
      this.googleContainer.appendChild(this.o2);
    },
    app: null,
    googleContainer: null,
    buttonsContainer: null,
    g: null,
    o1: null,
    o2: null,
    searchInput: null,
    searchBtn: null,
    feelingLuckyBtn: null,
  },
};

App.init();
