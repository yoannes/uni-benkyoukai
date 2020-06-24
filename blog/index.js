// Flex
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const App = {
  init: function () {
    console.log("Start of our super blog");

    console.log("Create the components");
    this.components.createComponents();
    console.log("Components created");

    // menuContainer: null,

    this.components.container.style.display = "flex";
    this.components.container.style.border = "solid";
    this.components.container.style.color = "blue";
    this.components.container.style.width = "1000px";
    this.components.container.style.height = "600px";


    this.components.formContainer.style.position = "absolute";
    this.components.formContainer.style.top = "0";
    this.components.formContainer.style.left = "0";
    this.components.formContainer.style.right = "0";
    this.components.formContainer.style.bottom = "0";
    this.components.formContainer.style.margin = "auto";
    this.components.formContainer.style.border = "solid";
    this.components.formContainer.style.color = "purple";
    this.components.formContainer.style.width = "400px";
    this.components.formContainer.style.height = "150px";

    this.components.formContainerAddBtn.style.marginTop = "10px";
    this.components.formContainerAddBtn.style.border = "solid";
    this.components.formContainerAddBtn.style.color = "purple";
    this.components.formContainerAddBtn.style.width = "100px";
    this.components.formContainerAddBtn.style.height = "30px";

    this.components.menuContainer.style.border = "solid";
    this.components.menuContainer.style.color = "black";
    this.components.menuContainer.style.width = "200px";
    this.components.menuContainer.style.height = "600px";
    this.components.menuContainer.style.overflowY = "auto";
    this.components.menuContainer.style.overflowX = "hidden";
    
    this.components.bodyContainer.style.border = "solid";
    this.components.bodyContainer.style.color = "red";
    this.components.bodyContainer.style.width = "800px";
    this.components.bodyContainer.style.height = "600px";
    
    
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      this.posts.create(item)
    }

  },

  posts: {
    selectedPost: null,

    create: function(item){
      // console.log(item)

      // Check if element exists, if not create it
      if (!App.components.menuLists[item.id]){
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
        el.onclick = function(){

          // Set clicked element and show in screen
          App.posts.selectedPost = item
          App.posts.showContent()
        }

        // Add element to posts obj
        App.components.menuLists[item.id] = el;

        // Append element to container
        App.components.menuContainer.appendChild(el);

      }
    },

    showContent: function() {
      console.log(this.selectedPost)
      App.components.bodyContainer.innerHTML = this.selectedPost.body
    }
  },

  events: {},

  components: {
    createComponents: function () {

      // Create the elements
      this.app = document.getElementById("app");

      this.container = document.createElement("div");
      this.app.appendChild(this.container);

      this.formContainer = document.createElement("div");
      this.app.appendChild(this.formContainer);

      this.formContainerAddBtn = document.createElement("div");
      this.app.appendChild(this.formContainerAddBtn);


      this.menuContainer = document.createElement("div");
      this.container.appendChild(this.menuContainer);
      
      this.bodyContainer = document.createElement("div");
      this.container.appendChild(this.bodyContainer);

    },

    container: null,
    formContainer: null,
    formContainerAddBtn: null,

    menuContainer: null,
    bodyContainer: null,
    menuLists: {    
    }
    

  },

};

App.init();
