<template>
  <div class="woffi-account-media">
    <div class="container-box">
      <div class="media">
        <a-tabs :default-active-key="props.select_type" lazy-load @change="onClickTab">
          <template #extra>
            <div class="tips">大小不超过10M，因公众号设置可能会带有水印</div>

            <a-popover title="说明" position="bottom">
              <div class="tip-icon"><icon-question-circle-fill /></div>
              <template #content>
                <p>所有上传的素材将根据公众设置</p>
                <p>决定是否带有水印</p>
                <p>请前往公众号自行配置</p>
              </template>
            </a-popover>
            <a-upload action="/">
              <template #upload-button>
                <a-button type="primary">
                  <template #icon>
                    <icon-upload />
                  </template>
                  <template #default>上传素材</template>
                </a-button>
              </template>
            </a-upload>
          </template>
          <a-tab-pane v-for="item in menu_list" :key="item.key" :title="item.title">
            <div class="pane-content">
              <MediaBodyHeader :select_type="item.key" :total="1"/>
              <div class="content" v-if="props.select_type === 'image'">

              </div>
              <div class="content" v-if="props.select_type === 'video'">

              </div>
              <div class="content" v-if="props.select_type === 'voice'">

              </div>
              <div class="content" v-if="props.select_type === 'news'">

              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import MediaBodyHeader from "./components/MediaBodyHeader.vue";

const props = defineProps({
  total: {
    type: Number,
    default: () => 0
  },
  select_type: {
    type: String,
    default: () => 'image'
  }
})

const menu_list = ref([
  {
    title: '图片',
    key: 'image'
  },
  {
    title: '视频',
    key: 'video'
  },
  {
    title: '音频',
    key: 'voice'
  },
  {
    title: '图文',
    key: 'news'
  }
] as any)
const onClickTab = async(key) => {
  select_type.value = key
}
</script>

<style scoped lang="scss">
@import "style/index.scss";
</style>
