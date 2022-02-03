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
  </main>
</template>

<script>
export default {

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
  computed: {
    books() {
      return this.$store.state.ChildrensBooks;
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
