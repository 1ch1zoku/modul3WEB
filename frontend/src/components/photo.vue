<template>
<div class="photo"> 
  <ul>
    <photo-template v-for="(b, i) in photo" :key="i" class="photo" v-bind:bk="b"></photo-template>
  </ul>
</div>

</template>

<script>
import photoTemplate from './photoTemplate.vue';
import axios from "axios";
export default{
    name:"photo", 
    components:{
      photoTemplate,
      
    },
    data(){
      return {
        photo:[],
      }
    },
    async mounted(){
    try{
      this.photo=(await axios.get("http://localhost:7000/api/photo")).data
    } catch(err){
      console.log(err);
    }
  }
};
</script>

<style>
body{
  background-color:aquamarine;
  background-size: 100%;
  text-align: center;
}

</style>