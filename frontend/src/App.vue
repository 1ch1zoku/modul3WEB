<template>
<div>
<nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/Z1">1</router-link>
    <router-link to="/Z2">2</router-link>
    <router-link to="/Z3">3</router-link>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:"App", 
    data(){
      return {
    }
    }
}
</script>

<style>
</style>