<script setup>
  
import { ref } from 'vue'
  
import ProfileTemplates from './profiletemplates.vue'

import ModuleTemplates from './moduletemplates.vue'



  const cardOne = ref([
    { id: 0, text: '' },
  ])


  const cardTwo = ref([
    { id: 0, text: '' },
  ])


  const cardThree = ref([
    { id: 0, text: '' },
  ])
  
</script>

<!--<template>
  
 <ProfileTemplates>
   <template #name>Name:</template>
   <template #thename>mariam ajisebi</template>
   <template #regno>Registration Number:</template>
    <template #theregno>#0294209</template>
    <template #mycourses>Courses:</template>
   <template #courseone>course one</template>
   <template #coursetwo>course two</template>
   <template #certificates>Certificates:</template>
   <template #downloadprofilebtn>Download</template>
   <template #shareprofilebtn>Share</template>
   
 </ProfileTemplates>
</template>-->

<template>

  
  <ModuleTemplates
    v-for="item in cardOne"
    :content="item"
    :key="item.id"
  >

    <template #onecard> wlkwlkwkrwlkwkw</template>
    
  </ModuleTemplates>

  <ModuleTemplates
    v-for="item in cardTwo"
    :content="item"
    :key="item.id"
  >

    <template #onecard> lfagnalfnag</template>

  </ModuleTemplates>

  <ModuleTemplates
    v-for="item in cardThree"
    :content="item"
    :key="item.id"
  >

    <template #onetitle> [qwpq[fqgn]]</template>
    <template #onecard> [qwpq[fqgn]]</template>

  </ModuleTemplates>

  
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
