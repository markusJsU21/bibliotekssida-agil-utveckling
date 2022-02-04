import Vue from 'vue'
import Vuex from 'vuex'
import ChildrensBooks from "@/ChildrensBooks.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ChildrensBooks: [...ChildrensBooks],
    ReadingList: [],
    searchResults: [],
    maxPages: 0,
    start: 0,
    end: 4,
    currentPage: 1
  },
  mutations: {
    addToReadingList(state, payload) {
      state.ReadingList.push(payload);
    },
    setMaxPages(state, num){
      state.maxPages = num
    },
    clearSearchField(state){
      state.searchResults = []
    },
    nextPage(state){
          state.start += 4
          state.end += 4
          state.currentPage++
    },
    prevPage(state){
        state.start -= 4
        state.end -= 4
        state.currentPage--
    },
    updateSearchResult(state, payload){
      
      if(payload.length){
        state.searchResults = state.ChildrensBooks.filter(title => {
          return title.Title.toLowerCase().includes(payload) || 
            title.Author.toLowerCase().includes(payload) 
            
      })
     }
      else{
        state.searchResults = []
      }
      
    },
  },
  //Adderade 'payload' till action addToReadingList /Markus
  actions: {
    addToReadingList(context, payload) {

      context.commit('addToReadingList', payload)
    },
    nextPage(context){
      context.commit('nextPage')
    },
    readArrayLength(context){
      context.commit('setMaxPages', Math.ceil(ChildrensBooks.length / 4))
    },
    clearSearchField(context){
      context.commit('clearSearchField')
    },
    prevPage(context){
      context.commit('prevPage')
    },
    updateSearchResult(context, payload){
      context.commit('updateSearchResult', payload)
    },
  },
  modules: {
  }
})
