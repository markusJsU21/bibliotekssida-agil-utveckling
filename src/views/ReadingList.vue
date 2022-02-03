<template>
  <div class="wrapper">
    <h2>Reading List</h2>

    <section>
      <div v-for="book of books" :key="book.Title">
        <p class="book-title">{{ book.Title }}</p>
        <p class="book-author">by {{ book.Author }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed:{
    books() {
      return this.$store.state.ReadingList;
    },
  }
};
</script>

<style scoped>
*{
    text-align: center;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(47, 47, 47, 255);
  border-radius: 5px;
  width: 600px;
}
.book-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}
.book-author {
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: calc(0.5);
}
</style>
