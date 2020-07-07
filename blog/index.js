const App = {

  init: function () {
    console.log("Start of our super blog");
    console.log("Create the components");
    this.components.createComponents();
    console.log("Components created");


    //style-----------------------------------------
    this.components.container.style.display = "flex";
    this.components.container.style.border = "solid";
    this.components.container.style.color = "orange";
    this.components.container.style.width = "1000px";
    this.components.container.style.height = "600px";

    this.components.menuContainer.style.overflowY = "auto";
    this.components.menuContainer.style.overflowX = "hidden";
    this.components.menuContainer.style.border = "solid";
    this.components.menuContainer.style.color = "black";
    this.components.menuContainer.style.width = "200px";
    this.components.menuContainer.style.height = "600px";

    this.components.bodyContainer.style.border = "solid";
    this.components.bodyContainer.style.color = "blue";
    this.components.bodyContainer.style.width = "800px";
    this.components.bodyContainer.style.height = "600px";
    this.components.bodyContainer.style.position = "relative";

    this.components.bodyShowContentArea.style.border = "solid";
    this.components.bodyShowContentArea.style.color = "red";
    this.components.bodyShowContentArea.style.width = "800px";
    this.components.bodyShowContentArea.style.height = "560px";
    // this.components.bodyShowContentArea.style.position = "relative";

    this.components.deleteBodyAreaBtn.innerHTML = "x";
    this.components.deleteBodyAreaBtn.style.position = "absolute";
    this.components.deleteBodyAreaBtn.style.bottom = "0";
    this.components.deleteBodyAreaBtn.style.right = "0";
    this.components.deleteBodyAreaBtn.style.color = "black";
    this.components.deleteBodyAreaBtn.style.backgroundColor = "red";
    this.components.deleteBodyAreaBtn.style.fontSize = "20px";
    this.components.deleteBodyAreaBtn.style.width = "100px";
    this.components.deleteBodyAreaBtn.style.height = "30px";
    this.components.deleteBodyAreaBtn.style.cursor = "pointer";
    this.components.deleteBodyAreaBtn.style.display = "block";
    this.components.deleteBodyAreaBtn.style.display = "none";

    this.components.formContainer.style.position = "absolute";
    this.components.formContainer.style.top = "0";
    this.components.formContainer.style.left = "0";
    this.components.formContainer.style.right = "0";
    this.components.formContainer.style.bottom = "0";
    this.components.formContainer.style.margin = "auto";
    this.components.formContainer.style.border = "solid";
    this.components.formContainer.style.color = "gray";
    this.components.formContainer.style.width = "400px";
    this.components.formContainer.style.height = "150px";
    this.components.formContainer.style.display = "none";

    // ↓Don't need???
    this.components.formAddBtnContainer.style.marginTop = "5px";
    this.components.formAddBtnContainer.style.border = "solid";
    this.components.formAddBtnContainer.style.color = "white";
    this.components.formAddBtnContainer.style.width = "100px";
    this.components.formAddBtnContainer.style.height = "30px";

    this.components.formTitleInput.style.marginTop = "5px";
    this.components.formTitleInput.style.marginLeft = "auto";
    this.components.formTitleInput.style.marginRight = "auto";
    this.components.formTitleInput.style.width = "200px";
    this.components.formTitleInput.style.height = "25px";
    this.components.formTitleInput.style.display = "block";

    this.components.formTextArea.placeholder = "Text area body";
    this.components.formTextArea.style.border = "solid";
    this.components.formTextArea.style.color = "black";
    this.components.formTextArea.style.marginTop = "5px";
    this.components.formTextArea.style.marginLeft = "auto";
    this.components.formTextArea.style.marginRight = "auto";
    this.components.formTextArea.style.width = "350px";
    this.components.formTextArea.style.height = "70px";

    this.components.formCloseBtn.innerHTML = "x";
    this.components.formCloseBtn.style.position = "absolute";
    this.components.formCloseBtn.style.top = "0%";
    this.components.formCloseBtn.style.right = "0%";
    this.components.formCloseBtn.style.color = "black";
    this.components.formCloseBtn.style.fontSize = "10px";
    this.components.formCloseBtn.style.cursor = "pointer";

    this.components.saveCancelBtnsContainer.style.position = "absolute";
    this.components.saveCancelBtnsContainer.style.bottom = "0%";
    this.components.saveCancelBtnsContainer.style.right = "0%";
    this.components.saveCancelBtnsContainer.style.border = "solid";
    this.components.saveCancelBtnsContainer.style.color = "transparent";
    this.components.saveCancelBtnsContainer.style.width = "210px";
    this.components.saveCancelBtnsContainer.style.height = "30px";

    this.components.formSaveBtn.innerHTML = "SAVE";
    this.components.formSaveBtn.style.marginRight = "5px";
    this.components.formSaveBtn.style.color = "black";
    this.components.formSaveBtn.style.fontSize = "10px";
    this.components.formSaveBtn.style.width = "100px";
    this.components.formSaveBtn.style.height = "20px";
    this.components.formSaveBtn.style.cursor = "pointer";

    this.components.formCancelBtn.innerHTML = "CANCEL";
    this.components.formCancelBtn.style.marginLeft = "5px";
    this.components.formCancelBtn.style.color = "black";
    this.components.formCancelBtn.style.fontSize = "10px";
    this.components.formCancelBtn.style.width = "100px";
    this.components.formCancelBtn.style.height = "20px";
    this.components.formCancelBtn.style.cursor = "pointer";

    this.components.formAddBtn.innerHTML = "Add";
    this.components.formAddBtn.style.marginTop = "5px";
    this.components.formAddBtn.style.color = "black";
    this.components.formAddBtn.style.fontSize = "20px";
    this.components.formAddBtn.style.width = "100px";
    this.components.formAddBtn.style.height = "30px";
    this.components.formAddBtn.style.cursor = "pointer";

    //-----------------------------------------


    // TODO:図を書いて理解する. v-for
    for (let i = 0; i < data.length; i++) {
      const item = data[i]; //①定数itemにdata[i]を代入
      this.posts.create(item) //②create(data[i])を実行
    }

/*     for (const item in data) {
      
    }
 */
    this.events.createEvents();

    console.log("data", App.data.title)

    console.log("Final", this);
  },

  // controller
  posts: {
    selectedPost: null,

    create: function (item) {
      // console.log(item)

      // Check if element exists, if not create it
      // もしmenuListsがなかったら、itemを追加していく

      //TODO: [item.id]の形が理解できてない
      if (!App.components.menuLists[item.id]) {
        const el = document.createElement("div");
        el.id = item.id
        el.innerHTML = item.title

        el.style.border = "solid";
        el.style.borderColor = "green";
        el.style.width = "200px";
        el.style.height = "50px";
        el.style.overflow = "hidden";
        el.style.cursor = "pointer";

        // Create element click listener
        // el.onclick = App.methods.clickHandler;

        el.onclick = function () {

          // Set clicked element and show in screen
          App.posts.selectedPost = item
          App.posts.showContent()

          App.components.deleteBodyAreaBtn.style.display = "block";
        }

        //TODO:
        // Add el(element) to posts obj
        App.components.menuLists[item.id] = el;


        // Append el(element) to container
        // v-for
        App.components.menuContainer.appendChild(el);
      }
    },

    showContent: function () {
      console.log(this.selectedPost)
      App.components.bodyShowContentArea.innerHTML = this.selectedPost.body
    }
  },

  events: {
    createEvents: function () {
      console.log("Create events")

      // TODO:
      App.components.formAddBtn.onclick = function (evt) {
        App.components.formContainer.style.display = "block";


        App.posts.selectedPost = null;

        App.components.formTitleInput.value = ""
        App.components.formTextArea.value = ""
      }

      App.components.formCloseBtn.onclick = function (evt) {
        App.components.formContainer.style.display = "none";
      }

      App.components.formCancelBtn.onclick = function (evt) {
        App.components.formContainer.style.display = "none";
      }

      // TODO:
      App.components.formSaveBtn.onclick = function (evt) {
        App.components.formContainer.style.display = "none";

        if (App.posts.selectedPost) {
          //edit ←今はつかってない
          const item = App.util.findPostById(App.posts.selectedPost.id)
          console.log("found:", item)
          if (item) {
            item.title = App.components.formTitleInput.value
            item.body = App.components.formTextArea.value

            // kind of push/render　(リレンダ)
            App.components.menuLists[item.id].innerHTML = item.title
            App.components.bodyContainer.innerHTML = item.body
          }

        } else {
          //add new
          const item = {
            id: data.length + 1,
            title: App.components.formTitleInput.value,
            body: App.components.formTextArea.value
          }
          console.log(item)

          // push ←?
          data.push(item)

          // render
          App.posts.create(item)
        }
      }


      // TODO:
      App.components.deleteBodyAreaBtn.onclick = function (evt) {
        //console.log("onclick deleteBodyAreaBtn")

        App.components.bodyShowContentArea.innerHTML = ""
        App.components.deleteBodyAreaBtn.style.display = "none";

        // Remove from data object ←?
        const idx = data.findIndex(function (item) {
          return item.id === App.posts.selectedPost.id
        })

        if (idx > -1) {
          data.splice(idx, 1)
        }

        
        // -----------

        // remove the element
        App.components.menuLists[App.posts.selectedPost.id].remove()
        console.log(App.components.menuLists[App.posts.selectedPost.id])

        // Delete from object
        delete App.components.menuLists[App.posts.selectedPost.id]
        console.log(App.components.menuLists[App.posts.selectedPost.id])

        // Clear the selected post
        App.posts.selectedPost = null
      }
    }
  },

  methods: {
    clickHandler: function () {
      App.clicked += 1;
    }
  },

  components: {

    createComponents: function () {

      // Create the elements
      this.app = document.getElementById("app");

      this.container = document.createElement("div");
      this.app.appendChild(this.container);

      this.menuContainer = document.createElement("div");
      this.container.appendChild(this.menuContainer);

      this.bodyContainer = document.createElement("div");
      this.container.appendChild(this.bodyContainer);

      this.bodyShowContentArea = document.createElement("div");
      this.bodyContainer.appendChild(this.bodyShowContentArea);

      this.deleteBodyAreaBtn = document.createElement("button");
      this.bodyContainer.appendChild(this.deleteBodyAreaBtn);

      this.formContainer = document.createElement("div");
      this.app.appendChild(this.formContainer);

      this.formAddBtnContainer = document.createElement("div");
      this.app.appendChild(this.formAddBtnContainer);

      this.formTitleInput = document.createElement("input");
      this.formContainer.appendChild(this.formTitleInput);

      this.formTextArea = document.createElement("textarea");
      this.formContainer.appendChild(this.formTextArea);

      this.formCloseBtn = document.createElement("button");
      this.formContainer.appendChild(this.formCloseBtn);

      this.saveCancelBtnsContainer = document.createElement("div");
      this.formContainer.appendChild(this.saveCancelBtnsContainer);

      this.formSaveBtn = document.createElement("button");
      this.saveCancelBtnsContainer.appendChild(this.formSaveBtn);

      this.formCancelBtn = document.createElement("button");
      this.saveCancelBtnsContainer.appendChild(this.formCancelBtn);

      this.formAddBtn = document.createElement("button");
      this.formAddBtnContainer.appendChild(this.formAddBtn);
    },

    container: null,
    menuContainer: null,

    bodyContainer: null,
    bodyShowContentArea: null,
    deleteBodyAreaBtn: null,

    formContainer: null,
    formAddBtnContainer: null,

    formTitleInput: null,
    formTextArea: null,
    formCloseBtn: null,

    saveCancelBtnsContainer: null,
    formSaveBtn: null,
    formCancelBtn: null,

    formAddBtn: null,

    //TODO: なぜnullじゃダメなのか? そもそも上記でnullで宣言していく理由は?
    menuLists: {
    },

  },

  util: {
    findPostById: function (id) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.id === id) {
          return item;
        }
      }

      return null;
    },

    findPostIndex: function (id) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.id === id) {
          return i;
        }
      }

      const x = 0;
      const y = null;
      if (!x) {
        // true
      }

      if (!y) {
        // true
      }

      const arr = [0, 1, 2, 3]

      console.log(arr[0]) // 0
      console.log(arr[-1]) // undefined
      console.log(arr[null]) // raise

      return -1;
    }
    // editPostById(id, title, body)
  },

  // State
  data: {
    title: "Super title",
    clicked: 0,
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
    selectedPost: null,
    showModal: false,
    showDelete: false,
    content: {
      title: null,
      body: null
    }
  }

};

