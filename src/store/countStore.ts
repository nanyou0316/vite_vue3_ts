import { defineStore } from 'pinia'
import {ref} from  'vue'
const useCountStore=defineStore('count',()=>{
  let count=ref(0)
  const changeCount=()=>{
    count.value+=1
  }
  const changeCountAsync=()=>{
    setTimeout(()=>{
      count.value+=1
    },1000)
  }
  
  return {
    count,changeCount,changeCountAsync
  }
})
export default useCountStore