<template>
  <!-- pages/index.vue はrootページ -->

  <div class="about-class">
    <Menu :title="title" />
    <Button @myEvent="addBtnHandler">
      {{$t("hello")}} {{$t("you")}}
    </Button>
    <Container>      
      <Container-menu :data="data" @asdf="menuClickHandler" />
      <Container-body :showBody="showBody" :selectedPost="selectedPost" @asdf2="deleteHandler" />
    </Container>
    <Btns-container @asdf3="addBtnHandler" @asdf4="editBtnHandler"/>
    <div v-if="showModal" class="form-container" >
      <input v-model="content.title" class="form-title-input"  />
      <textarea v-model="content.body" class="form-text-area" placeholder="Text area body"  />
      <button class="form-close-btn" @click="showModal = false">x</button>
      title: {{content.title}};
      body: {{content.body}}
      <div class="save-cancel-btns-container">
        <button class="form-save-btn" @click="addHandler">SAVE</button>
        <button class="form-cancel-btn" @click="showModal = false">CANCEL</button>
      </div>
    </div>

    <div>
      <p>Hello</p>
      <p v-pre>{{ message }} World</p>
      <p v-text="message"></p>
      <p v-text="message">ハロー</p>
      <p v-html="message2"></p>
      <p style="color: red">りんご</p>
      <a href="https://www.google.com/?hl=ja">google</a>
      <a v-bind:href="url">google2</a>
      <a :href="url">google3</a>
      <p>{{ title2 }}</p>
      <p :title="title2">{{ title2 }}</p>
      <p :title2="title2">{{ title2 }}</p>
      <p>{{ message3 }}</p>
      <button v-on:click="reverse">reverse</button>
      <button @click="reverse">reverse2</button>
    </div>

    {{lang}}
    <Button @myEvent="languageHandler('ja')">
      {{ $t("japanese")}}
    </Button>

    <Button @myEvent="languageHandler('en')">
      {{ $t("english")}}
    </Button>


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
    <!-- <div>study:{{ data[0].title }}</div> -->

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
      <div style="border: 1px solid blue">{{ $t(i, b.id, b.title, b.price) }}</div>
    </div>
  </div>
</template>
<script>
import Button from "~/components/Button.vue"
import Menu from "~/components/Menu.vue"
import Container from "~/components/Container.vue"
import ContainerMenu from "~/components/ContainerMenu.vue"
import ContainerBody from "~/components/ContainerBody.vue"
import BtnsContainer from "~/components/BtnsContainer.vue"
import { setLang } from "~/plugins/i18n"


// beforeCreate()

// const a = document.createElement("div") // aはあるけど、userからは、みえない

// beforeMount() 

// document.appendChild(a) // equals to mount // ↓ userから、みえる

// created()


export default {
  components: {
    Button,
    Menu,
    Container,
    ContainerMenu,
    ContainerBody,
    BtnsContainer
  },
  
  // State
  data() {
    return {
      url: "https://www.google.com/?hl=ja",
      message: "Hello",
      message2: "<h1>Hello2</h1>",
      message3: "message3",
      title: "Super title",
      title2: "Super title2",
      clicked: 0,
      clicked2: 0,
      toggle: true,      
      data2: [
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
      selectedPost: null, // { id: 3, title: "Title 3", body: "Body 3" }
      showModal: false,
      showDelete: false,
      content: {
        title: null,
        body: null
      },
      lang: "ja"
    };
  },

  created() {
    console.log("Index created")
    console.log("Store", this.$store.state)
    // const Store = {
    //   state: {
    //     posts: []
    //   },
    //   mutations: {
    //     add: function(item) {
    //       Store.state.posts.push(item)
    //     }
    //   }
    // }

    // javascript: Store.mutaions.add({a:1})
    // vuex:       this.$store.commit("addPost", newItem)

    // javascript: Store.state.posts
    // vuex:       this.$store.state.posts
  },

  methods: {
    reverse() {
      this.message3 = "3egassem"
    },
    languageHandler(newLang) {
      console.log("New language", newLang)
      setLang(newLang)
      this.lang = newLang
    },
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
      // console.log("add", this.content.title, this.content.body);
      if (this.selectedPost) {        
        const newItem = {
          id: this.selectedPost.id,
          title: this.content.title, 
          body: this.content.body
        }

        this.$store.commit("editPost", newItem)

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
        // this.data.push(newItem);
        this.$store.commit("addPost", newItem)

        this.showModal = false;
        // ポイント!
        this.selectedPost = newItem
      }
    },
    // 3 EDIT
    editBtnHandler() {
      if (this.selectedPost) {
        this.content.title = "";
        // this.$store.commit("editPost")
        this.content.body = "";
        // this.$store.commit("editPost", "")

        // console.log("selectedPostId", this.selectedPost.id);
        // console.log("edit", this.content.title, this.content.body);
        this.showModal = true;
        // const item = this.findPostById(this.selectedPost.id)
        // console.log("found:", item)
      }
    },
    deleteHandler() {
      // console.log("deleting start")
      this.content.body = "";
      if (this.data.length === 1) {
        this.data = [];
        // console.log(this.data.length)
      } else {
        // 今selectedPostされていないitemだけをthis.dataに代入する(selectedPostされているitemだけを消す)
        this.data = this.data.filter(item => item.id !== this.selectedPost.id)
      }
      this.selectedPost = null;
      this.showModal = false;
      // console.log("deleting finish")
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
    },
    menuClickHandler(item) {
      this.selectedPost = item;
    }
  },

  computed: {
    data() {      
      return this.$store.state.data
    },
    // content() {      
    //   return this.$store.state.content
    // },
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
.form-container {
  position: absolute;
  top: 0; /* check */
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
</style>
