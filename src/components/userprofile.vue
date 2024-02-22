<script setup>

import ProfileTemplates from './profiletemplates.vue'

</script>

<!-- ParentComponent.vue -->
<template>
 <ProfileTemplates>


   
   <template #name>Name:</template>
   <template #thename>mariam ajisebi</template>
    <template #mycourses>Courses:</template>
   <template #courseone>course one</template>
   <template #coursetwo>course two</template>
   <template #certificates>Certificates:</template>
   <template #downloadprofilebtn>Download your profile</template>
   
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
