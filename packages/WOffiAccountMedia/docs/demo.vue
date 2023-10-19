<template>
  <div>
    <w-offiaccount-media
      @on-down-load="downLoadImage"
      @on-delete="onDeleteMedia"
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      @onChangeTab="onChangeTab"
      @onPreview="onPreview"
      action="/api/wechat/media/uploadOtherMedia"
      :media-data="mediaData"
      :total="total"
      :current="current"
      :page-size="pageSize"
      :page-size-options="[5,10, 20, 30, 50,100]"
      :tem-url="temUrl"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {getMediaById, getMediaList,deleteMedia} from './api/api'

const total =ref(0) // 总条数
const pageSize = ref(10) // 每页条数
const current = ref(1) // 当前页码
const dataType = ref('image') // 素材类型

const mediaData = ref({} as any) // 素材数据
const temUrl = ref('') // 临时url

const getMediaData = async (type:string) => { // 获取素材列表
  // 模拟分页数据 按照每页10条数据
  const res:any = await getMediaList({type: type,offset: current.value,count: pageSize.value})
  if (res.data.code === 0){
    mediaData.value = res.data.data
    total.value = res.data.data.total_count
  }
}

const getMediaByIdData = async (media_id:string,type:string) => { // 获取素材
  const res:any = await getMediaById({media_id: media_id,type: type})
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
  mediaData.value = {}
  dataType.value = item
  await getMediaData(item)
  console.log(dataType.value)
}
const downLoadImage = (item: any) => { // 获取图片URL
  console.log(item)
}

const onDeleteMedia = async (item: any) => { // 删除图片
  console.log(item)
  const res = await deleteMedia({media_id: item})
  if (res.data.code === 0) {
    await getMediaData(dataType.value)
  }
}

const pageChange = async (page: number) => { // 页码改变 建议offset = (page - 1) * pageSize
  current.value = page
  await getMediaData(dataType.value)
}

const pageSizeChange = async (size: number) => { // 每页条数改变
  pageSize.value = size
  await getMediaData(dataType.value)
}

const onPreview = async (media_id: string,type:string) => { // 预览素材 仅用于语音 视频'
  console.log(media_id,type)
  await getMediaByIdData(media_id,type)
}
</script>
