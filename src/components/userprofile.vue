<script setup>

import ProfileTemplates from './profiletemplates.vue'

</script>

<!-- ParentComponent.vue -->
<template>
 <ProfileTemplates>


   
   <template #doneicontwo>

     <i class="bi bi-stars "></i>

   </template>

   <template #moduleTitletwo>As salamu alaykum</template>

   <template #moduleTitletwodeep>Welcome to the Arabic Writing Course for Beginners.</template>

   
 </ProfileTemplates>
</template>


<script>

import { auth } from "../firebase";
import router from "../router";


  export default {

    components: {
    ProfileTemplates,
  }

  }




</script>
