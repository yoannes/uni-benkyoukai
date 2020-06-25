const App = {
  init: function() {
    console.log("Start of our super blog");
    console.log("Create the components");
    this.components.createComponents();
    console.log("Components created");

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

    // ↓Don't need??
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


    // TODO:
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      this.posts.create(item)
    }

    this.events.createEvents();
    console.log("Final", this);
  },

  posts: {
    selectedPost: null,

    create: function(item){
      // console.log(item)
      // Check if element exists, if not create it

      // もしmenuListsがなかったら、itemを追加していく
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

          App.components.deleteBodyAreaBtn.style.display = "block";
        } 

        // Add element to posts obj
        App.components.menuLists[item.id] = el;

        // Append element to container
        App.components.menuContainer.appendChild(el);

        

      }
    },

    showContent: function() {
      console.log(this.selectedPost)
      App.components.bodyShowContentArea.innerHTML = this.selectedPost.body
    }
  },




  events: {
    createEvents: function() {
      console.log("Create events")

      App.components.formAddBtn.onclick = function(evt){
        App.components.formContainer.style.display = "block";
        App.posts.selectedPost = null;

        App.components.formTitleInput.value = ""
        App.components.formTextArea.value = ""
      }

      App.components.formCloseBtn.onclick = function(evt){
        App.components.formContainer.style.display = "none";
      }

      App.components.formCancelBtn.onclick = function(evt){
        App.components.formContainer.style.display = "none";
      }

      App.components.formSaveBtn.onclick = function(evt){
        App.components.formContainer.style.display = "none";

        if(App.posts.selectedPost){
          //edit ☆☆☆
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if(item.id === App.posts.selectedPost.id){
              item.title = App.components.formTitleInput.value
              item.body = App.components.formTextArea.value

              // kind of push/render　(リレンダ)
              App.components.menuLists[item.id].innerHTML = item.title
              App.components.bodyContainer.innerHTML = item.body

              break;
            }
          }

        } else {
          //add new
          const item = {
            id:data.length+1,
            title: App.components.formTitleInput.value,
            body: App.components.formTextArea.value
          }
          console.log(item)

          // push
          data.push(item)
          // render
          App.posts.create(item)

        }
      }

      App.components.deleteBodyAreaBtn.onclick = function(evt){
        console.log("onclick deleteBodyAreaBtn")
        App.components.bodyShowContentArea.innerHTML = ""
        App.components.deleteBodyAreaBtn.style.display = "none";
      }




    }
  },

  components: {

    createComponents: function() {

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
      
    menuLists: {    
    },
  },  

};

App.init();