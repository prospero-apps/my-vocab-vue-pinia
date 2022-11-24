<script setup>
  import { useVocabStore } from '../store/vocab'

  const vocabStore = useVocabStore()
  const { setFilter } = vocabStore
</script>

<template>
  <div class="filter">
    <button @click="() => setFilter('all')">all</button>
    <button @click="() => setFilter('nouns')">nouns</button>
    <button @click="() => setFilter('verbs')">verbs</button>
    <button @click="() => setFilter('adjectives')">adjectives</button>
    <button @click="() => setFilter('adverbs')">adverbs</button>
    <button @click="() => setFilter('other')">other</button>

  </div>
</template>

<style scoped>
.filter {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}

button {
  width: 140px;
  height: 40px;
  background-color: white;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  color: rgb(48, 4, 4);
}

button:hover {
  background-color: rgb(245, 242, 235);
}

</style>