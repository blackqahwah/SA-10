<script setup>

import ProfileTemplates from './profiletemplates.vue'

</script>

<!-- ParentComponent.vue -->
<template>
 <ProfileTemplates>
   <template v-slot:title>
     <h1>Title of the Card</h1>
   </template>
   <template v-slot:body>
     <p>Body of the Card</p>
   </template>
 </ProfileTemplates>
</template>
