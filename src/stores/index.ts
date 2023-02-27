import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const store = defineStore('GlobalStore', () => {
    // state
    const count = ref<number>(0)
    // getters
    const computedCount = computed(() => count.value + 1)
    // action
    async function addCount(value = 1) {
        await (count.value += value)
    }
    return {
        count,
        computedCount,
        addCount,
    }
})

export default store
