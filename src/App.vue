<script setup>
  import Header from './components/Header.vue'
  import Vocab from './components/Vocab.vue'
  import Filter from './components/Filter.vue'
  
</script>

<template>
  <div class="container">    
    <Header />
    <Filter />
    <Vocab />
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
</style>