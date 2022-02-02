<template>
  <main class="library">
  <p>Detta är librarypage</p>

  <router-link v-for="book of childrensBooks" :key="book.Title" :to="{name: 'SingleBook', params:{id:book}, 
  props:{plot:book.plot}}">
  {{book.Title}}
  </router-link> |

  <router-view></router-view>
  </main>

</template>

<script>

import ChildrensBooks from '../../src/ChildrensBooks.json'
export default {
    
    data(){return{
      childrensBooks: [...ChildrensBooks]
    }},
    mounted(){
      console.log(this.childrensBooks)
    }
}
</script>

<style>

</style>