<template>
	<div style="padding: 15px">
		<w-media
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
			:page-size-options="[10, 20, 30, 50,100]"
			:preview-url="previewUrl"
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
const previewUrl = ref('') // 素材预览地址URL


const onChangeTab = async (item: any) => { // 切换tab
	mediaData.value = {}
	dataType.value = item
	console.log(dataType.value)
}
const downLoadImage = (url: string) => { // 获取图片URL
	console.log(url)
}

const onDeleteMedia = async (item: any) => { // 删除素材
	console.log(item)
}

const pageChange = async (page: number) => { // 页码改变 建议offset = (page - 1) * pageSize
	current.value = page
	console.log(page)
}

const pageSizeChange = async (size: number) => { // 每页条数改变
	pageSize.value = size
	console.log(size)
}

const onPreview = async (media_id: string,type:string) => { // 预览素材 仅用于语音 视频'
	console.log(media_id,type)
}
</script>

<style scoped lang="scss">
.media-page {
	padding: 20px;
	width: 100%;
}
</style>
