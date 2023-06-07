<template>
  <div>
    <h1>{{state.name}}</h1>
    <p>{{ name1 }}</p>
    <p>{{ name2 }}</p>
    <div ref="divRef">ref的使用</div>
    <Son :name="name1" :obj="state" @event="fn" /> 
  </div>
</template>

<script setup lang="ts">
import {reactive,ref,onMounted} from 'vue'
import type {Ref} from 'vue'
import Son from './components/Son.vue'
// components:{Son}
const state=reactive({
  name:'zhangsan',
  age:18
})
const name1:Ref<string>=ref('lisi')
const name2=ref<string>('lisi')
const divRef=ref<HTMLDivElement>()
onMounted(() => {
  console.log(divRef.value?.innerText);
  
})
const fn=(val:string)=>{
  console.log(val);
  
}
</script>

<style scoped>

</style>