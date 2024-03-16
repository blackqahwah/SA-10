<script setup>

import { ref } from 'vue'; 
import infosection from './info.vue';

// const isDone = ref(false);
  const cardOne = ref([
    { id: 0, text: '' },
  ])

  const cardTwo= ref([
    { id: 0, text: '' },
  ])


  const cardThree = ref([
    { id: 0, text: '' },
  ])

  
</script>

<template>

  <infosection v-for="item in cardOne"
    :content="item"
    :key="item.id">
    <template #anotherinfo>All done! </template>
  </infosection>

  <infosection v-for="item in cardTwo"
    :content="item"
    :key="item.id">
    <template #anotherinfo>Your profile has been created</template>
  </infosection>

  <infosection v-for="item in cardThree"
    :content="item"
    :key="item.id">
    <template #anotherinfo>Please check your email to gain access. Check your spam folder just in case.</template>
  </infosection>
  
  
</template>



<style scoped>

  /* .greeting {
    font-size: 2rem !important;
  }*/

   /* .infotwo{
    display:flex !important;
      font-size: 3rem !important;
  } */

  /* .done{
    display:flex !important;
  }
  */
 


  
</style>