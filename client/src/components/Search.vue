<script setup>
import { ref } from 'vue';
import img2 from '@/assets/img1.jpg';
import Header from './Header.vue';

const searchQuery = ref(''); 
</script>

<template>
  <Header></Header>

  <div class="search-bar">

    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="" 
      class="search-input"
    />

    <input class="search-submit" type="button" value="SEARCH" />
  </div>
  
  <div class="main">
    <div class="search-menu">
 
    </div>

    <div class="search-content">

        <div class="search-card">

        
            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>

        <div class="search-card">

            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>

        <div class="search-card">

            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>


        <div class="search-card">

            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>


        <div class="search-card">

            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>

        <div class="search-card">

            <img :src="img2" class="card-img"/>
            <div class="card-detail">

            </div>

        </div>

    </div>

  </div>


</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style scoped>
/* สไตล์ของ search bar */
.search-bar {
  margin-top: 2%;
  margin-left: 24%;
  width: 73vw;
  height: 7vh;
  /* background-color: rgb(36, 37, 38); */
  border-radius: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-submit {
  color: white;
  cursor: pointer;
  background-color: rgb(98, 177, 226);
  font-size: large;
  font-weight: bold;
  margin-left: 20px;
  height: 70%;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid rgb(98, 177, 226); 
  border-radius: 50px; 
  text-transform: uppercase; 
  font-family: 'Courier New', Courier, monospace;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease; 
}


.search-submit:hover {
  background-color: lightskyblue; 
  border-color: lightskyblue; 
  transform: translateY(-3px); 
}


.search-submit:active {
  background-color: deepskyblue; 
  border-color: deepskyblue; 
  transform: translateY(2px); 
}


.search-input {
  width: 50vw;
  height: 70%;
  padding: 0 15px;
  border: 1px solid #2b2a2a;
  background-color: #333;
  color: white;
  font-size: 1.1em;
}

.search-input::placeholder {
  color: #bbb;
}

/* เพิ่มแถบค้นหาด้วย border-focus เมื่อ input ถูกเลือก */
.search-input:focus {
  border-color: lightskyblue;
  outline: none;
  transition: border-color 0.3s ease;
}

.main {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

/* การตั้งค่าขนาดและรูปแบบของ search menu และ content */
.search-menu {
  margin-left: 2%;
  width: 20vw;
  height: 60vh;
  /* background-color: rgb(36, 37, 38); */
  border: 3px solid rgb(36, 37, 38);
  /* border-radius: 1%; */
  border-radius: 35px;
}

.search-content {
  margin-left: 2%;
  width: 70vw;
  height: 100vh;
  /* background-color: rgb(36, 37, 38); */
  border-radius: 1%;
  padding: 30px;
  color: white;
  display: flex;
  flex-wrap: wrap;
}

.search-card {
    width: 20vw;
    height: 40vh;
    /* background-color: #333; */
    border: 2px solid rgb(36, 37, 38); 
    cursor: pointer;
    margin-left: 25px;
    border-radius: 35px;
}


.search-card :hover {
    border-bottom: 2px solid lightskyblue; 
}

.search-card::after {
    content: ''; 
    position: absolute;
    bottom: -3px; 
    left: 0;
    width: 0; 
    height: 2px; 
    background-color: lightskyblue; 
    border-bottom: 2px solid lightskyblue;
    transition: width 0.3s ease; 
}

/* .search-card:hover::after {
    width: 100%;
} */

.card-detail {
    margin-top: 0px;
    position: relative;
    width: 100%;
    height: 35%;
    /* background-color: #ffffff; */
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    /* border: 2px solid rgb(36, 37, 38);  */
}

.card-img {
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    margin-bottom: 0px;
    position: relative;
    top: 0%;
    width: 100%;
    height: 65%;
}

</style>
