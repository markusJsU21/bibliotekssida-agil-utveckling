<template>
  <div id="app">
    <p>test</p>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link to="/Library">Library</router-link>
      <router-link to="/ReadingList">Reading List</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ChildrensBooks from "../src/ChildrensBooks.json";
export default {
  data() {
    return {
      childrensBooks: [...ChildrensBooks],
    };
  },
  methods: {
  },
};
</script>

<style>
html {
  background-color: #262626;
  color: white;
}
#nav {
  text-decoration: none;
}
</style>
