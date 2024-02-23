<script setup>
const props = defineProps({
  content: Object
})
</script>

<template>
  <div class="d-flex flex-column justify-content-center p-1">
    <h3 class="p-2 mt-2">{{ content.text }} <slot name="onetitle"></slot></h3>
  <div class="card p-2 mt-2">{{ content.text }} <slot name="onecard"></slot></div>
    </div>
</template>

<style scoped>

  
  </style>