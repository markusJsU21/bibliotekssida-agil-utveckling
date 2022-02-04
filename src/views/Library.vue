<template>
  <main class="library">
    <div class="books-list">
      <h2>LIBRARY</h2>
      <div>
        <input type="text" v-model="title" placeholder="sök book med title" @input="updateSearchResult(title)" >
        <span>
          {{searchResults}}
        </span>
      </div>
      <router-link
        v-for="book in currentBooks"
        :key="book.id"
        :to="'/Library/' + book.id"
      >
        {{ book.Title }}
      </router-link>
      <div class="btn">
        <button v-if="currentPage != 1" @click="prevPage()">prev</button>
       {{currentPage}}/ {{maxPages}}
        <button  v-if="currentPage != maxPages" @click="nextPage()">next</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  mounted(){
    this.$store.dispatch('readArrayLength')
  },

  methods: {
    updateSearchResult(payload){
      console.log(payload);
      this.$store.dispatch('updateSearchResult', payload)
    },
    nextPage() {
     this.$store.dispatch('nextPage')
    },

    prevPage() {
      this.$store.dispatch('prevPage')
    },
  },
  computed: {
    //hämntar från store och sparar i books()
    searchResults(){
      return this.$store.state.searchResults
    },
      start(){
        return this.$store.state.start
      },
      end(){
        return this.$store.state.end
      },
    books() {
      return this.$store.state.ChildrensBooks;
    },
    booksLength() {
      return this.books.length;
    },
    maxPages(){
      return this.$store.state.maxPages
    },
    currentPage(){
      return this.$store.state.currentPage
    },
    currentBooks(){
      
      return this.$store.state.ChildrensBooks.slice(this.start, this.end)
    },
  },
};
</script>

<style scoped>

.library {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.books-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}
</style>
