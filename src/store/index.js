import Vue from 'vue'
import Vuex from 'vuex'
import ChildrensBooks from "@/ChildrensBooks.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ChildrensBooks: [...ChildrensBooks],
    ReadingList: [],
  },
  mutations: {
    addToReadingList(state, payload) {
      state.ReadingList.push(payload);
    }
  },
  //Adderade 'payload' till action addToReadingList /Markus
  actions: {
    addToReadingList(context, payload) {
      console.log(context)
      context.commit('addToReadingList', payload)
    },
  },
  modules: {
  }
})
