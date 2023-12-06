<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div >
    <h1 class="blue mb-3 mt-3 fw-medium">{{ msg }} <slot name="msg"></slot></h1>
    <h3 class="nudge fw-normal">
      <slot name="nudge"></slot>
    </h3>
  </div>
</template>

<style scoped>


h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

 .nudge {

  background-color: #fac8ef; 
   padding: 0.5rem;
    
  }
</style>

 