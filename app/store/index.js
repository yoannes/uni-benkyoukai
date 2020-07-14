// vuex

export const state = () => ({
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
  ]
  // content: {
  //   title: null,
  //   body: null
  // }
})

export const mutations = {
  //      state  payload
  addPost(state, item) {    
    state.data.push(item)    
  }
  // editPost(state, item) {
  //   state.content.title = ""
  //   state.content.body = ""
  // },
  // deletePost(state, item) {
    
  // }
}
