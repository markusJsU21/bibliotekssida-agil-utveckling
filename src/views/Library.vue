<template>
  <main class="library">
  <p>LIBRARY</p>

  <router-link v-for="book of childrensBooks" :key="book.Title" :to="{name: 'SingleBook', params:{id:book}, 
  props:{plot:book.plot}}" >
  {{book.Title}}
  </router-link> |
  </main>
</template>

<script>
import ChildrensBooks from '../../src/ChildrensBooks.json'
export default {
    data(){return{
      childrensBooks: [...ChildrensBooks], 
      readingList: [],
    }},
    created(){
      this.readingList = this.$route.params.id;
    },
}
</script>

<style>

</style>