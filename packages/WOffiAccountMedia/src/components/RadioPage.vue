<template>
  <div class="voice-box">
    <div class="voice-list" v-for="item in props.voiceData.item">
      <div class="description">{{ item.name }}</div>
      <div class="date-time">上传时间：{{formatTime(item.update_time)}}</div>
      <div class="voice-inner">
        <a-button class="listen-btn" type="dashed" status="success" @click="showModal(item.media_id,item.name)">
          <template #icon><icon-play-circle-fill /></template>
          <template #default>试听音频</template>
        </a-button>
        <a-popconfirm content="确定要删除此素材吗?" type="warning" @ok="deleteVoice(item.media_id)">
          <a-button class="delete-btn" type="dashed" status="normal">
            <template #icon>
              <icon-delete />
            </template>
          </a-button>
        </a-popconfirm>
      </div>
    </div>
    <a-modal v-model:visible="ModalVisible" :footer="false" @cancel="onCancelModal" :hide-title="true" modal-class="radio-modal" body-class="radio-modal-body">
      <a-spin :loading="loading" tip="loading..." style="z-index: 999">
        <div class="voice-modal">
          <canvas ref="canvasVisible" :style="`${loading == false?'width:250px;height:40px;padding-bottom:5px;z-index:99':'display:none'}`"></canvas>
          <audio ref="audioVisible" :style="`${loading == false?'':'display:none'}`"  :src="temUrl" controls></audio>
        </div>
      </a-spin>
    </a-modal>
  </div>

</template>

<script lang="ts" setup>
import {ref,watch} from 'vue'
import { useAVBars } from 'vue-audio-visual'
// ====================== Modal部分 ======================
const ModalVisible = ref(false as boolean) // 弹窗显示隐藏
const audioVisible = ref(null as any)
const canvasVisible = ref(null as any)
const loading = ref(false as boolean)

const audioName = ref('' as string) // 音频名称

const emit = defineEmits(['previewVoice','onDelete']) // 事件
const showModal = (media_id:string,name:string) => { // 打开弹窗 获取音频 并播放
  loading.value = true
  // 等待音频加载完成后播放
  audioVisible.value.oncanplay = () => {
    audioName.value = name
    useAVBars(audioVisible, canvasVisible, { src: temUrl.value, canvHeight: 40, canvWidth: 150, barColor: '#ffffff',barWidth: 1, barSpacing: 1})
    loading.value = false
    audioVisible.value.play()
  }
  emit('previewVoice', media_id)
  ModalVisible.value = true
}

const deleteVoice = (media_id:string) => { // 删除音频
  emit('onDelete', media_id)
}

// 频谱图
const props = defineProps({
  voiceData: { // 语音数据
    type: Object,
    default: () => ({} as {
      item: any[]
    })
  },
  radioUrl: { // 语音文件
    type: String,
    default: () => ('' as any)
  }
})

const temUrl = ref('' as any) // 临时url

watch(() => props.radioUrl, (newVal, oldVal) => {
  if (newVal) {
    temUrl.value = newVal
  }
})

const onCancelModal = () => { // 关闭弹窗 清空音频 重置时间
  ModalVisible.value = false
  audioVisible.value.pause()
  audioVisible.value.currentTime = 0
  audioVisible.value.oncanplay = null
}
// ====================== Modal部分 ======================

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
.voice-box {
  display: flex;
  flex-wrap: wrap;
  // 居中并且每行显示4个
  //justify-content: center;
  .voice-list {
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

    .voice-inner {
      // 按钮
      display: flex;
      align-items: center;
      margin-top: 3px;
      margin-left: 11px;
      position: relative;
      .listen-btn {
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

    .voice-modal {
      // 音频
      display: block;
    }
  }

}

canvas {
  display: block;
  margin: 0 auto;
}
</style>
<style lang="scss">
.radio-modal {
  background-color: transparent;
  width: 300px;
  height: 40px;
}
.radio-modal-body {
  height: auto;
  width: auto;
  padding: 0;
  background-color: transparent;
}
</style>
