<template>
  <div style="padding: 20px; width: 100%; height: 500px">
    <w-department-user
      :userList="userList"
      :searchLoading="isSearching"
      @deleteUser="(e:any) => {console.log('deleteUser', e)}"
      @onSearch="searchUser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSearching = ref(false)

// 模拟搜索
const searchUser = (e: string) => {
  console.log('searchUser', e)
  isSearching.value = true

  setTimeout(() => {
    isSearching.value = false
  }, 2000)
}

const userList = ref([
  {
    id: 1,
    avatar:
      'https://moonwife.top/upload/2023/06/src%3Dhttp___c-ssl.duitang.com_uploads_blog_202105_09_20210509012315_89541.thumb.1000_0.jpeg%26refer%3Dhttp___c-ssl.duitang.webp',
    nickName: '@Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 2,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 3,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 4,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 5,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 6,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 7,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 8,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 9,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
  {
    id: 10,
    avatar: '',
    nickName: 'Tim',
    job: 'Creater & Design',
    phone: '188********',
  },
] as {
  id: number
  avatar: string
  nickName: string
  job: string
  phone: string
}[])
</script>
