<template>

<div class="d-flex flex-column align-items-center justify-content-center p-2">


<div id="slidea" class="carousel slide card d-flex flex-column align-items-center  p-3 ">

  <div class="carousel-inner mb-4">

  <div class="carousel-item active">

<div class="d-flex flex-column align-items-center justify-content-center">
  
  <div class="d-flex flex-row mb-4 align-self-start align-items-center justify-content-center">

    
  <i class="me-2">
      <slot name="doneicon"></slot>
    </i>
    
  <h1 class="moduleTitle fw-normal" > <slot name="moduleTitle"></slot>
  </h1>

    
  </div>

   
  <div class="align-self-start mb-4">

      
 <h5 class="moduleTopic  fw-normal p-3">
   <slot name="moduleTopic"></slot>
 </h5>

      
    </div>

   <button class="align-self-end  next carousel-control-next  btn btn-primary fw-medium carousel-control-next-icon" data-bs-target="#slidea" type="button" data-bs-slide="next">

        <slot name="next"></slot>
          
        </button>

</div>

  </div>

  <div class="carousel-item">

     <div class="d-flex flex-column  ">
    
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

<div class="accordion mb-4" id="intro">
  
  <div class="accordion-flush accordion-item">
    
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed introTitles fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#businessWritingIntro" aria-expanded="false" aria-controls="businessWritingIntro">
        <slot name="businessWriting"></slot>
      </button>
    </h2>
    
    <div id="businessWritingIntro" class="accordion-collapse collapse" data-bs-parent="#intro" aria-labelledby="headingOne">
      <div class="accordion-body"> <slot name="businessWritingIntro"> </slot> </div>
    </div>
    
  </div>

  <div class="accordion-item">
    
    <h2 class="accordion-header">
      <button  class="accordion-button collapsed introTitles fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#essayWritingIntro" aria-expanded="false" aria-controls="essayWritingIntro">
        <slot name="essayWriting"></slot>
      </button>
    </h2>
    
    <div id="essayWritingIntro" class="accordion-collapse collapse" data-bs-parent="#intro">
      <div class="accordion-body"> <slot name="essayWritingIntro"> </slot> </div>
    </div>
    
  </div>

  <div class="accordion-item">
    
    <h2 class="accordion-header">
      <button class="accordion-button collapsed introTitles fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#poetryIntro" aria-expanded="false" aria-controls="poetryIntro">
        <slot name="poetry"></slot>
      </button>
    </h2>
    
    <div id="poetryIntro" class="accordion-collapse collapse" data-bs-parent="#intro">
      <div class="accordion-body"> <slot name="poetryIntro"> </slot> </div>
    </div>
    
  </div>

  <div class="accordion-item">
    
    <h2 class="accordion-header">
      <button class="accordion-button collapsed introTitles fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#assesmentInfo" aria-expanded="false" aria-controls="assesmentInfo">
        <slot name="assesment"></slot>
      </button>
    </h2>
    
    <div id="assesmentInfo" class="accordion-collapse collapse" data-bs-parent="#intro">
      <div class="accordion-body"> <slot name="assesmentInfo"> </slot> </div>
    </div>
    
  </div>

  
</div>
       

  <div class="d-flex flex-row justify-content-between p-2">

    
<button class="prev carousel-control-prev btn btn-primary fw-medium carousel-control-prev-icon" data-bs-target="#slidea" type="button" data-bs-slide="prev">

        <slot name="prev"></slot>
          
        </button>

    
<button class="next carousel-control-next  btn btn-primary fw-medium carousel-control-next-icon" data-bs-target="#slidea" type="button" data-bs-slide="next">

        <slot name="next"></slot>
          
        </button>

 

  </div>

     </div>

  </div>
  
  <div class="carousel-item">

<div class="d-flex flex-column">
  
  <div class="d-flex flex-row mb-3 align-self-start align-items-center justify-content-center">

    
  <i class="me-1">
      <slot name="titleicon"></slot>
    </i>
    
  <h1 class="moduleTitle fw-normal mt-2" > <slot name="moduleTitleThree"></slot>
  </h1>

    
  </div>

   
  <div class="align-self-center mb-4">

      
 <h5 class="moduleTopic  fw-normal p-3">
   <slot name="moduleTopicThree"></slot>
 </h5>

      
    </div>


    <div class="align-self-center mb-4">

      
 <div class="alist fw-normal">

<ul class="list-group">
  <li class="list-group-item"> <slot name="itemone"></slot></li>
   <li class="list-group-item"> <slot name="itemtwo"></slot></li>
  <li class="list-group-item"> <slot name="itemthree"></slot></li>
  <li class="list-group-item"> <slot name="itemfour"></slot></li>
</ul>
   


   
 </div>

      
    </div>


  

   <!--<button class="align-self-end  next carousel-control-next  btn btn-primary fw-medium carousel-control-next-icon" data-bs-target="#slidea" type="button" data-bs-slide="next">

        <slot name="next"></slot>
          
        </button>-->

   <div class="d-flex flex-row justify-content-between p-2">

    
<button class="prev align-self-start  carousel-control-prev btn btn-primary fw-medium carousel-control-prev-icon" data-bs-target="#slidea" type="button" data-bs-slide="prev">

        <slot name="lastprev"></slot>
          
        </button>

    
<button class="begin align-self-end carousel-control-next  btn btn-primary fw-medium carousel-control-next-icon" data-bs-target="#slidea" type="button" data-bs-slide="next">

        <slot name="lastnext"></slot>
          
        </button>

 

  </div>

   

</div>

  </div>



    

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


  .dowl{

  background-color: #103975;
  border: none !important;
  color: #fac8ef;
  }

</style>


