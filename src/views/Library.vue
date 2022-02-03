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
    </div>
    <button @click="prevPage()">prev</button>
    <button @click="nextPage()">next</button>
  </main>
</template>

<script>
export default {
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
