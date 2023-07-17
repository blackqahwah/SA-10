<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/login.vue'
</script>

<template>
  <header class="d-flex flex-column justify-content-center align-items-center">

    <div>
    <img alt="SA logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
   </div>

    
    <div class="wrapper text-center">
      <HelloWorld msg="Anyone can learn Arabic" />
    </div>

    <hr class="mt-4">
    
  </header>

  <main>
    <LogIn/>
  </main>
</template>

<style scoped>

  
header {
  line-height: 1.5;
}

  hr{

   color: #103975 !important;
    width: 55vw;
    
  }


</style>
