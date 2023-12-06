

<template>
  
  <form @submit.prevent="submit(); sendVerificationEmail(); takemeThere();" class="d-flex flex-column justify-content-center align-items-center">


    <div class=" d-flex flex-column align-items-center ">

      
    
          
    <img alt="SA Logo" class="logo mb-4" src="../assets/log1.png" width="50" height="55" />
       
      <h1 class="blue mb-3 fw-medium"> <slot name="msg"></slot></h1>
      <h3 class="nudge fw-normal"><slot name="nudge"></slot></h3>
         <hr class="mb-4">

     
      <div class="d-flex flex-column mt-3">
        
     <div class="d-flex flex-row">
      
    
  <i class="bi bi-info-square-fill me-2">
      <slot name="nameicon"></slot>
    </i>
 
        
      <label for="name" class="form-label">
        
      <slot name="namelabel"></slot>
      
      </label>
        

    </div>

      <div>
        
      <input v-model="username" type="name" class="form-control mb-4" id="name">
        
        <slot name="inputname"></slot>
      
      </div>

        
      <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>
        
        
      </div>
        
       

<div class="d-flex flex-column">
     <div class="d-flex flex-row">
      
    <i class="bi bi-envelope-check-fill me-2">
      <slot name="emailicon"></slot>
    </i>
 
        
      <label for="email" class="form-label">
        
      <slot name="emaillabel"></slot>
      
      </label>
        
     
</div>

      <div>
        
      <input v-model="useremail"  type="email" class="form-control mb-4" id="email">
        
        <slot name="inputemail"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>
</div>


    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
      
    <i class="bi bi-person-badge-fill me-2">
      <slot name="gendericon"></slot>
    </i>
 
        
      <label for="gender" class="form-label">
        
      <slot name="genderlabel"></slot>
      
      </label>
        
     
</div>

       <div>
        
        <select v-model="usergender"  class="form-control mb-4" id="gender">

 <option value="1">Please select an option</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
  </select>
        
<slot name="inputgender"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>
    </div>

    <div class="d-flex flex-column">

    <div class="d-flex flex-row">
      
    <i class="bi bi-geo-alt-fill me-2">
      <slot name="countryicon"></slot>
    </i>
 
        
      <label for="country" class="form-label">
        
      <slot name="countrylabel"></slot>
      
      </label>
        
     
</div>

      <div>
        
      <input v-model="usercountry"  type="country" class="form-control mb-4" id="country">
        
        <slot name="inputcountry"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>

      
      <div >

     

        <button class="subm btn btn-primary mt-3 fw-medium">

        <slot name="subm"></slot>
          
        </button>
       
   
      </div>

    </div>

    

     </div>

    
    </form>

  
</template>






<script>


import { getAuth, sendSignInLinkToEmail  } from "firebase/auth";
  import {ref} from 'vue'

export const formToStorage = {
  
  data() {
    return {
      username: "",
      useremail: "",
      usergender:["male", "female"],
      usercountry: ""
    };
  },

   mounted() {
    
    if (localStorage.username && localStorage.useremail && localStorage.usergender && localStorage.usercountry) 
    {
      this.username = localStorage.username,
      this.useremail = localStorage.useremail,
      this.usergender = localStorage.usergender,
      this.usercountry = localStorage.usercountry   
    }
  },


  methods: {
    submit() {
      localStorage.username = this.username;
      localStorage.useremail = this.useremail;
      localStorage.usergender = this.usergender;
      localStorage.usercountry = this.usercountry;
      console.log('profile created');
    },

    sendVerificationEmail() {

   const actionCodeSettings = {
     url:'https://sa-10.bolurahmah.repl.co/welcome',
     handleCodeInApp: true
};
  
   const auth = getAuth();
     
   sendSignInLinkToEmail(auth, this.useremail, actionCodeSettings)
     
  .then(() => {

   
   localStorage.setItem('emailForSignIn', this.useremail);

    // console.log(emailForSignIn)
    
    console.log('sent!')
  })
    
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorCode, errorMessage)
  
  });

  },

   takemeThere() {
  this.$router.push({ name: 'getlink' })
    console.log("holla");
}

  }
  

};


</script>



<style scoped>


  h3 {
  font-size: 1.2rem;
}


 .nudge {

  background-color: #fac8ef; 
   padding: 0.3rem;
    
  }

  header {
  line-height: 1.5;
}

  hr{

   color: #103975 !important;
    width: 55vw;
    
  }


  i {

    font-size: 1rem; 
    color: #103975 ;
    
    
  }

  .subm{

    background-color: #103975;
    border: none !important;
    color: #fac8ef;
    
  }
  .form-label{

     font-size: 1rem;
     color: #103975 ;
  }

  .form-control {

  width: 55vw !important;
  border-radius: 0.3rem !important;
  border-color: #103975 !important;
  }
  
.form-control:focus {

  border-color: #103975 !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0.25rem #fac8ef !important;
}

  
@media (min-width: 1024px) {
 
   .form-control {

  width: 25vw !important;
     
  }

 
}
</style>
