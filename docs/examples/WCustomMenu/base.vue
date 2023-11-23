<template>
	<div style="padding: 20px 15px 70px;">
		<w-custom-menu :menuData="menu_data_list" @submitData="getMenu"></w-custom-menu>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menu_data_list = ref({
	button: [],
})

const getMenu = (e) => {
console.log(e)
}
</script>

<style scoped lang="scss">

</style>
<script setup lang="ts">
</script>