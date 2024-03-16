<script setup>

  const props = defineProps({
    content: Object
  })

  import buttons from './buttons.vue'

</script>

<template>

<div class="d-flex flex-column align-items-center justify-content-center container">
   
  
  
     <h1 class="greeting mb-2 fw-normal text-center">{{ content.text }}<slot name="greetings"></slot></h1>
        
      <h5 class="infotwo mb-2 fw-normal text-center">{{ content.text }}<slot name="anotherinfo"></slot></h5>



    </div>

  </template>

<style scoped>

  /* .i {

    font-size: 3rem; 
    color: #103975 ;
    
  }
 */
  .greeting{

     font-size: 1.5rem;
     color: #103975 ;
  }



  

  .infotwo{

     font-size: 1rem;
     color: #103975 ;
  }




  .createbtn{

     background-color: #103975 ;
  }




  
@media (min-width: 1024px) {
 
   .form-control {

  width: 25vw !important;
     
  }

 
}
</style>

