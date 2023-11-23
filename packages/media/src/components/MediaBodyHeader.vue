<template>
  <div class="media-page-header">
    <div class="title">{{ formatTitle(props.select_type) }} (共{{props.total}}条)</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  total: {
    type: Number,
    default: () => 0
  },
  select_type: {
    type: String,
    default: () => 'image' as string
  }
})


// 格式化标题
const formatTitle = (type: string) => {
  switch (type) {
    case 'image':
      return '图片'
    case 'video':
      return '视频'
    case 'voice':
      return '音频'
    case 'news':
      return '图文'
    default:
      return '系统错误'
  }
}
</script>

<style scoped lang="scss">
.media-page-header {
  margin-bottom: 24px;
  .title {
    font-size: 20px;
    font-weight: 400;
    // 括号和文字平齐
    text-align:justify
  }
}
</style>
