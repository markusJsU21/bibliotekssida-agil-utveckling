<template>
  <div id="app">
    <p>test</p>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> 
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
};
</script>

<style>
html {
  background-color: #181717;
  color: white;
}
#nav {
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 36px;
  background-color: rgb(100, 95, 95);
  color: white;
}
</style>
