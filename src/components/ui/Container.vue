<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.container {

  width: min(1280px, calc(100% - 48px));

  margin: auto;

}

@media (max-width:768px){

  .container{

    width: calc(100% - 32px);

  }

}

</style>