<template>
  <div>
    <woffi-account-media
      @on-down-load="downLoadImage"
      @on-delete="deleteImg"
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      @onChangeTab="onChangeTab"
      @onPreview="onPreview"
      action="/api/wechat/media/uploadOtherMedia"
      :media-data="mediaData"
      :total="total"
      :current="current"
      :page-size="pageSize"
      :page-size-options="[10, 20, 30, 50,100]"
      :tem-url="temUrl"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {getMedia, getMediaOtherList} from './api/api'

const total =ref(0) // 总条数
const pageSize = ref(10) // 每页条数
const current = ref(1) // 当前页码
const dataType = ref('image') // 素材类型

const mediaData = ref({} as any) // 素材数据
const temUrl = ref('') // 临时url

const getMediaData = async (type:string) => { // 获取素材列表
  mediaData.value = {}
  total.value = 0
  // 模拟分页数据 按照每页10条数据
  const res = await getMediaOtherList(type)
  mediaData.value = res
  mediaData.value.item = res.item.slice(0, 10)
  total.value = res.total_count
}

const getMediaById = async (media_id:string,type:string) => { // 获取素材
  const res:any = await getMedia({media_id: media_id,type: type})
  if (res.data && type === 'video' || type === 'news') {
    temUrl.value = res.data.data.down_url
    return
  }
  if (res.data) {
    temUrl.value = URL.createObjectURL(res.data)
    return
  }
}

getMediaData('image')

const onChangeTab = async (item: any) => { // 切换tab
  dataType.value = item
  await getMediaData(item)
  console.log(dataType.value)
}
const downLoadImage = (item: any) => { // 获取图片URL
  console.log(item)
}

const deleteImg = (item: any) => { // 删除图片
  console.log(item)
}

const pageChange = async (page: number) => { // 页码改变 建议offset = (page - 1) * pageSize
  current.value = page
  if (current.value === 1) {
    const res = await getMediaOtherList(dataType.value)
    mediaData.value.item = res.item.slice(0, 10)
  }
  if (current.value === 2) {
    const res = await getMediaOtherList(dataType.value)
    mediaData.value.item = res.item.slice(10, 20)
  }
}

const pageSizeChange = async (size: number) => { // 每页条数改变
  pageSize.value = size
  if (pageSize.value === 10) {
    mediaData.value.item = []
    const res = await getMediaOtherList(dataType.value)
    mediaData.value.item = res.item.slice(0, 10)
  }
  if (pageSize.value >= 20) {
    const res = await getMediaOtherList(dataType.value)
    mediaData.value.item = res.item.slice(0, 20)
  }
}

const onPreview = async (media_id: string,type:string) => { // 预览素材 仅用于语音 视频'
  console.log(media_id,type)
  await getMediaById(media_id,type)
}
</script>
