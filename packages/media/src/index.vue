<template>
  <div class="wey-wechat-media">
    <div class="container-box">
      <div class="media">
        <w-tabs :destroy-on-hide="true" :default-active-key="select_type" lazy-load @change="onChangeTab">
          <template #extra>
            <div class="tips">大小不超过10M，因公众号设置可能会带有水印</div>
            <w-popover title="说明" position="bottom">
              <div class="tip-icon">
                <icon-question-circle-fill />
              </div>
              <template #content>
                <p style="font-size: 11px;color: #999">所有上传的素材将根据公众设置</p>
                <p style="font-size: 11px;color: #999">决定是否带有水印</p>
                <p style="font-size: 11px;color: #999">请前往公众号自行配置</p>
                <p style="font-size: 11px;color: #999">语音（voice）：10M，播放长度不超过60s，mp3格式</p>
                <p style="font-size: 11px;color: #999">图片（image）: 10M，支持jpg格式</p>
                <p style="font-size: 11px;color: #999">视频（video）：10MB，支持MP4格式</p>
                <p style="font-size: 11px;color: #999">缩略图（thumb）：64KB，支持JPG格式</p>
              </template>
            </w-popover>
            <w-upload
              :custom-request="customRequest"
              :show-file-list="false"
              @before-upload="beforeUpload"
            >
              <template #upload-button>
                <w-button type="primary">
                  <template #icon>
                    <icon-upload />
                  </template>
                  <template #default>上传素材</template>
                </w-button>
              </template>
            </w-upload>
          </template>
          <w-tab-pane v-for="item in menu_list" :key="item.key" :title="item.title">
            <div class="pane-content">
              <MediaBodyHeader :select_type="item.key" :total="props.total" />
              <div class="content" v-if="select_type === 'image' && props.total !== 0">
                <ImagePage @on-down-load="downLoadImage" @on-delete="onDeleteMedia" :image-list="props.mediaData" />
              </div>
              <div class="content" v-if="select_type === 'video' && props.total !== 0">
                <VideoPage :video-data="props.mediaData" @on-delete="onDeleteMedia" :video-url="viewUrl" @preview-video="previewMedia" />
              </div>
              <div class="content" v-if="select_type === 'voice' && props.total !== 0">
                <RadioPage :voice-data="props.mediaData" @on-delete="onDeleteMedia" :radio-url="viewUrl" @preview-voice="previewMedia" />
              </div>
              <div class="empty" v-if="props.total === 0">
                <w-empty />
              </div>
              <w-pagination
                :total="props.total"
                :current="props.current"
                :page-size="props.pageSize"
                :page-size-options="props.pageSizeOptions"
                show-page-size
                @change="pageChange"
                @page-size-change="pageSizeChange"
              />
            </div>
          </w-tab-pane>
        </w-tabs>
      </div>
    </div>
<!--    填写视频名称和描述-->
    <w-modal v-model:visible="ModalVisible" :footer="false" @cancel="onCancelModal">
        <template #title>
          素材信息
        </template>
        <div class="video-modal-form">
          <w-form :model="videoFormData">
            <w-form-item field="title" tooltip="标题" label="标题">
              <w-input v-model="videoFormData.title" />
            </w-form-item>
            <w-form-item field="introduction" tooltip="视频相关描述" label="素材描述">
              <w-input v-model="videoFormData.introduction" />
            </w-form-item>
            <w-form-item>
              <div class="btn-group" style="position: absolute;display: flex;align-items: center;right:20px">
                <w-button type="outline" @click="onCancelModal" style="margin-right: 15px">取消上传</w-button>
                <w-button type="primary" @click="onOkModal" :loading="spinVisible">提交上传</w-button>
              </div>
            </w-form-item>
          </w-form>
        </div>
    </w-modal>
  </div>
</template>

