<!-- <script setup>
  
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

<template>
  
 <ProfileTemplates>
   <template #name >Name:</template>
   <template #thename v-model="name">{{ name }}</template>
   <template #regno>Registration Number:</template>
    <template #theregno>#0294209</template>
    <template #mycourses>Courses:</template>
   <template #courseone>course one</template>
   <template #coursetwo>course two</template>
   <template #certificates>Certificates:</template>
   <template #downloadprofilebtn>Download</template>
   <template #shareprofilebtn>Share</template>
   
 </ProfileTemplates>
</template> -->

<!--<template>

  
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

  
</template>-->


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

  <template>

   <ProfileTemplates>
     <template #name >Name:</template>
     <template #thename v-model="name">{{ name }}</template>
     <template #regno>Registration Number:</template>
      <template #theregno>#0294209</template>
      <template #mycourses>Courses:</template>
     <template #courseone>course one</template>
     <template #coursetwo>course two</template>
     <template #certificates>Certificates:</template>
     <template #downloadprofilebtn>Download</template>
     <template #shareprofilebtn>Share</template>

   </ProfileTemplates>
  </template>

  <!--<template>


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


  </template>-->


  <script>

  import { auth, db, doc, getDoc } from "../firebase";
  import router from "../router";
    import { onMounted } from 'vue';
  // import { getFirestore, doc, getDoc } from "../firebase";

  //   const db = getFirestore();

    export default {

      components: {
      ProfileTemplates,
    },

      data() {
          return {
            name: "",
          };
       },


mounted() {

  onMounted(() => {

    auth.onAuthStateChanged(user => {

     if (user) {
        // User is signed in
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then(docSnapshot => {
          if (docSnapshot.exists()) {
            // Access specific fields like name and email
            const userData = docSnapshot.data();

            this.name = userData.name;

            console.log("User name:", userData.name);
            console.log("User email:", userData.email);


          } else {
            console.log("No such document!");
          }
        }).catch(error => {
          console.log("Error getting document:", error);
        });
     }
    });
    
  })
  
}
     



    }




  </script>


    
