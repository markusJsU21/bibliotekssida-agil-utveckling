<template>
  <div class="single-book">
    <button @click="back"> Back </button>

    <div class="wrapper">
      <div class="book-cover">
        <div class="cover-author">
          {{ title }} {{ author }}</div>
      </div>

      <section>
        <h2>{{ title }}</h2>
        <h3>by: {{ author }}</h3>
        <p>{{ plot }}</p>
        <div class="info-box">
          <span class="audience"> Audience: {{ audience }} </span>
          <span class="year"> First published: {{ year }} </span>
          <span class="pages"> Pages: {{ pages }} </span>
          <span class="publisher"> Publisher: {{ publisher }} </span>
        </div>
        <button @click="addBtn()">Oh, I want to read it!</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.id.Title,
      plot: this.$route.params.id.Plot,
      author: this.$route.params.id.Author,
      audience: this.$route.params.id.Audience,
      year: this.$route.params.id.Year,
      pages: this.$route.params.id.Pages,
      publisher: this.$route.params.id.Publisher,

      listItem: {
        listTitle: this.$route.params.id.Title,
        listAuthor: this.$route.params.id.Author,
      },
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    addBtn() {
      this.$root.books.push(this.listItem);
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 800px;
  max-width: 800px;
}
.book-cover {
  display: flex;
  background-color: rgb(100, 150, 100);
  height: 100%;
  width: 45%;
  border-radius: 10px;
  color: black;
}
.cover-author {
  color: rgb(12, 12, 12);
  font-size: 30px;
  text-align: center;
  margin-top: 45rem;
}
.single-book {
  display: block;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 45%;
}
.info-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  max-width: 600px;

  background-color: #3b3838;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
button {
  background-color: #f3f3f3;
  color: black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
button:hover {
  background-color: #050505;
  color: white;
}


.audience {
  grid-area: 1 / 1 / 2 / 2;
}
.year {
  grid-area: 1 / 2 / 2 / 3;
}
.pages {
  grid-area: 2 / 1 / 3 / 2;
}
.publisher {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
