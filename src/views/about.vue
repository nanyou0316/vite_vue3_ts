<template>
  <div>
    <h2>{{ count }}</h2>
    <button type="button" @click="changeCount">+count</button>
    <button type="button" @click="changeCountAsync">+count async</button>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import useCountStore from '../store/countStore'
const countStore =useCountStore()
let {count,changeCount,changeCountAsync}={...toRefs(countStore)}
</script>

<style scoped>

</style>