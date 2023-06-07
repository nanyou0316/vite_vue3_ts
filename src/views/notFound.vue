<template>
  <div>
     <Child>
      <h1>普通插槽</h1>  <!--普通插槽里面的内容也会插到作用域插槽上-->
      <template v-slot:one>
          <h4>我是具名插槽</h4>
      </template>
      <template #two>
          <h4>我也是具名插槽，写法不一样</h4>
      </template>
     </Child>
     <input type="text" v-model="text">
     <ChildSolt v-slot:myName="myProps">
      111
      <!-- 
        111会作用到普通插槽和作用域插槽中
        不想作用到普通插槽上，可以再补上具名插槽v-slot:插槽名
      -->
      <ul>
        <li v-for="item in myProps.myArr">
          <div v-if="item+''==text" style="color: red;">{{ item }}</div>
          <div v-else="item+''==text" >{{ item }}</div>
        </li>
      </ul>
     </ChildSolt>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Child from '../components/Child.vue'
import ChildSolt from '../components/Child作用域插槽.vue'

let text=ref('')
</script>

<style scoped>

</style>