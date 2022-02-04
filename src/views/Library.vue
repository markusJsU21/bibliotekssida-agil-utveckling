<template>
  <main class="library">
    <div class="book-list">
      <h2>LIBRARY</h2>
      <div class="search-field">
        <input type="text" v-model="search" placeholder="sök bok på titel eller författare..." @input="updateSearchResult(search)" >
        <span v-if="searchResults">
        <router-link :to="'/Library/' + book.id" class="search-result" v-for="book of searchResults" :key="book.id">{{book.Title}} <p>by {{book.Author}}</p> </router-link> 
        </span>
      </div>
      <h3>Browse in our catalog</h3>
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
      search: ''
    };
  },
  mounted(){
    this.$store.dispatch('readArrayLength')
    this.$store.dispatch('clearSearchField')
  },

  methods: {
    updateSearchResult(payload){
     
      
        
        this.$store.dispatch('updateSearchResult', payload.toLowerCase())
     
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
.books-list, .search-field {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}

.search-result{
  background-color: rgb(100, 150, 100);
  color: whitesmoke;
  border-radius: 5px;
}

input{
  height: 3rem;
  width: 15rem;
  border-radius: 20px;
  border: none;
  text-align: center;
}

a{
  padding:.3rem;
  font-weight: normal;
   display: block;
}
p{
  font-family: 'Times New Roman', Times, serif;
  font-size: small;
  margin: 0;
  padding: 0;
  color: black;
}
h3{
  margin-top: 4rem;
}

</style>
