<template>
  <div class="video-box">
    <div class="video-list" v-for="item in props.videoData.item">
      <div class="description">{{ item.name }}</div>
      <div class="date-time">上传时间：{{ formatTime(item.update_time) }}</div>
      <div class="video-inner">
        <w-button class="preview-btn" type="dashed" status="success" @click="showModal(item.media_id)">
          <template #icon>
            <icon-play-circle-fill />
          </template>
          <template #default>观看视频</template>
        </w-button>
        <w-popconfirm content="确定要删除此素材吗?" type="warning" @ok="deleteVideo(item.media_id)">
          <w-button class="delete-btn" type="dashed" status="normal">
            <template #icon>
              <icon-delete />
            </template>
          </w-button>
        </w-popconfirm>
      </div>
    </div>
    <w-modal v-model:visible="ModalVisible" :footer="false" @cancel="onCancelModal" :hide-title="true" modal-class="video-modal" body-class="video-modal-body">
      <w-spin :loading="loading" tip="loading...">
        <template #title>
          素材预览
        </template>
        <div class="video-modal">
          <video ref="videoVisible" :style="`${loading == false?'width:400px;height:200px':'display:none'}`" :src="temUrl"></video>
        </div>
      </w-spin>
    </w-modal>
  </div>
</template>

<script setup lang="ts">
import {watch, ref} from 'vue'

const props = defineProps({
  videoData: {
    type: Object,
    default: () => ({} as {
      item: any[]
    })
  },
  videoUrl: {
    type: String,
    default: () => ('' as any)
  }
})


const temUrl = ref('' as any) // 临时url
const ModalVisible = ref(false as boolean) // 弹窗显示隐藏
const videoVisible = ref(null as any)
const loading = ref(false as boolean)
watch(() => props.videoUrl, (newVal, oldVal) => {
  if (newVal) {
    temUrl.value = newVal
    console.log(temUrl.value)
  }
})

// ====================== 事件部分 ======================

const emit = defineEmits(['previewVideo','onDelete']) // 事件
const showModal = (media_id:string) => { // 打开弹窗 获取音频 并播放
  loading.value = true
  // 等待视频加载完成后播放
  videoVisible.value.oncanplay = () => {
    loading.value = false
    videoVisible.value.play()
  }
  emit('previewVideo', media_id)
  ModalVisible.value = true
}

const onCancelModal = () => { // 关闭弹窗
  ModalVisible.value = false
  videoVisible.value.pause()
}

const deleteVideo = (media_id:string) => { // 删除音频
  emit('onDelete', media_id)
}

// ====================== 工具部分 ======================

// 格式化10位时间戳 为 2023-10-15 17:30:00
const formatTime = (time: number) => {
  const date = new Date(time * 1000)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  const h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
  const m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
  const s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
  return Y + M + D + h + m + s
}
</script>

<style scoped lang="scss">
.video-box {
  display: flex;
  flex-wrap: wrap;
  // 居中并且每行显示4个
  //justify-content: center;
  .video-list {
    // 间隔
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #e8e8e8;
    padding: 17px;
    border-radius: 5px;
    .description {
      // 描述
      margin-left: 15px;
      font-size: 13px;
      color: #333131;
    }
    .date-time {
      // 日期
      margin-left: 15px;
      font-size: 12px;
      color: #999;
      padding-bottom: 3px;
    }

    .video-inner {
      // 按钮
      display: flex;
      align-items: center;
      margin-top: 3px;
      margin-left: 11px;
      position: relative;
      .preview-btn {
        // 按钮
        border-radius: 5px;
      }
      .delete-btn {
        // 按钮
        position: absolute;
        right: 0;
        border-radius: 5px;
      }
    }

    .video-modal {
      // 音频
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

}

canvas {
  display: block;
  margin: 0 auto;
}
</style>
<style lang="scss">
.video-modal {
  background-color: transparent;
  width: 400px;
  height: 200px;
}
.video-modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
}
</style>

