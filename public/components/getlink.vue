<script setup>
  
import infosection from './info.vue'
  
</script>

<template>

  <infosection>

  <template #doneicon>
      <i class="bi bi-check-all"></i>
    </template>

    <template #greetings>Shukran, First Name </template>
    
    <template #aninfo>Your profile has been created!</template>
    <template #anotherinfo>Please check your email to gain access</template>
    
  </infosection>
  
  
</template>

<style>

  .spareinfo{
    display:none;
  }

  .greeting {
    font-size: 2rem !important;
  }

   .infotwo, .infoone{
    display:flex;
      font-size: 1.3rem !important;
     
  }

  .done{
    display:flex !important;
  }

 


  
</style>