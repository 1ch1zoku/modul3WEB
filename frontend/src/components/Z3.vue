<template>
<div> 
    <input type="button" value="Вивести інформацію про фото " @click="infoByPhoto"/>
   
      <ul>
    <photo-template v-for="(b, i) in photo" :key="i" class="photo" v-bind:bk="b"></photo-template>
  </ul>
</div>
</template>

<script>
import photoTemplate from './photoTemplate.vue';
import storage from '../storage';
export default{
    name:"z3", 
    components:{
      photoTemplate,
      
    },
    data(){
      return {
        photo:storage.photo,
      }
    },
     methods: {
    infoByPhoto(){
      this.photo.sort((photo1, photo2) =>  photo1.author>photo2.author?1:-1);
    },
    
     }
};
</script>