<script setup>
import HelloWorld from './HelloWorld.vue'
import formbar from './formstruct.vue'
  
</script>

<template>
  
  
  <formbar >


    

     <template #nudge>
<i class="i bi bi-lightbulb-fill"></i>
        Anyone can learn Arabic
      
    </template>
    
    
    
    <template #nameicon>
      
    </template>
    
    <template #namelabel>Your Name</template>

 <template #inputname></template>

    

  <template #emailicon>
     
    </template>
    
        <template #emaillabel>Your Email Address</template>

 <template #inputemail></template>




     <template #gendericon>
     
    </template>
    
        <template #genderlabel>Your Gender</template>

 <template #inputgender></template>

    
    

      <template #countryicon>
      
    </template>
    
        <template #countrylabel>Your Country </template>

 <template #inputcountry></template>

    <template  #subm> Create Profile </template>
    
      

   
  </formbar>


 
  
</template>


<style>

  .blue{
    display:none;
  }

    .i {

    font-size: 1rem; 
    color: #103975 ;
    
  }

  .nudge {

    color: #103975;
  }

</style>

