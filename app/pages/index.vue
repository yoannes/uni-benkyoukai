<template>
<!-- 
  1. Make edit button, open the modal, edit and save
  2. Delete post
 -->


  <div class="about-class">
    <div class="menu">
      <span>Menu</span> <nuxt-link to="/about">About</nuxt-link>
    </div>

    <div>
      <input v-model="toggle" type="checkbox" />
      <label v-if="toggle">Show/Hide</label>
    </div>
    <div @click="clickHandler('one way')">{{ title }}</div>
    <div @click="clickHandler('1 way')">{{ title }}</div>
    <!-- App.data.title -->
    <div @click="clicked += 1">{{ title }}</div>
    {{ clicked }}
    <div @click="clickHandler2">{{ title }}</div>
    {{ clicked2 }}
    <div>selectedPost: {{selectedPost}}</div>
    <div>study:{{ data[0].title }}</div>

    <!-- <div
      v-for="n in [1,2,3,4,5,6,7,8,9,0]"
      :key="n"                
      style="margin: 10px"
    >
      <div style="border: 1px solid black">now at: {{ n }}</div>
    </div>   -->

    <div
      v-for="(b, i) in books"
      :key="i"
      style="margin: 10px"
    >
      <div style="border: 1px solid blue">index: {{i}} id: {{b.id}} {{b.title}} {{b.price}}yen</div>
    </div>
    
    <div class="container">
      <div class="container-menu">
        <!-- loop all datas and will append to menu -->
        <!-- ポイント!↓vueはこんなふうに短く書く、横に長くかかない -->
        <div
          v-for="item in data"
          :key="item.id"
          class="container-menu-item"
          @click="selectedPost = item"
        >
          <div>{{ item.title }}</div> 
        </div>
      </div>
      <div class="container-body">
        <div id="bodyShowContentArea" class="body-show-content-area">{{showBody}}</div>
        <button v-if="selectedPost" class="delete-body-area-btn" @click="deleteHandler">x</button>
      </div>
    </div>
    <div v-if="showModal" class="form-container" >
      <input v-model="content.title" class="form-title-input"  />
      <textarea v-model="content.body" class="form-text-area" placeholder="Text area body"  />
      <button class="form-close-btn" @click="showModal = false">x</button>
      title: {{content.title}};
      body: {{content.body}}
      <div class="save-cancel-btns-container">
        <button class="form-save-btn" @click="addHandler">SAVE</button>
        <button class="form-cancel-btn">CANCEL</button>
      </div>
    </div>
    <div class="btns-container">
      <button class="btns-container-btn" @click="addBtnHandler">Add</button>
      <button class="btns-container-btn" @click="editBtnHandler">Edit</button>
    </div>
  </div>
</template>
<script>

// let selectedPost = null;

// Click 1st option
// selectedPost = data[1]

// selected.title = "new title"
// selected.body = "new body"

// original string. no more relation to data[1]
// selectedPost = "slslsls"

const arr = [1, 2, 3, 2, 3, 2]
console.log(arr)

const newArr = arr.filter(x => x === 3)
console.log(newArr)

export default {
  // State
  data() {
    return {
      title: "Super title",
      clicked: 0,
      clicked2: 0,
      toggle: true,
      data: [
        {
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ],
      books: [
        {
          id: 1,
          title: "The Lord of the Rings",
          price: 1000
        },
        {
          id: 2,
          title: "Harry Potter",
          price: 800
        }
      ],
      selectedPost: null, // *data[1]
      showModal: false,
      showDelete: false,
      content: {
        title: null,
        body: null
      }
    };
  },
  methods: {
    clickHandler(item) {
      console.log(item);
    },
    clickHandler2(item) {
      this.clicked2 += 1;
    },
    addBtnHandler() {
      this.selectedPost = null;
      this.showModal = true;
      this.content.title = "";
      this.content.body = "";
    },
    addHandler() {
      console.log("add", this.content.title, this.content.body);
      if (this.selectedPost) {
        // Edit content (pointerZone) : selectedPost points to data[i]
        this.selectedPost.title = this.content.title
        this.selectedPost.body = this.content.body

        // Set to null so wont have any selected anymore
        this.selectedPost = null

        // Close modal
        this.showModal = false
      } else {
        // add new
        // ポイント!
        const newItem = { 
          id: this.data.length + 1,
          title: this.content.title,
          body: this.content.body
        };
        // ポイント!
        this.data.push(newItem);
        this.showModal = false;
        // ポイント!
        this.selectedPost = newItem
      }
    },
    editBtnHandler() {
      this.content.title = "";
      this.content.body = "";
      console.log("selectedPostId", this.selectedPost.id);
      console.log("edit", this.content.title, this.content.body);
      this.showModal = true;
      if (this.selectedPost) {
        const item = this.findPostById(this.selectedPost.id)
        console.log("found:", item)
      }
    },
    deleteHandler() {
      console.log("delete-body-area-btn")
      this.content.body = "";

      this.data = this.data.filter(item => item.id !== this.selectedPost.id)
     
      this.selectedPost = null;
      this.showModal = false;
    },
    findPostById(id) {
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i];
        if (item.id === id) {
          return item;
        }
      }
      return null;
    },
    findPostIndex(id) {
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i];
        if (item.id === id) {
          return i;
        }
      }
      return -1;
    }
  },
  computed: {
    showTitle() {
      if (this.selectedPost) {
        return this.selectedPost.title;
      }
      // ポイント! nullが入ったらクラッシュする。selectedpostはnullが入る
      return "";
    },
    showBody() {
      if (this.selectedPost) {
        return this.selectedPost.body;
      }
      // ポイント! nullが入ったらクラッシュする。selectedpostはnullが入る
      return "";
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
}
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
  top: 500px; /* check */
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
.btns-container {
  margin-top: 5px;
  border: solid;
  color: white;
  width: 230px;
  height: 50px;
  text-align:center;
}
.btns-container-btn {
  margin-top: 5px;
  color: black;
  font-size: 20px;
  width: 100px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
}
</style>
