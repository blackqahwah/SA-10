<script setup>
  
import titleandtopic from './titntop.vue'

</script>

<template>

  <div>

    <div class="d-flex flex-column align-items-center p-4">

    <div class="d-flex flex-row align-items-center">

            <div class="dowl btn btn-primary me-2" href="#">My profile</div>

            <div class="dowl btn btn-primary me-2" href="#">Share with friends</div>
    </div>
    </div>
    

  <titleandtopic>
  
<template #doneicon>

  <i class="bi bi-stars "></i>
  
</template>
    
<template #moduleTitle>As salamu alaykum</template>

<template #moduleTopic>Welcome to the Arabic Writing Course for Beginners.</template>

<template #doneicontwo>
  <i class="bi bi-caret-right-fill"></i>
</template>

     <template #moduleTitletwo>Quick overview of the course </template>

     <template #moduleTopictwo>The Arabic writing course has four sections.
     </template>


    <template #businessWriting> BUSINESS WRITING</template>
    
    <template #businessWritingIntro> hoajdaojad</template>

    <template #essayWriting> ESSAY WRITING</template>

    <template #essayWritingIntro> hoajdaojad</template>

    <template #poetry> POETRY</template>

    <template #poetryIntro> hoajdaojad</template>
    
    <template #assesment> FINAL ASSESSMENT</template>

    <template #assesmentInfo> hoajdaojad</template>

    
    <template #prev> 
      <i class="bi bi-caret-right-fill"></i>
    </template>

    
    <template #next>
      <i class="bi bi-caret-right-fill"></i>
    </template>

    <template #titleicon>
  <i class="bi bi-caret-right-fill"></i>
</template>

     <template #moduleTitleThree>Finally, here are a few things to note:</template>

     <template #moduleTopicThree>The Arabic writing course has four sections.
     </template>


      <template #itemone>The Arabic writing course has four sections. 
     </template>
     <template #itemtwo>Section one
     </template>
     <template #itemthree>Section two
     </template>
         <template #itemfour>Section two
     </template>

    <template #lastprev> 
      <i class="bi bi-caret-right-fill"></i>
    </template>

    
    <template #lastnext>
      <i class="bi bi-caret-right-fill"></i>
    </template>

    
  </titleandtopic>

    
    
  </div>

   
  
</template>


    
<style>

  /* .moduleTitle {

    font-weight: light !important;
    display:none !important;
  } */
  
</style>


<script>


  
// import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../firebase";
import router from "../router";
// import {formToStorage} from './formstruct.vue' 


  export default {
    

  // mixins: [formToStorage],

  
 
    components: {
    titleandtopic,
  }
  
  }

  
</script>

      