# 公众号素材管理

## 引入

```js
import { WMedia } from '@yaoyaochi/weyui'
```

### 基础用法

:::demo
WMedia/base
:::

### 参数说明

| 参数                | 说明       | 类型     | 可选值 | 默认值 | 备注                                                    |
|-------------------|----------|--------|-----|----|-------------------------------------------------------|
| media-data        | 素材数据     | Object | —   | `{}` | <a :href="Docurl" target="__black">详见微信开发者文档-素材管理</a> |
| total             | 素材总数     | Number | —   | —  | -                                                     |
| current           | 当前页码     | Number | —   | —  | -                                                     |
| page-size         | 每页显示数量   | Number | —   | —  | -                                                     |
| page-size-options | 每页显示数量选项 | Array  | —   | —  | -                                                     |
| preview-url       | 素材预览地址   | String | —   | —  | -                                                     |


<script setup>
import {ref} from 'vue';

const Docurl = ref('https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Get_materials_list.html')
</script>


### 事件说明

| 事件名称          | 说明    | 回调参数                                         |
|---------------|-------|----------------------------------------------|
| on-down-load  | 下载素材  | `url: string`                                |
| on-delete     | 删除素材  | `media_id: string`                           |
| on-preview    | 预览素材  | `media_id: string` <br/>`select_type:string` |
| page-change   | 页码改变  | `current: number`                            |
| on-change-tab | 切换tab | `pageSize: number`                           |
