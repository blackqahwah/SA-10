<!-- ChildComponent.vue -->
<template>
     
     <div class="d-flex flex-column align-items-center justify-content-center p-2">

     <div id="slidea" class="card d-flex flex-column align-items-center  p-3 ">

       <div class="d-flex flex-row mb-3 align-self-start 
       align-items-center justify-content-center">


         <i class=" me-2 ">
             <slot name="doneicontwo"></slot>
           </i>

         <h1 class="moduleTitle fw-normal mt-1" > <slot name="moduleTitletwo"></slot>
         </h1>

           <h1 class="moduleTitle fw-medium" > <slot name="moduleTitletwodeep"></slot>
         </h1>


         </div>

        <div class="align-self-start mb-4">


        <h5 class="moduleTopic  fw-normal p-3">
          <slot name="moduleTopictwo"></slot>
        </h5>


           </div>

        <div class="align-self-start mb-4">


        <h5 class="moduleTopic  fw-normal p-3">
          <slot name="moduleTopictwo"></slot>
        </h5>


           </div>

        <div class="align-self-start mb-4">


        <h5 class="moduleTopic  fw-normal p-3">
          <slot name="moduleTopictwo"></slot>
        </h5>


           </div>


       
   </div>
  
   </div>

</template>

<style scoped>

  i {

    font-size: 1.3rem; 
    color: #103975 ;

  }



  .moduleTitle{

     font-size: 1.5rem;
     color: #103975;

  }

  .moduleTopic{

    font-size: 1.2rem;
    color: #103975 ;
    background-color: #fac8ef; 
    line-height: 1.6em;

  }


 .prev, .next{

    background-color: #103975;
    border: none !important;
    color: #fac8ef;

  }



 .begin{

    background-color: #103975;
    border: none !important;
    color: white;

  }


  .introTitles{
   color: #103975;
  }



/* @media (min-width: 1024px) {

   .form-control {

  width: 25vw !important;

  }


} */
</style>
