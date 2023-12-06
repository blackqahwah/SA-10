<script setup>
  
import infosection from './info.vue'
import buttons from './buttons.vue'
import profile from './profile.vue'


import { ref } from 'vue'; 
const isDone = ref(false);
  
</script>



<template>

  <div class="d-flex flex-column align-items-center justify-content-center container vh-100">
  
  <infosection>

  <template #doneicon>

    <i class="bi bi-geo-fill"></i>
      
    </template>

    <template #spareinfo> Welcome to the Arabic Writing Course </template>
    
    <template #greetings>Please create your profile to begin</template>

    <template #infoone v-if="isDone">Please create your profile to begin</template>
 

  </infosection>

<buttons link="/profile">
    
  <template #abtn>Create Profile</template>

</buttons>


  </div>
  
  
</template>


<style scoped>

  /* .infoone {
    display: none !important;
      
    
  }

   .infotwo {
    display: none !important;
      
  }

 
.spareinfo{

    display: flex !important ;
} */

  
</style>