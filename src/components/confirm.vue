
<template>


  <form  @submit.prevent="codeSeen(); sendVerificationEmail(); nextNow();" class="d-flex flex-column justify-content-center align-items-center">


    

        <h2 class="form-text text-center mb-2">
          Please input your Teller Code to confirm your payment.
        </h2>
        
      
     
  
<div class="d-flex flex-row">
      
    <i class="bi bi-geo-alt-fill me-2">
      <slot name="codeicon"></slot>
    </i>
 
      
      <label for="code" class="form-label">
        
      <h4>Your code here</h4>
      
      </label>
        
     
</div>

      <div>
      <input  v-model="paidCode"  type="text" class="form-control mb-4" id="code">
      </div>

      <div >
     
        <button type="submit" class="btn btn-primary mt-3 fw-medium"> confirm
          </button>
       
      </div>
      

   </form>

  
</template>


<script>


import { getAuth, sendSignInLinkToEmail  } from "firebase/auth";
  import {ref} from 'vue'

export default {
  
  data() {
    return {
      paidCode: '',
    };
  },

 

  methods: {
    
 codeSeen() {

       const confCodes = [ "paid1345", "paid40942", "paid24729", "paid20820"];
   
     if (confCodes.includes(this.paidCode)) {
       
       console.error('code matches');
     localStorage.setItem("code", this.paidCode);
     localStorage.setItem('token', 'validToken');
     } else {
       console.error('invalid code');
     }
 },
    
 sendVerificationEmail() {

   const actionCodeSettings = {
     url:'https://speakarabic.web.app/welcome',
     handleCodeInApp: true
};
  
   const auth = getAuth();

  let email = window.localStorage.getItem('emailForSignIn');
     
   sendSignInLinkToEmail(auth, email, actionCodeSettings)
     
  .then(() => {

   
    console.log('sent!')
  })
    
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorCode, errorMessage)
  
  });

  },

nextNow() {
  this.$router.push({ name: 'getlink' })
    console.log("get the link");
}

  // submitForm() {
  //   this.codeSeen();
  //   this.sendVerificationEmail();
  //   this.nextNow();
  // }

  // submitNow() {
  //  console.log('Form is being submitted');
  //  try {
  //    this.codeSeen();
  //    this.sendVerificationEmail();
  //    this.nextNow();
  //  } catch (error) {
  //    console.error('Error in submitForm:', error);
  //  }
  // }


  }
}


    </script>

   