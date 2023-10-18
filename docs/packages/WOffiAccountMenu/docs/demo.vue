<template>
  <div>
    <w-offiaccount-menu :is-remote="true" :menuData="menu_data_list" @submitData="subMenuData"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WOffiaccountMenu from "packages/WOffiAccountMenu/src/index.vue";
import {getMenuList} from "packages/WOffiAccountMenu/docs/api/api";
const subMenuData = async(menuData: any)=>{
  console.log(menuData)
}
const menu_data_list = ref({
  button: [],
})

const getMenuData = async() => {
  const res:any = await getMenuList()
  if (res.data.code === 0) {
    menu_data_list.value.button = res.data.data.menu.button
  }
}
getMenuData()
</script>
