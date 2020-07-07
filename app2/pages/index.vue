<template>
   <div class="root">
     <div @click="clickHandler('one way')">{{ title }}</div>
     <div @click="clicked += 1">{{ title }}</div>
     {{ clicked }}
     <div>selectedPost: {{selectedPost}}</div>
     <div>study:{{ a }}</div>
     <div class="container">
      <div class="container-menu">
        <div
          v-for="item in data"
          :key="item.id"
          @click="selectedPost = data"
          class="container-menu-item"
          >{{ item.title }}</div>
      </div>
      <div class="container-body">
        <div class="body-show-content-area"></div>
        <button class="delete-body-area-btn">x</button>
      </div>
    </div>
    <div class="form-container">
      <input class="form-title-input"/>
      <textarea class="form-text-area" placeholder="Text area body"/>
      <button class="form-close-btn">x</button>
      <div class="save-cancel-btns-container">
        <button class="form-save-btn">SAVE</button>
        <button class="form-cancel-btn">CANCEL</button>
      </div>
    </div>
    <div class="form-add-btn-container">
      <button class="form-add-btn">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Super title",
      clicked: 0,
      data: [
        {
          idd: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          idd: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ],
      selectedPost: null,
      showModal: false,
      showDelete: false,
      content: {
        title: null,
        body: null
      }
    };
  }
};
</script>
<style scoped>
.container {
  display: flex;
  border: solid;
  color: orange;
  width: 1000px;
  height: 600px;
}
.contaier-menu {
  border: 1px solid green;
  overflow-y: auto;
  overflow-x: hidden;
  border: solid;
  color: black;
  width: 200px;
  height: 600px;
}
.container-menu-item {
  border: 1px solid green;
  width: 200px;
  height: 50px;
  overflow: hidden;
  cursor: pointer;
}
.container-body {
  border: 1px solid red;
  border: solid;
  color: blue;
  width: 800px;
  height: 600px;
  position: relative;
}
.body-show-content-area {
  border: solid;
  color: red;
  width: 800px;
  height: 560px;
}
.delete-body-area-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
  background-color: red;
  font-size: 20px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  display: block;
  /* display: none; */
}
.form-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: solid;
  color: gray;
  width: 400px;
  height: 150px;
  /* display: none; */
}
.form-title-input {
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 25px;
  display: block;
}
.form-text-area {
  border: solid;
  color: black;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  /* margin-left: auto;
  margin-right: auto; */
  width: 350px;
  height: 70px;
}
.form-close-btn {
  position: absolute;
  top: 0%;
  right: 0%;
  color: black;
  font-size: 10px;
  cursor: pointer;
}
.save-cancel-btns-container {
  position: absolute;
  bottom: 0%;
  right: 0%;
  border: solid;
  color: transparent;
  width: 210px;
  height: 30px;
  display: flex;
}
.form-save-btn {
  margin-right: 5px;
  color: black;
  font-size: 10px;
  width: 100px;
  height: 20px;
  cursor: pointer;
}
.form-cancel-btn {
  margin-left: 5px;
  color: black;
  font-size: 10px;
  width: 100px;
  height: 20px;
  cursor: pointer;
}
.form-add-btn-container {
  margin-top: 5px;
  border: solid;
  color: white;
  width: 100px;
  height: 30px;
}
.form-add-btn {
  margin-top: 5px;
  color: black;
  font-size: 20px;
  width: 100px;
  height: 30px;
  cursor: pointer;
}
</style>