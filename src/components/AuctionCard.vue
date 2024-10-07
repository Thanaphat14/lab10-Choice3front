<script setup lang="ts">
import { type Auction } from '@/types'
defineProps<{
  auction: Auction
}>()
</script>

<template>
  <RouterLink class="auction-link" :to="{ name: 'auction-list-view' }">
    <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[500px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h1>Item ID: {{ auction.id }}</h1>
      <h2>Description: {{ auction.description }}</h2>
      <span>Type: {{ auction.type }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.auction-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
