<script setup lang="ts">
import AuctionCard from '@/components/AuctionCard.vue'
import { type Auction } from '@/types'
import { ref, onMounted } from 'vue'
import AuctionService from '@/services/AuctionService'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseInput.vue'

const router = useRouter()
const auctions = ref<Auction[] | null>(null)
const keyword = ref('')
function updateKeyword (value: string) {
  let queryFunction;
  if (keyword.value === ''){
    queryFunction = AuctionService.getAuctions()
  }else {
    queryFunction = AuctionService.getAuctionsByKeyword(keyword.value)
  }
  queryFunction.then((response) => {
    auctions.value = response.data
    console.log('auctions',auctions.value)
  }).catch(() => {
    router.push({ name: 'NetworkError'})
  })
}

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
  <main class="flex flex-col items-center">
    <div class="w-64">
      <BaseInput v-model="keyword" type="text" label="Search..." @input="updateKeyword" class="w-full" />
    </div>
    <AuctionCard v-for="auction in auctions" :key="auction.id" :auction="auction" />
  </main>
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
