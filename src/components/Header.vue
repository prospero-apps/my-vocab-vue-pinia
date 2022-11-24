<script setup>
  import { ref, computed } from 'vue'
  import { useVocabStore } from '../store/vocab'

  const newTextEN = ref('')
  const newTextGER = ref('')
  const category = ref(null)

  const vocabStore = useVocabStore()
  const { addEntry } = vocabStore

  const addToVocab = (word1, word2, cat) => {
    addEntry(word1, word2, cat)
    newTextEN.value = ''
    newTextGER.value = ''
    category.value = null
  }

  const buttonDisabled = computed(() => {
    return newTextEN.value === '' || newTextGER.value === '' || category.value === null
  })
 
</script>

<template>
  <div class="header">    
    <div class="entry">
      <div class="inputs">
        <input placeholder="English" v-model='newTextEN'/>
        <input placeholder="German" v-model='newTextGER'/>
      </div>
      <div class="categories">
        <input type="radio" v-model="category" name="category" value="noun"><p>noun</p>
        <input type="radio" v-model="category" name="category" value="verb"><p>verb</p>
        <input type="radio" v-model="category" name="category" value="adjective"><p>adjective</p>
        <input type="radio" v-model="category" name="category" value="adverb"><p>adverb</p>
        <input type="radio" v-model="category" name="category" value="other"><p>other</p>
      </div>
    </div>
    <button 
      @click="() => addToVocab(newTextEN, newTextGER, category)"
      :disabled="buttonDisabled"
    >
      Add
    </button>

  </div>
</template>

<style scoped>
.header {
    display: flex;
    background-color: rgb(48, 4, 4);
    color: white;
    height: 100px;
    padding: 10px;
    font-size: 1.5em;
    justify-content: space-around;
  }

  .entry {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .inputs {
    display: flex;
    gap: 20px;
  }

  .inputs input {
    padding: 5px;
    font-size: 1em;
  }

  .categories {
    display: flex;
    justify-content: space-between;
  }

  .categories p {
    margin-right: 40px;
  }

  button {
    width: 80px;
    height: 80px;
    background-color: rgb(235, 218, 181);
    font-size: 1em;
    font-weight: bold;
    border-radius: 5px;
    color: rgb(48, 4, 4);
  }

  button:hover {
    background-color: rgb(236, 230, 216);
  }

  button:disabled {
    background-color: aliceblue;
    color: rgb(236, 230, 216);
  }
</style>