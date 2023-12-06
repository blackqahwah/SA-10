<template>
  <div >

     
        <button class="buttons btn btn-primary mt-4 fw-medium" @click="navigate">

        <slot name="abtn"></slot>
          
        </button>
       
   
      </div>
</template>

<script>
export default {
  props: {
    link: String
  },
  methods: {
    navigate() {
      this.$router.push(this.link);
    }
  }
}
</script>
<style scoped>


 .buttons {
  background-color: #103975;
  border: none !important;
  color: white;
  /* font-size: 5rem; */
  }


</style> @click="navigate"