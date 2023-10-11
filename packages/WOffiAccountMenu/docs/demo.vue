<template>
  <div>
    <w-offiaccount-menu :is-remote="true" :menuData="menu_data_list" @submitData="subMenuData"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import WOffiaccountMenu from "packages/WOffiAccountMenu/src/index.vue";
const subMenuData = async(menuData: any)=>{
  console.log(menuData)
}
const menu_data_list = ref({} as any)

const service = axios.create({
  baseURL: '',
  timeout: 99999
})

const getMenu = async() => {
  return service({
      url: 'api/menu.json',
    method: 'get'
  })
}

const getMenuData = async() => {
  const res = await getMenu()
  menu_data_list.value.button = res.data.button
  menu_data_list.value.matchrule = res.data.matchrule
  console.log(menu_data_list.value)
}
getMenuData()
</script>
