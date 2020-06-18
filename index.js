// Homework for next class:
// Today's Kadae
// Make https://www.google.com/ website using only HTML and CSS

let num = 0;
let str = "string";
let arr = [];
let obj = {};
let fn = function () {};

// Inject `a` into `obj`
obj.a = "asdasdas";

const app = {
  bookShelves: [["00", "01", "02", "03"], ["10", "11", "12", "13"], ["20", "21", "22", "23"], []],
  loopArray: function () {
    console.log("Length", this.bookShelves.length);
    for (let i = 0; i < this.bookShelves.length; i++) {
      const x = this.bookShelves[i];

      // Change the value of:
      // this.bookShelves[i][2] = "new";

      console.log(x);
    }
  },
  init: function () {
    console.log("Start of the super APP");

    // console.log("Bookshelf. Book at 1st floor and 2nd slot");
    // console.log(this.bookShelves[1][2]);

    // this.bookShelves[1][2] = "Lord of the rings";
    // document.getElementById("12").innerHTML = this.bookShelves[1][2];
    // console.log(this.bookShelves[1][2]);

    // console.log("Bookshelf. Book at 2st floor and 3nd slot");
    // console.log(this.bookShelves[2][3]);

    // this.bookShelves[2][3] = "Great gatsby";
    // document.getElementById("23").innerHTML = this.bookShelves[2][3];
    // console.log(this.bookShelves[2][3]);

    // this.bookShelves[3].push("Baseball bat");
    // this.bookShelves[3].push("Baseball ball");
    // this.bookShelves[3].push("Hat");
    // this.bookShelves[3].push("Cup");
    // console.log(this.bookShelves[3]);

    // this.bookShelves[3].splice(1, 1);
    // console.log(this.bookShelves[3]);

    // console.log(this.bookShelves);

    // this.loopArray();
    this.playWithHtml();
  },
  playWithHtml: function () {
    let el;

    console.log("Lets play with HTML");

    // Find element by ID
    el = document.getElementById("containerId");
    console.log("Found element:", el);

    // Find element by class
    el = document.getElementsByClassName("column");
    console.log("Found element:", el);

    // Create element
    el = document.createElement("div");
    console.log("Found element:", el);

    // ---- Manipulate element ------ //
    el = document.getElementById("containerId");

    // Change the content
    el.innerHTML = "<i>new content</i>";

    // Change the style
    el.style.backgroundColor = "red";
    console.log("styling", el.style);

    // change class
    el.classList.remove("bold");
    el.classList.add("bold");
    console.log("classes", el.classList);

    el = document.createElement("div");
    el.id = "myNewElement";
    el.style.fontSize = "50px";
    el.classList.add("bold");
    el.innerHTML = "im the new component";

    document.body.appendChild(el);
    console.log("new element", el);

    // Find text
    el = document.getElementById("text");
    console.log("text", el);
  },
};

app.init();
