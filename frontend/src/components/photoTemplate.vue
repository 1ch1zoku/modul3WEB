<template>
    <li>
        <h3>Id: {{ bk.id}}</h3>
      <h3>Автор: {{ bk.author}}</h3>
      <h3>Назва: {{ bk.name }}</h3>
      <h3>Опис: {{ bk.description }}</h3>
      <h3>URL: {{ bk.url }}</h3>
      <h3>Хештеги: {{ bk.list_hashtags }}</h3>
      <h3>Дата опублікування: {{ bk.date }}</h3>
      <h3>К-сть лайків: {{ bk.count_likes }}</h3>
      <h3>Коментарі: {{ bk.list_comments }}</h3>
    </li>
  
</template>

<script>
export default {
    name:"photoTemplate", 
    props:{
        bk: Object
    },
    data(){
      return {
      }
    }
}
</script>

<style scoped>
</style>