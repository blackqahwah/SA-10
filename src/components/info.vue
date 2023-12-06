<script setup>

  import buttons from './buttons.vue'

</script>

<template>

<div class="d-flex flex-column align-items-center justify-content-center container">

    <div class="i mb-3 done">
      <slot name="doneicon"></slot>
    </div>


  <h2 class="spareinfo mb-3 fw-light text-center"><slot name="spareinfo"></slot></h2>
  
     <h1 class="greeting mb-3 fw-normal text-center"> <slot name="greetings"></slot></h1>
        
      <h2 class="infoone mb-3 fw-light text-center"><slot name="aninfo"></slot></h2>
  
      <h5 class="infotwo mb-3 fw-normal text-center" ><slot name="anotherinfo"></slot></h5>



    </div>

  </template>

<style scoped>

  .i {

    font-size: 3rem; 
    color: #103975 ;
    
  }

  .greeting{

     font-size: 1.5rem;
     color: #103975 ;
  }

  .infoone, .spareinfo{

    font-size: 1.5rem;
    color: #103975 ;
    padding: 0.5rem;
    background-color: #fac8ef; 
    
  
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

