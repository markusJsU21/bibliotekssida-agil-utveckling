<template>
  <main class="library">
  <p>Detta är librarypage</p>
  
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