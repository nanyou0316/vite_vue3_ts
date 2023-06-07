<template>
  <div>
    <h1>{{ detail }}</h1>

    <button type="button" @click="backHandle">后退</button>
    <button type="button" @click="Handle">猜你喜欢</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  useRoute,
  useRouter,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from 'vue-router'
const route = useRoute()
const router = useRouter()
let detail = ref()
onMounted(() => {
  // console.log("route:",route.params.id)
  // detail.value=route.params.id
  console.log('route:', route.query.id)
  detail.value = route.query.id
})
onBeforeRouteUpdate((to, from) => {
  // console.log("to:",to.params.id)
  // detail.value=to.params.id
  console.log('to:', to.query.id)
  detail.value = to.query.id
})
onBeforeRouteLeave(() => {
  console.log('我离开了')
})
const backHandle = () => {
  router.back()
}
const Handle = () => {
  // router.push('/detail/1')
  router.push({
    name: 'detail',
    query: {
      id: 1,
    },
  })
}
</script>

<style scoped></style>
