<template>
  <div>
    <w-offiaccount-menu :isRemote="true" :menuData="menu_data_list" @submitData="subMenuData"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const subMenuData = async(menuData: any)=>{
  console.log(menuData)
}
const menu_data_list = ref({
  button: [
    {
      type: 'click',
      name: '今日歌曲',
      key: 'V1001_TODAY_MUSIC',
      sub_button: []
    },
    {
      name: '菜单',
      sub_button: [
        {
          type: 'view',
          name: '搜索',
          url: 'http://www.soso.com/'
        },
        {
          type: 'miniprogram',
          name: 'wxa',
          url: 'http://mp.weixin.qq.com',
          appid: 'wx286b93c14bbf93aa',
          pagepath: 'pages/lunar/index'
        },
        {
          type: 'click',
          name: '赞一下我们',
          key: 'V1001_GOOD'
        }
      ]
    },
    {
      type: 'click',
      name: '官网',
      key: 'V1001_TODAY_MUSIC',
      sub_button: []
    }
  ],
  matchrule: {
    tag_id: '2',
    sex: '1',
    country: '中国',
    province: '广东',
    city: '广州',
    // client_platform_type: '2',
    language: 'zh_CN'
  }
})
</script>
