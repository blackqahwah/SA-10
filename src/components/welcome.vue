<script setup>
  
import titleandtopic from './titntop.vue'

</script>

<template>

  <div>

  <titleandtopic>
  
<template #doneicon>

  <i class="bi bi-stars "></i>
  
</template>
    
<template #moduleTitle>As salamu alaykum</template>

<template #moduleTopic>Welcome to the Arabic Writing Course for Beginners.</template>

<template #doneicontwo>
  <i class="bi bi-caret-right-fill"></i>
</template>

     <template #moduleTitletwo>A Quick overview of the course </template>

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

    
    <template #prev> Back
      
    </template>

    
    <template #next>Next
      
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

    <template #lastprev> Back
      
    </template>

    
    <template #lastnext>Begin
      
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

//     if (isSignInWithEmailLink(auth, window.location.href)) {
  
//   let email = localStorage.getItem(this.useremail);
//   if (!email) {
    
//     window.prompt('Please provide your email for confirmation');
//   }
  
//   signInWithEmailLink(auth, this.email, window.location.href)
    
//     .then((result) => {
   
//       window.localStorage.removeItem(this.useremail);
      
//     })
//     .catch((error) => {

//       const errorCode = error.code;
//     const errorMessage = error.message;
    
//     console.log(errorCode, errorMessage)

//       console.log('no email found')
      
//     });
// }

  
</script>

      