<script setup>
  import { useVocabStore } from '../store/vocab';
  import { storeToRefs } from 'pinia'

  const vocabStore = useVocabStore()
  const { filteredVocab } = storeToRefs(vocabStore)
  
</script>

<template>
  <div class="vocab-panel">    
    <div class="vocab" v-for="v in filteredVocab">
      <h1 class="english">{{ v.english }}</h1>
      <h1 class="hyphen">-</h1>
      <h1 class="german">{{ v.german }}</h1>
      <h2 class="category">({{ v.category }})</h2>
    </div>
  </div>
</template>

<style scoped>

.vocab-panel {
  width: 80%;
  margin: 10px auto;
}
.vocab {
  display: flex;
  align-items: center;  
}

.english,
.german {
  width: 35%;
}

.hyphen {
  width: 5%;
  justify-self: center;
}


</style>