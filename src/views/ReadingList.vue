<template>
  <div class="wrapper">
    <h1>Reading List</h1>

    <section>
      <div v-for="book of books" :key="book.Title">
        <p>{{ book.listTitle }} by:{{ book.listAuthor }}</p>
      </div>
    </section>

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

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(47,47,47,255);
    border-radius: 5px;
    width: 600px;
}
</style>
