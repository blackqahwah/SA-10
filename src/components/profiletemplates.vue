<template>

  <div class="d-flex flex-column align-items-center p-4">

    <div class="d-flex flex-row align-items-center">

            <div class="dowl btn btn-primary me-2" href="#">Back to learning</div>

            <div class="dowl btn btn-primary me-2" href="#">Share with friends</div>


    </div>

     <div class="card d-flex flex-column align-items-left justify-content-center p-3 mt-4">

       

         <div class="d-flex flex-row mb-3">

           
         <h2 class="moduleTitle me-2" > <slot name="name"></slot>
          </h2>

           <h4 class="card p-1 moduleTitle"> <slot name="thename"></slot></h4>
           
         </div>  

       <div class="d-flex flex-row mb-3">


        <h2 class="moduleTitle me-2" > <slot name="regno"></slot>
         </h2>

          <h4 class="card p-1 moduleTitle"> <slot name="theregno"></slot></h4>

        </div> 

       <div class="d-flex flex-row mb-3">
         <h2 class="moduleTitle me-2" > <slot name="mycourses"></slot>
          </h2>
         
         <div class="d-flex flex-row mb-1">
           <h4 class="moduleTitle card p-1 me-2" > <slot name="courseone"></slot>
           </h4>

           <h4 class="moduleTitle card p-1" > <slot name="coursetwo"></slot>
            </h4>
           
           </div>
         
       </div>

       <div class="d-flex flex-row">

         <h2 class="moduleTitle me-2" > <slot name="certificates"></slot>
          </h2>

         <div class="d-flex flex-row mb-1">
          <h4 class="moduleTitle card p-1 me-2" > <slot name="courseone"></slot>
          </h4>

          <h4 class="moduleTitle card p-1" > <slot name="coursetwo"></slot>
           </h4>

          </div>
       </div>
        

       
   </div>

    <div class="d-flex flex-row mt-4 align-items-center">
     <div class="dowl btn btn-primary me-2"> <slot name="downloadprofilebtn"></slot></div>
    <div class="dowl btn btn-primary"> <slot name="shareprofilebtn"></slot></div>
    </div>

    
</div>
  
 
</template>

<style scoped>


  .moduleTitle{

     /* font-size: 1.5rem; */
     color: #103975;
    font-weight: lighter;

  }

  .dowl{

  background-color: #103975;
  border: none !important;
  color: #fac8ef;
  }


</style>
