<script setup>
import img2 from '@/assets/img2.png';
import { ref, onMounted, watch } from 'vue';

const showText = ref(false);
const resetTyping = ref(false);

const startTyping = () => {
  showText.value = false; 
  resetTyping.value = true; 
  setTimeout(() => {
    showText.value = true; 
    resetTyping.value = false;
  }, 100); 
};

watch(showText, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      startTyping(); 
    }, 8000); 
  }
});

onMounted(() => {
  setTimeout(() => {
    showText.value = true; 
  }, 1200); 
});



</script>

<template>
  <div class="main">
    <div class="text-container">
      <div class="page">
        <div class="text-page">
          <h1>Welcome To <br><span class="white-text">Lucky</span><span class="green-text">Land</span></h1>
          <br>
          <!-- ใช้แอนิเมชันแสดงข้อความ -->
          <p v-if="showText" class="typing-animation">We want to create your land.</p>

        </div>

        <div class="img-page"> 
          <img :src="img2" />
          <br><br><br><br><br><br><br><br><br><br>
        </div>

      </div>

      <!-- <div class="page">
        <div class="text-page">
          <h1>Welcome To <br><span class="white-text">Lucky</span><span class="green-text">Land</span></h1>
          <br>
          <p v-if="showText" class="typing-animation">We want to create your land.</p>
        </div>

        <div class="img-page"> 
          <img :src="img2" />
        </div>
      </div> -->

      
    </div>

  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;  
  width: 100%;               
  height: 80vh;            
}

.white-text {
  color: white;
  font-weight: bold;
}

.green-text {
  font-size: larger;
  color: lightskyblue;
  font-weight: bold;
}

.page {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
}

.page h1 {
  font-size: 2rem;
  color: white;
  font-weight: bold;
}

.page p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
}

.page img {
  width: 70vh;
  height: 50vh;
}

.text-page {
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  width: 20%;
}

.text-page p {
  color: aliceblue;
  position: absolute;
  z-index: 10;
}

.img-page img{
  border-radius: 5%;
}

/* แอนิเมชันพิมพ์ข้อความ */
.typing-animation {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #fff; 
  width: 0;
  animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
