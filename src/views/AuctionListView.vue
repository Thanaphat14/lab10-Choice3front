<script setup lang="ts">
import AuctionCard from '@/components/AuctionCard.vue'
import { type Auction } from '@/types'
import { ref, onMounted } from 'vue'
import AuctionService from '@/services/AuctionService'
import { useRouter } from 'vue-router'

const router = useRouter()
const auctions = ref<Auction[] | null>(null)

onMounted(() => {
  AuctionService.getAuctions()
    .then((response) => {
      auctions.value = response.data
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
})
</script>

<template>
  <h1>Auctions</h1>
  <div class="flex flex-col items-center">
    <AuctionCard v-for="auction in auctions" :key="auction.id" :auction="auction" />
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
