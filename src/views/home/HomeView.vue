<template>

  <Navbar/>

  <main>

    <section class="hero">

      <h1>
        MCNSL Official Website
      </h1>

    </section>

  </main>

</template>

<script setup lang="ts">
import Navbar from "../../components/layout/Navbar.vue";
</script>

<style scoped>

main{

  padding-top:72px;

}

.hero{

  height:calc(100vh - 72px);

  display:flex;

  align-items:center;

  justify-content:center;

}

h1{

  font-size:60px;

}

</style>