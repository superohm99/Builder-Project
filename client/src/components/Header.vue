<script setup>
import {ref} from 'vue';
import logo from '@/assets/home.png';
const heads = ref([
    {id: 0, text: 'Home'},
    {id: 1, text: 'Search'},
    {id: 2, text: 'About Us'},
    {id: 3, text: 'Reviews'},
    {id: 4, text: 'Contact'},
]);


</script>

<template>
    <div class="img-logo">
        <img :src="logo" alt="Logo" />
        <p>
        <span class="white-text">Lucky</span>
        <span class="green-text">Land</span>
        </p>
    </div>


    <div class="head">
            <p v-for="item of heads">{{item.text}}</p>
    </div>

    <div class="head-profile">
        <p class="white-text">Sign In</p><p class="white-text">Sign Up</p>
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
        font-weight:bolder;
        color: white;
        position: relative;
        margin-left: 10%;
        margin-top: 20px;
    }

    .white-text {
    color: white;
    }

    .green-text {
    color: greenyellow;
    }


    .head {
        margin-top: 30px;
        margin-left: 32%;
        padding-left: 4%;
        padding-top: 1%;
        padding-bottom: 1%;
        display: flex;
        flex-wrap: wrap;
        /* background-color: rgb(29, 29, 29); */
        width: 35%;


    }

    .head p {
        margin-right: 30px;
        font-size: large;
        font-weight:600;
        /* color:cornflowerblue; */
        color: whitesmoke;
        cursor: pointer;
    }

    .head-profile {
        position: absolute;
        top: 30px;
        right: 0;
        padding-left: 1%;
        padding-top: 1%;
        padding-bottom: 1%;
        margin-right: 5%;
        /* background-color: rgb(29, 29, 29); */
        display: flex;
        flex-wrap: wrap;
        width: 15%;
     
    }

    .head-profile p {
        margin-right: 30px;
        font-size: large;
        font-weight:600;
        cursor: pointer;
    }
</style>