<script lang="ts" setup name="media">
import {ref,watch,PropType} from 'vue'
import { Modal,Message } from '@arco-design/web-vue'
import MediaBodyHeader from "./components/MediaBodyHeader.vue";
import ImagePage from "./components/ImagePage.vue";
import RadioPage from "./components/RadioPage.vue";
import VideoPage from "./components/VideoPage.vue";
export interface mediaInterface {
	total_count: number // 该类型的素材的总数
	item_count: number // 本次调用获取的素材的数量
	item: any[]
}

// 在header头添加<meta name="referrer" content="never">
// 用于解决微信浏览器下的图片防盗链问题
// https://developers.weixin.qq.com/community/develop/doc/000c0a0a7a0e98e8af573a9d15b400
const meta = document.createElement('meta')
meta.name = 'referrer'
meta.content = 'never'
document.head.appendChild(meta)
// ====================== props部分 ======================

const props = defineProps({
  action: {
    type: String,
    default: () => ('' as string | URL)
  },
	headers: {
		type: Object as PropType<Record<string, any>>,
		default: () => ({})
	},
	data: {
		type: Object as PropType<Record<string, any>>,
		default: () => ({})
	},
  total: {
		type: Number as PropType<number>,
		default: 0,
  },
  pageSize: {
    type: Number,
    default: () => 10
  },
  current: {
    type: Number,
    default: () => 1
  },
  pageSizeOptions: {
    type: Array as PropType<number[]>,
    default: () => ([10, 20, 30, 40] as number[])
  },
  mediaData: {
    type: Object as PropType<mediaInterface>,
    default: () => ({
      total_count: 0 as number, // 该类型的素材的总数
      item_count: 0, // 本次调用获取的素材的数量
      item: []
    } as mediaInterface)
  },
  previewUrl: {
    type: String,
    default: () => ('' as any)
  }
})

const select_type = ref('image' as string) // 选择的类型

// ====================== 监听部分 ======================
let viewUrl = ref('' as string | undefined)
watch(() => props.previewUrl, (newVal, oldVal) => {
  viewUrl.value = newVal
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
  // {
  //   title: '图文',
  //   key: 'news'
  // }
] as any)

const videoTitle = ref('' as string) // 视频名称
const videoDescription = ref('' as string) // 视频描述
const ModalVisible = ref(false as boolean) // 弹窗显示隐藏
const temVideoFile = ref(null as any) // 临时视频文件
const spinVisible = ref(false as boolean) // 弹窗loading

const videoFormData = ref({
  title: '',
  introduction: ''
} as Record<string, string>)


const emit = defineEmits(['onDownLoad', 'onDelete', 'onChangeTab', 'pageChange', 'pageSizeChange', 'onPreview'])

// ====================== 事件部分 ======================
const customRequest = (option: any) => {
	const { onProgress, onError, onSuccess, fileItem } = option;
	const xhr = new XMLHttpRequest();

	xhr.upload?.addEventListener('progress', (event) => {
		if (event.lengthComputable) {
			const percent = (event.loaded / event.total) || 0;
			onProgress(percent, event);
		}
	});

	xhr.addEventListener('load', () => {
		if (xhr.status >= 200 && xhr.status < 300) {
			onSuccess(xhr.response);
		} else {
			onError(xhr.responseText);
		}
	});

	xhr.addEventListener('error', (e) => {
		onError(e);
	});

	const formData = new FormData();
	formData.append('file', fileItem.file);
	formData.append('type', select_type.value);

	if (props.data) {
		Object.entries(props.data).forEach(([key, value]) => {
			formData.append(key, value);
		});
	}

	if (select_type.value === 'video') {
		formData.append('description', JSON.stringify({
			title: videoTitle.value,
			introduction: videoDescription.value
		}));
	}

	xhr.open('post', props.action, true);

	// 设置请求头
	if (props.headers) {
		Object.entries(props.headers).forEach(([key, value]) => {
			xhr.setRequestHeader(key, value);
		});
	}

	xhr.send(formData);

	return {
		abort() {
			xhr.abort();
		},
	};
};


