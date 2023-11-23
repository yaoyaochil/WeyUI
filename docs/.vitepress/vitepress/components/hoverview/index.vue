<template>
	<div class="code-wrapper" @mouseenter="showTooltip" @mouseleave="hideTooltip">
		<slot></slot>
		<div v-if="tooltipVisible" class="tooltip" :style="{ top: `${tooltipTop}px`, left: `${tooltipLeft}px` }">
			<pre><code>{{ data }}</code></pre>
		</div>
	</div>
</template>

<script lang='ts' setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const tooltipVisible = ref(false);
const tooltipTop = ref(0);
const tooltipLeft = ref(0);

const showTooltip = (event: MouseEvent) => {
	tooltipVisible.value = true;
	updateTooltipPosition(event);
};

const hideTooltip = () => {
	tooltipVisible.value = false;
};

const updateTooltipPosition = (event: MouseEvent) => {
	tooltipTop.value = event.clientY + 10;
	tooltipLeft.value = event.clientX + 10;
};

// 在组件挂载时添加事件监听器
onMounted(() => {
	window.addEventListener('mousemove', updateTooltipPosition);
});

// 在组件销毁前移除事件监听器
onBeforeUnmount(() => {
	window.removeEventListener('mousemove', updateTooltipPosition);
});
</script>

<style scoped>
.code-wrapper {
	position: relative;
	display: inline-block;
}

.tooltip {
	position: fixed;
	background-color: #f8f8f8;
	border: 1px solid #ddd;
	padding: 10px;
	max-width: 300px;
	white-space: pre-wrap;
	z-index: 999;
}
</style>
