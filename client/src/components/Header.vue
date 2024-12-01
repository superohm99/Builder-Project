<script setup>
import { ref } from 'vue';
import logo from '@/assets/home.png';

const heads = ref([
  { id: 0, text: 'Home', path: '/' },
  { id: 1, text: 'Search', path: '/search' },
  { id: 2, text: 'About Us', path: '/about' },
  { id: 3, text: 'Reviews', path: '/reviews' },
  { id: 4, text: 'Contact', path: '/contact' },
]);
</script>

<template>
  <div class="headers">
    <div class="img-logo">
      <img :src="logo" alt="Logo" />
      <p>
        <span class="white-text">Lucky</span>
        <span class="green-text">Land</span>
      </p>
    </div>

    <div class="head">

      <router-link
        v-for="item in heads"
        :key="item.id"
        :to="item.path"
        class="nav-link"
      >
        {{ item.text }}
      </router-link>
    </div>

    <div class="head-profile">
      <router-link class="nav-link">Sign In</router-link>
      <router-link class="nav-link">Sign Up</router-link>
    </div>
  </div>
</template>

<style scoped>
.img-logo {
  width: 50px;
  display: flex;
  position: absolute;
  margin-left: 10%;
}

.img-logo img {
  width: 50px;
  margin-left: 10%;
  margin-top: 10px;
}

.img-logo p {
  font-size: large;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  color: white;
  position: relative;
  margin-left: 10%;
  margin-top: 20px;
}

.white-text {
  color: white;
}

.green-text {
  color: lightskyblue;
}

.head {
  margin-top: 30px;
  margin-left: 32%;
  padding-left: 4%;
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  flex-wrap: wrap;
  width: 35%;
}

.nav-link {
  margin-right: 30px;
  font-size: large;
  font-weight: 600;
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none; 
  position: relative; 
}

.nav-link:hover {
  color: lightskyblue; 
}

.nav-link::after {
  content: ''; 
  position: absolute;
  bottom: -3px; 
  left: 0;
  width: 0; 
  height: 2px; 
  background-color: lightskyblue; 
  transition: width 0.3s ease; 
}

/* เพิ่มแอนิเมชันเมื่อ hover */
.nav-link:hover::after {
  width: 100%; 
}


.head-profile {
  position: absolute;
  top: 30px;
  right: 0;
  padding-left: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
  width: 15%;
}


</style>
