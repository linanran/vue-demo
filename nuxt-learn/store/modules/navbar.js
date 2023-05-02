const state = () => ({
  app: []
})
const mutations = {
  add(state, text) {
    state.app.push(text)
  }
}
const actions = {
  and: ({commit}, text) => {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
