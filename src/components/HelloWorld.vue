<script setup>
import { ref } from 'vue'
const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<template>
  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
    class="w-full md:w-14rem" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
