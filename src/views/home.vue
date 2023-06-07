<template>
  <div  style="background-color:azure">
     home组件
     <RouterLink to="/home/home1" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
          home1
      </li>
    </RouterLink>
    <RouterLink to="/home/home2" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
          home2
      </li>
    </RouterLink>
     <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>