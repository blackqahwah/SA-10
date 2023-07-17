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
    <h1 class="blue">{{ msg }}</h1>
    <h3 class="nudge">
      Create your profile to begin the Arabic writing course
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

 .nudge {

    background-color: #fac8ef;
    
  }
</style>

 