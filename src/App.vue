<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Library">Library</router-link>
      <router-link to="/ReadingList">Reading List ({{readingListLength}})</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    readingListLength(){
      return this.$store.state.ReadingList.length
    }
  }
};
</script>

<style>
html {
  background-color: #181717;
  color: white;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
#nav {
  text-align: center;
  padding: 1rem;
}

a {
  font-weight: bold;
  color: #bfc5cc;
  text-decoration: none;
  padding: 1rem;
  }
</style>
