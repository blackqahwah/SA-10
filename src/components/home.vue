<script setup>
import { ref } from 'vue'; 
  
import infosection from './info.vue'
import buttons from './buttons.vue'
import profile from './profile.vue'

  
const isDone = ref(false);

  const cardOne = ref([
    { id: 0, text: '' },
  ])

  const cardTwo = ref([
    { id: 0, text: '' },
  ])

  const cardThree = ref([
    { id: 0, text: '' },
  ])

  const cardFour = ref([
    { id: 0, text: '' },
  ])

  const cardFive = ref([
    { id: 0, text: '' },
  ])

</script>



<template>

  <div class="d-flex flex-column align-items-center justify-content-center container vh-100">
    
  <div class="d-flex flex-column align-items-center p-2">
  <infosection
    v-for="item in cardOne"
    :content="item"
    :key="item.id">
    <template #greetings> Welcome to the Arabic Writing Course </template>
  </infosection>

<buttons link="/profile">
  <template #abtn>Create Profile</template>
</buttons>
  </div>

  <div class="d-flex flex-column align-items-center p-2">
    <infosection
      v-for="item in cardThree"
      :content="item"
      :key="item.id">
      <template #greetings> Already enrolled? </template>
    </infosection>

    <buttons link="/confirm">
      <template #abtn>Login</template>
    </buttons>
  </div>

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