App.init();




// Geocoding JSON Responses
const x = {
  "results": [
    {
      "address_components": [
        {
          "long_name": "1600",
          "short_name": "1600",
          "types": ["street_number"]
        },
        {
          "long_name": "Amphitheatre Pkwy",
          "short_name": "Amphitheatre Pkwy",
          "types": ["route"]
        },
        {
          "long_name": "Mountain View",
          "short_name": "Mountain View",
          "types": ["locality", "political"]
        },
        {
          "long_name": "Santa Clara County",
          "short_name": "Santa Clara County",
          "types": ["administrative_area_level_2", "political"]
        },
        {
          "long_name": "California",
          "short_name": "CA",
          "types": ["administrative_area_level_1", "political"]
        },
        {
          "long_name": "United States",
          "short_name": "US",
          "types": ["country", "political"]
        },
        {
          "long_name": "94043",
          "short_name": "94043",
          "types": ["postal_code"]
        }
      ],
      "formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
      "geometry": {
        "location": {
          "lat": 37.4224764,
          "lng": -122.0842499
        },
        "location_type": "ROOFTOP",
        "viewport": {
          "northeast": {
            "lat": 37.4238253802915,
            "lng": -122.0829009197085
          },
          "southwest": {
            "lat": 37.4211274197085,
            "lng": -122.0855988802915
          }
        }
      },
      "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
      "plus_code": {
        "compound_code": "CWC8+W5 Mountain View, California, United States",
        "global_code": "849VCWC8+W5"
      },
      "types": ["street_address"]
    }
  ],
  "status": "OK"
}