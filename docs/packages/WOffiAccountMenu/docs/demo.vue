<template>
  <div>
    <WOffiAccountMenu @submitData="subMenuData"/>
  </div>
</template>

<script setup lang="ts">
const subMenuData = async(menuData: any)=>{
  console.log(menuData)
}
</script>
