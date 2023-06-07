<template>
  <div class="box1">
      <slot></slot>
      <slot :myArr="arr" name="myName">
        <ul>
          <li v-for="item in arr" :key="item">{{ item }}</li>
        </ul>
      </slot>
    
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let arr = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9])
</script>

<style scoped>
.box1 {
  padding: 30px 50px;
  background: #769ade;
}
</style>
