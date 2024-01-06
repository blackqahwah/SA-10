<!-- ChildComponent.vue -->
<template>
 <div class="card">
   <div class="card-title">
     <slot name="title"></slot>
   </div>
   <div class="card-body">
     <slot name="body"></slot>
   </div>
 </div>
</template>
