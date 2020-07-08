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