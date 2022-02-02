<template>
  <main class="library">
    <div class="books-list">
      <h2>LIBRARY</h2>
      <router-link
        v-for="book of childrensBooks"
        :key="book.Title"
        :to="{
          name: 'SingleBook',
          params: { id: book },
          props: { plot: book.plot },
        }"
      >
        {{ book.Title }}
      </router-link>
    </div>
  </main>
</template>

<script>
import ChildrensBooks from "../../src/ChildrensBooks.json";
export default {
  data() {
    return {
      childrensBooks: [...ChildrensBooks],
      readingList: [],
    };
  },
  created() {
    this.readingList = this.$route.params.id;
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
