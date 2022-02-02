<template>
  <div class="reading-list">
    <div v-for="book of books" :key="book.Title">
      <p>{{ book.listTitle }} {{ book.listAuthor }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: this.$root.books,
    };
  },
};
</script>

<style></style>
