<template>
  <main class="library">
  <p>{{childrensBooks}}</p>
<SingleBookView />
  
  </main>

</template>

<script>
import SingleBookView from '../components/SingleBookView.vue'
import ChildrensBooks from '../../src/ChildrensBooks.json'
export default {
    components:{SingleBookView},
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