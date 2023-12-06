<script setup>

import { ref } from 'vue'; 
import infosection from './info.vue';

const isDone = ref(false);

  
</script>

<template>

  <infosection>

  <template #doneicon>
      <i class="bi bi-check-all"></i>
    </template>

     <template #spareinfo v-if="isDone">

        All done! 
       
      </template>

    
    <template #greetings>All done! </template>
    
    <template #aninfo>Your profile has been created</template>
    <template #anotherinfo>Please check your email to gain access</template>
    
  </infosection>
  
  
</template>




  

<style scoped>

  /* .greeting {
    font-size: 2rem !important;
  }

   .infotwo, .infoone{
    display:flex !important;
      font-size: 1.3rem !important;
     
  }

  .done{
    display:flex !important;
  }
 */
 


  
</style>