const beforeUpload = async (file:File) => { // 上传前的钩子
  console.log(file)
  const response = await new Promise((resolve, reject) => {
    // 图片（image）: 10M，支持bmp/png/jpeg/jpg/gif格式
    if (select_type.value === 'image') {
      if (file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
				Message.error('仅支持jpg/jpeg格式!');
        reject('cancel')
        return
      }
      if (file.size / 1024 / 1024 > 10) {
				Message.error('上传图片大小不能超过 10M!');
        reject('cancel')
        return;
      }
    }

    //语音（voice）：2M，播放长度不超过60s，mp3/wma/wav/amr格式
    if (select_type.value === 'voice') {
      if (file.type !== 'audio/mp3' && file.type !== 'audio/mpeg') {
				Message.error('仅支持mp3格式!');
        reject('cancel')
        return;
      }
      if (file.size / 1024 / 1024 > 10) {
				Message.error('上传音频大小不能超过 10M!');
        reject('cancel')
        return;
      }
    }

    // 视频（video）：10MB，支持MP4格式
    if (select_type.value === 'video') {
      // 如果文件名长度大于128字节
      if (file.name.length > 128) {
				Message.error('文件名长度不能超过128字节!');
        reject('cancel')
        return;
      }
      if (file.type !== 'video/mp4') {
				Message.error('仅支持mp4格式!');
        reject('cancel')
        return;
      }
      if (file.size / 1024 / 1024 > 10) {
				Message.error('上传视频大小不能超过 10M!');
        reject('cancel')
        return;
      }

      // 调起弹窗 填写视频名称和描述 等待用户点击确定
      ModalVisible.value = true
      temVideoFile.value = file
      reject('cancel')
    }

    // 缩略图（thumb）：64KB，支持JPG格式
    if (select_type.value === 'thumb') {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/bmp' && file.type !== 'image/jpg') {
				Message.error('仅支持jpg/png/gif/bmp格式!');
        reject('cancel')
        return;
      }
      if (file.size / 1024 / 1024 > 0.064) {
				Message.error('上传图片大小不能超过 64KB!');
        reject('cancel')
        return;
      }
    }
    resolve(file)
  });
  return response as File
}
const onCancelModal = () => { // 关闭弹窗 清空音频 重置时间
  ModalVisible.value = false
  spinVisible.value = false
  videoFormData.value = {
    title: '',
    introduction: ''
  }
}

const onOkModal = () => { // 确定弹窗
  spinVisible.value = true
  const formData = new FormData();
  formData.append('type', select_type.value);
  formData.append('title',videoFormData.value.title);
  formData.append('introduction',videoFormData.value.introduction);
  formData.append('file', temVideoFile.value);
  const xhr = new XMLHttpRequest();
  xhr.open('post', props.action, true);
	Object.entries(props.headers).forEach(([key, value]) => {
		xhr.setRequestHeader(key, value);
	});
  xhr.send(formData);
  xhr.onload = function onload() {
    const res = JSON.parse(xhr.response)
    if (res.code !== 0) {
      Modal.error({
        content: res.msg,
      });
      onCancelModal()
      return
    }
		Message.success('上传成功!');
    onCancelModal()
  };
}

const onChangeTab = async (key: any) => {  // 切换tab
  select_type.value = key
  emit('onChangeTab', key)
}

const downLoadImage = async (media_url: string) => { // 下载图片
  emit('onDownLoad', media_url)
}

const pageChange = async (current: number) => { // 页码改变的回调，参数是改变后的页码及每页条数
  emit('pageChange', current)
}
const pageSizeChange = async (pageSize: number) => { // pageSize 变化的回调
  emit('pageSizeChange', pageSize)
}

// 预览音频
const previewMedia = async (media_id: string) => {
  emit('onPreview', media_id,select_type.value)
}

const onDeleteMedia = async (media_id: string) => { // 删除素材
  emit('onDelete', media_id)
}
</script>

<style scoped lang="scss">
@import "style/index.scss";
</style>
<!--<style>-->
<!--.video-modal-body {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--</style>-->
