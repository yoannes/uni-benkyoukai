<template>
  <!-- pages/index.vue はrootページ -->

  <div class="about-class">
    <Menu :title="title" />
    <Button @myEvent="addBtnHandler">
      {{$t("hello")}} {{$t("you")}}
    </Button>
    <Container>      
      <Container-menu :data="data" @asdf="menuClickHandler" />
      <Container-body :fgh="showBody" :fgh2="selectedPost" @asdf2="deleteHandler" />
    </Container>
    <Btns-container @asdf3="addBtnHandler" @asdf4="editBtnHandler"/>

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
      selectedPost: null, // *data[1]
      showModal: false,
      showDelete: false,
      content: {
        title: null,
        body: null
      },
      lang: "ja"
    };
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
      if (this.selectedPost) {
        this.content.title = "";
        this.content.body = "";
        console.log("selectedPostId", this.selectedPost.id);
        console.log("edit", this.content.title, this.content.body);
        this.showModal = true;
        const item = this.findPostById(this.selectedPost.id)
        console.log("found:", item)
      }
    },
    deleteHandler() {
      // console.log("deleting start")
      this.content.body = "";
      if (this.data.length === 1) {
        this.data = [];
        console.log(this.data.length)
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
