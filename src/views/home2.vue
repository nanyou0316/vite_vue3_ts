<template>
  <div>
    <ul>
      <!-- <RouterLink v-for="item in arr" :key="item" :to="`/detail/${item}`" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
         {{item}}
      </li>
    </RouterLink> -->
      <li v-for="item in arr" :key="item" @click="handleGo(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
  const arr= reactive([1,2,3,4])
  const handleGo=(item:number)=>{
    console.log(item);
    //第一种路由写法
    // router.push(`/detail/${item}`)
    //第二种路由写法
    // router.push({
    //   name:'detail',
    //   params:{
    //     id:item
    //   }
    // })
    //第三种路由写法
    router.push({
      name:'detail',
      query:{
        id:item
      }
    })
  }
</script>

<style scoped>

</style>