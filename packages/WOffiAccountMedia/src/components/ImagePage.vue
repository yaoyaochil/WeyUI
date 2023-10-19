<template>
  <div class="image-box">
    <div class="image-list" v-for="(item,index) in props.imageList.item">
      <a-image
        style="border-radius: 5px;"
        :src='item.url'
        width="180"
        height="180"
        fit="cover"
        :preview-visible="imageVisible[index]"
        :footer-class="['actions-outer']"
        @preview-visible-change="() => { imageVisible[index]= false }"
      >
        <template #extra>
          <div class="footer-box">
            <div class="desc">
              <div class="media-name">{{ item.name }}</div>
            </div>
            <div class="actions">
              <span class="action" @click="() => { imageVisible[index] = true }"><icon-eye /></span>
              <span class="action" @click="onDownLoad(item.url)"><icon-copy /></span>
              <a-popconfirm content="确定要删除此素材吗?" type="warning" @ok="onDelete(item.media_id)">
                <span class="action"><icon-delete /></span>
              </a-popconfirm>
            </div>
          </div>
        </template>
      </a-image>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const emits = defineEmits(['onDownLoad', 'onDelete'])
const props = defineProps({
  imageList: {
    type: Object,
    default: () => ({
      total_count: 0,
      item_count: 0,
      item: [] as any[]
    })
  }
});

const imageVisible = ref([] as any) // Create an array to track each image's visibility
const onDelete = (media_id: string) => {
  emits('onDelete', media_id)
}

const onDownLoad = (url: string) => {
  emits('onDownLoad', url)
}
// 导出onDownLoad方法

</script>

<style scoped lang="scss">
.actions-outer {
  position: relative;

  .footer-box {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 2px;
    justify-content: center;
    // 透明黑色背景
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 100%);
    .desc {
      position: relative;
      width: 35%;
      display: flex;
      align-items: center;
      padding-right: 10px;
      float: left;
      .media-name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.image-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .image-list {
    margin-bottom: 24px;
    margin-right: 24px;
  }
}

.actions {
  display: inline-flex;
  align-items: center;
  float: right;
}

.action {
  padding: 5px 4px;
  font-size: 14px;
  margin-left: 7px;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;
}

.action:first-child {
  margin-left: 0;
}

.action:hover {
  background: rgba(0, 0, 0, .5);
}

.actions-outer {
  .action {
    &:hover {
      color: #ffffff;
    }
  }
}

</style>
