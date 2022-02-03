<template>
  <main class="library">
    <div class="books-list">
      <h2>LIBRARY</h2>
      <router-link
        v-for="book in currentPage"
        :key="book.id"
        :to="'/Library/' + book.id"
      >
        {{ book.Title }}
      </router-link>
      <div class="btn">
        <button @click="prevPage">Previous Page</button>
        <button @click="nextPage">Next Page</button>
      </div>
      
      
    </div>
    <button @click="prevPage()">prev</button>
    <button @click="nextPage()">next</button>
  </main>
</template>

<script>
export default {
<<<<<<< HEAD

  data(){
    return{
      start:0,
      end:4,
      currentPage:''
    }
  },

  methods: {
    nextPage(){
      this.currentPage = this.books.slice(this.start,this.end)
      if(this.end < this.books.length){
       this.start += 4;
        this.end += 4;
      }
      console.log(this.start + '' + this.end);

    },
    
    
     prevPage(){
      this.currentPage = this.books.slice(this.start,this.end)
      if(this.start > 0){
       this.start -= 4;
        this.end -= 4;
      }
      console.log(this.start + '' + this.end);

    }


  },
=======
  data() {
    return {
      currentPage: "",
      start: 0,
      end: 4,
    };
  },
  methods: {
    nextPage() {
      this.currentPage = this.books.slice(this.start, this.end);
        this.end += 4;
        this.start += 4;
    },
    prevPage() {
      this.end -= 4;
      this.start -= 4;
      this.currentPage = this.books.slice(this.start, this.end);
    },
  },

>>>>>>> 026e4150c1cc4aaf112b8abacac61c8abffd7cc8
  computed: {
    //hämntar från store och sparar i books()
    books() {
      return this.$store.state.ChildrensBooks;
    },
    booksLength() {
      return this.books.length;
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
