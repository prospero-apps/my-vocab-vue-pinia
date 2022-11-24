import { defineStore } from 'pinia'

export const useVocabStore = defineStore('vocab', {
  state: () => ({
    vocab: [
      {
        id: 1,
        english: 'table',
        german: 'Tisch',
        category: 'noun'
      },
      {
        id: 2,
        english: 'sit',
        german: 'sitzen',
        category: 'verb'
      }
    ],
    filter: 'all'
  }),
  getters: {
    filteredVocab() {
      if (this.filter === 'nouns') {
        return this.vocab.filter((word) => word.category === 'noun')
      } else if (this.filter === 'verbs') {
        return this.vocab.filter((word) => word.category === 'verb')
      } else if (this.filter === 'adjectives') {
        return this.vocab.filter((word) => word.category === 'adjective')
      } else if (this.filter === 'adverbs') {
        return this.vocab.filter((word) => word.category === 'adverb')
      } else if (this.filter === 'other') {
        return this.vocab.filter((word) => word.category === 'other')
      }
      return this.vocab
    }
  },
  actions: {
    addEntry(textEN, textGER, category) {
      if (!textEN || !textGER || !category) return
      this.vocab.push({
        id: Math.floor(Math.random() * 1000000000),
        english: textEN,
        german: textGER,
        category
      })
    },
    setFilter(value) {
      this.filter = value;
    }
  }
})