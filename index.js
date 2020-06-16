// Homework for next class:
// Populate every row of the table with a book like wee did today with the book "Lord of the ring" and "Great gatsby"

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

    console.log("Bookshelf. Book at 1st floor and 2nd slot");
    console.log(this.bookShelves[1][2]);

    this.bookShelves[1][2] = "Lord of the rings";
    document.getElementById("12").innerHTML = this.bookShelves[1][2];
    console.log(this.bookShelves[1][2]);

    console.log("Bookshelf. Book at 2st floor and 3nd slot");
    console.log(this.bookShelves[2][3]);

    this.bookShelves[2][3] = "Great gatsby";
    document.getElementById("23").innerHTML = this.bookShelves[2][3];
    console.log(this.bookShelves[2][3]);

    this.bookShelves[3].push("Baseball bat");
    this.bookShelves[3].push("Baseball ball");
    this.bookShelves[3].push("Hat");
    this.bookShelves[3].push("Cup");
    console.log(this.bookShelves[3]);

    this.bookShelves[3].splice(1, 1);
    console.log(this.bookShelves[3]);

    console.log(this.bookShelves);

    this.loopArray();
  },
};

app.init();
