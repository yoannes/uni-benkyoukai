// 1
editBtnHandler() {
    console.log("selectedPostId", this.selectedPost.id);
    console.log("edit", this.content.title, this.content.body);
    this.showModal = true;
    if (this.selectedPost) {

      //  
      const sum = this.add();
      console.log("selectedPostId + 100 =:", sum);


      console.log("I am here");

      //
      const item = this.findPostById(this.selectedPost.id)
      console.log("found:", item)
    }
}




// 2

this.introduce("Ken");


introduce(name) {
    return `My name is ${name}!`;
  }




// 3

check0(number) {
  return number === 0;
}

hello() {
  return "Hello";
}

add(a, b) {
  return a + b;
}

introduce(name) {
  return `My name is ${name}!`;
}




// 4


const x = ""
if (x) {
  // no
}

const x = "a"
if (x) {
  // yes
}

const x = "1"
if (x === 1) {
  // no
}
if (x == 1) {
  // yes. Bad!
}




//5

let selectedPost = null;

//Click 1st option
selectedPost = data[1]

selected.title = "new title"
selected.body = "new body"

//original string. no more relation to data[1]
selectedPost = "slslsls"



//6
const arr = [1, 2, 3, 2, 3, 2]
console.log(arr)

const newArr = arr.filter(x => x === 3)
console.log(newArr)

const newArr2 = arr.filter(x => x !== 4)
console.log(newArr2)
