<template>
  <div class="media-page">
    <w-media
      @on-down-load="downLoadImage"
      @on-delete="onDeleteMedia"
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      @onChangeTab="onChangeTab"
      @onPreview="onPreview"
      @on-upload-success="onUploadSuccess"
      action="/api/wechat/media/uploadOtherMedia"
      :media-data="mediaData"
      :total="total"
      :headers="header"
      :current="current"
      :page-size="pageSize"
      :page-size-options="[10, 20, 30, 50,100]"
      :preview-url="temUrl"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {deleteMedia, getMediaById, getMediaList} from "./api";

const total =ref(0) // 总条数
const pageSize = ref(10) // 每页条数
const current = ref(1) // 当前页码
const dataType = ref('image') // 素材类型

const mediaData = ref({} as any) // 素材数据
const temUrl = ref('') // 临时url

const header = ref({
  'token': '111111'
})

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

// getMediaData('image') // 初始化获取图片素材列表

const onChangeTab = async (item: any) => { // 切换tab
  mediaData.value = {}
  dataType.value = item
  // await getMediaData(item) // 根据当前素材类型获取素材列表
  console.log(dataType.value)
}
const downLoadImage = (url: string) => { // 获取图片URL
  console.log(url)
}

const onDeleteMedia = async (media_id: string) => { // 删除图片
  console.log(media_id)
  // const res = await deleteMedia({media_id: item}) // 根据素材id删除素材
  // if (res.data.code === 0) {
  //   await getMediaData(dataType.value)
  // }
}

const pageChange = async (page: number) => { // 页码改变 建议offset = (page - 1) * pageSize
  current.value = page
  // await getMediaData(dataType.value) // 页面改变获取素材列表
}

const pageSizeChange = async (size: number) => { // 每页条数改变
  pageSize.value = size
  // await getMediaData(dataType.value) // 每页条数改变获取素材列表
}

const onPreview = async (media_id: string,type:string) => { // 预览素材 仅用于语音 视频'
  console.log(media_id,type)
  // await getMediaByIdData(media_id,type) // 根据素材id和素材类型获取素材
}

const onUploadSuccess = async () => {
  setTimeout(async ()=> {
    // await getMediaData(dataType.value) // 上传成功获取素材列表 建议延迟1.5秒 因为上传成功后 腾讯服务器需要时间处理
  },1500)
}
</script>

<style scoped lang="scss">
.media-page {
  padding: 20px;
  width: 100%;
}
</style>
