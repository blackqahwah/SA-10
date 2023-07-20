<template>
  
  <form class="d-flex flex-column mb-1 mt-4 mx-auto justify-content-center align-items-center">

    <div>
      
     <div class="d-flex flex-row">
      
    
  <i class="bi bi-info-square-fill me-3">
      <slot name="nameicon"></slot>
    </i>
 
        
      <label for="name" class="form-label">
        
      <slot name="namelabel"></slot>
      
      </label>
        

    </div>

      <div>
        
      <input v-model="username" type="name" class="form-control mb-5" id="name">
        
        <slot name="inputname"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>


     <div class="d-flex flex-row">
      
    <i class="bi bi-envelope-check-fill me-3">
      <slot name="emailicon"></slot>
    </i>
 
        
      <label for="email" class="form-label">
        
      <slot name="emaillabel"></slot>
      
      </label>
        
     
</div>

      <div>
        
      <input v-model="useremail"  type="email" class="form-control mb-5" id="email">
        
        <slot name="inputemail"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>


      <div class="d-flex flex-row">
      
    <i class="bi bi-person-badge-fill me-3">
      <slot name="gendericon"></slot>
    </i>
 
        
      <label for="gender" class="form-label">
        
      <slot name="genderlabel"></slot>
      
      </label>
        
     
</div>

      <div>
        
      <input v-model="usergender"  type="gender" class="form-control mb-5" id="gender">
        
        <slot name="inputgender"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>



       <div class="d-flex flex-row">
      
    <i class="bi bi-geo-alt-fill me-3">
      <slot name="countryicon"></slot>
    </i>
 
        
      <label for="country" class="form-label">
        
      <slot name="countrylabel"></slot>
      
      </label>
        
     
</div>

      <div>
        
      <input v-model="usercountry"  type="country" class="form-control mb-5" id="country">
        
        <slot name="inputcountry"></slot>
      
      </div>

       <div>

        <h4 class="form-text">
          <slot name="helptext"></slot>
        </h4>
        
      </div>


      

    </div>
    
    </form>

  
</template>

<!--for button
<div>

        <button type="submit" class="btn btn-primary">
          
<slot name="subm"></slot>
          
        </button>
      </div>-->



<script>

  
export const formToStorage = {
  
  data() {
    return {
      username: "",
      useremail: "",
      usergender: "",
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
  watch: {
    username(newName) {
      localStorage.username = newName;
    },
     useremail(newMail) {
      localStorage.useremail = newMail;
    },
     usergender(newGender) {
      localStorage.usergender = newGender;
    },
     usercountry(newCountry) {
      localStorage.usercountry = newCountry;
    }
  }
};


  
</script>



<style scoped>

  i {

    font-size: 1.5rem; 
    color: #103975 ;
    
    
  }

  .form-label{

     font-size: 1.5rem;
     color: #103975 ;
  }

  .form-control {

  width: 55vw !important;
  border-radius: 0 !important;
  border-color: #103975 !important;
  }
  
.form-control:focus {

  border-color: #103975 !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0.25rem #fac8ef !important;
}

  
@media (min-width: 1024px) {
 
   .form-control {

  width: 35vw !important;
     
  }

 
}
</style>
