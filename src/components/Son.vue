<template>
  <div style="background: pink;">
    <p>Son组件</p>
     <h1>{{ props.name }}</h1>
     <h1>{{ props.obj.name }}+++{{ props.obj.age }}</h1>
     <button type="button" @click="handle">按钮</button>
  </div>
</template>

<script setup lang="ts">
// const props=defineProps({
//   name:{
//     type:String,
//     require:true
//   }
// })
interface IObj {
  name:string,
  age:number
}
const props=defineProps<{
  name:string,
  obj:IObj
}>()
// const emit=defineEmits(['event'])
const emit=defineEmits<{
  (e:'event',payload:string):void
}>()
const handle=()=>{
  emit('event',"msg")
}
</script>

<style scoped>

</style>