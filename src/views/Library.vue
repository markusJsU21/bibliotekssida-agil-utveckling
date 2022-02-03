<template>
  <main class="library">
    <div class="books-list">
      <h2>LIBRARY</h2>
      <router-link
        v-for="book in books"
        :key="book.id"
        :to="'/Library/' + book.id"
      >
        {{ book.Title }}
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
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
