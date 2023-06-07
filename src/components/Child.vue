<template>
  <div class="box">
     child
    <slot></slot>
    <slot name="one"></slot>
    <slot name="two"></slot>
    <slot :myArr="arr">
      <ul>
        <li v-for="item in arr" :key="item">{{ item }}</li>
      </ul>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {reactive } from 'vue'
let arr = reactive([1,2,3,4,5,6,7,8,9])
</script>

<style scoped>
  .box{
    padding: 30px 50px;
    background: #c67373;
  }
</style>