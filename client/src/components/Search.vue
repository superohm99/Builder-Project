<script setup>
import Header from './Header.vue';
</script>


<template>
    <Header></Header>

    <div class="search-bar">

    </div>
    
    <div class="main">

        <div class="search-menu">
    
        </div>

        <div class="search-content">

        </div>

    </div>



  </template>
  
<script>
  export default {
    name: 'Search'
  }
</script>

<style scoped>
    .search-bar {
        margin-top: 2%;
        margin-left: 15%;
        width: 73vw;
        height: 7vh;
        background-color: rgb(36, 37, 38);
        border-radius: 1%;
    }

    .main {
        display: flex;

    }

    .search-menu {
        margin-top: 2%;
        margin-left: 2%;
        width: 20vw;
        height: 60vh;
        background-color: rgb(36, 37, 38);
        /* background-color: rgb(255, 255, 255); */
        border-radius: 1%;
    }

    .search-content {
        margin-top: 2%;
        margin-left: 2%;
        width: 73vw;
        height: 100vh;
        background-color: rgb(36, 37, 38);
        border-radius: 1%;
    }

</style>

  