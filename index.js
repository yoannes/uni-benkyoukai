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
    this.components.googleContainer.style.color = "white";
    this.components.googleContainer.style.width = "350px";
    this.components.googleContainer.style.height = "150px";
    this.components.googleContainer.style.marginTop = "150px";
    this.components.googleContainer.style.marginLeft = "auto";
    this.components.googleContainer.style.marginRight = "auto";

    this.components.searchInput.style.width = "400px";
    this.components.searchInput.style.height = "30px";
    this.components.searchInput.style.marginTop = "50px";
    this.components.searchInput.style.marginLeft = "auto";
    this.components.searchInput.style.marginRight = "auto";
    this.components.searchInput.style.display = "block";


    this.components.buttonsContainer.style.border = "solid";
    this.components.buttonsContainer.style.color = "white";
    this.components.buttonsContainer.style.width = "210px";
    this.components.buttonsContainer.style.height = "30px";
    this.components.buttonsContainer.style.marginTop = "50px";
    this.components.buttonsContainer.style.marginLeft = "auto";
    this.components.buttonsContainer.style.marginRight = "auto";


    this.components.g.innerHTML = "G";
    this.components.g.style.color = "blue";
    this.components.g.style.fontSize = "120px";

    this.components.o.innerHTML = "o";
    this.components.o.style.color = "red";
    this.components.o.style.fontSize = "90px";

    this.components.o2.innerHTML = "o";
    this.components.o2.style.color = "orange";
    this.components.o2.style.fontSize = "90px";

    this.components.g2.innerHTML = "g";
    this.components.g2.style.color = "blue";
    this.components.g2.style.fontSize = "90px";

    this.components.l.innerHTML = "l";
    this.components.l.style.color = "green";
    this.components.l.style.fontSize = "90px";

    this.components.e.innerHTML = "e";
    this.components.e.style.color = "red";
    this.components.e.style.fontSize = "90px";

    
    this.components.searchBtn.innerHTML = "Google 検索";
    this.components.searchBtn.style.color = "black";
    this.components.searchBtn.style.fontSize = "10px";
    this.components.searchBtn.style.width = "100px";
    this.components.searchBtn.style.height = "20px";
    this.components.searchBtn.style.marginRight = "5px";

    this.components.feelingLuckyBtn.innerHTML = "I'm Feeling Lucky";
    this.components.feelingLuckyBtn.style.color = "black";
    this.components.feelingLuckyBtn.style.fontSize = "10px";
    this.components.feelingLuckyBtn.style.width = "100px";
    this.components.feelingLuckyBtn.style.height = "20px";
    this.components.searchBtn.style.marginLeft = "5px";

    this.events.createEvents();

    console.log("Final", this);

  },

  events: {
    createEvents: function() {
      // create events
      // create onkeyup where updates the value of inputValue 

      console.log(App.components.searchBtn)

      App.components.searchBtn.onmouseover = function(evt){
        // console.log("onmouseover", evt)
        App.components.searchBtn.style.background = "green"
      }
      App.components.searchBtn.onmouseout = function(evt){
        // console.log("onmouseout", evt)
        App.components.searchBtn.style.background = "red"
      }

      App.components.feelingLuckyBtn.onmouseover = function(evt){
        // console.log("onmouseover", evt)
        App.components.feelingLuckyBtn.style.background = "purple"
      }
      App.components.feelingLuckyBtn.onmouseout = function(evt){
        // console.log("onmouseout", evt)
        App.components.feelingLuckyBtn.style.background = "orange"
      }


      App.components.searchInput.onkeyup = function(evt){
        // console.log("Value of input", App.components.searchInput.value)
        App.components.inputValue.innerHTML = App.components.searchInput.value


      }

      // document.addEventListener("mousedown", function (evt) {
      //   console.log("clicked2", evt)
      // })
    }
  },

  components: {
    createElements: function () {
      
      // Create the elements

      this.app = document.getElementById("app");

      this.googleContainer = document.createElement("div");
      this.app.appendChild(this.googleContainer);

      this.searchInput = document.createElement("input");
      this.app.appendChild(this.searchInput);

      this.buttonsContainer = document.createElement("div");
      this.app.appendChild(this.buttonsContainer);

      this.inputValue = document.createElement("div");
      this.app.appendChild(this.inputValue);

      this.g = document.createElement("span");
      this.googleContainer.appendChild(this.g);

      this.o = document.createElement("span");
      this.googleContainer.appendChild(this.o);

      this.o2 = document.createElement("span");
      this.googleContainer.appendChild(this.o2);

      this.g2 = document.createElement("span");
      this.googleContainer.appendChild(this.g2);

      this.l = document.createElement("span");
      this.googleContainer.appendChild(this.l);

      this.e = document.createElement("span");
      this.googleContainer.appendChild(this.e);

      this.searchBtn = document.createElement("button");
      this.buttonsContainer.appendChild(this.searchBtn);

      this.feelingLuckyBtn = document.createElement("button");
      this.buttonsContainer.appendChild(this.feelingLuckyBtn);

    },

    app: null,
    googleContainer: null,
    buttonsContainer: null,
    g: null,
    o: null,
    o2: null,
    g2: null,
    l: null,
    e: null,
    searchInput: null,
    searchBtn: null,
    feelingLuckyBtn: null,
  },
};

App.init();
