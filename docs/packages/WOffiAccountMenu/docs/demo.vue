<template>
  <div>
    <w-offiaccount-menu :is-remote="true" :menuData="menu_data_list" @submitData="subMenuData"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WOffiaccountMenu from "packages/WOffiAccountMenu/src/index.vue";
import {getMenuDataApi} from "packages/WOffiAccountMenu/docs/api/api";
const subMenuData = async(menuData: any)=>{
  console.log(menuData)
}
const menu_data_list = ref({} as any)

const getMenuData = async() => {
  const res = getMenuDataApi()
  menu_data_list.value.button = res.button
  menu_data_list.value.matchrule = res.matchrule
  console.log(menu_data_list.value)
}
getMenuData()
</script>
