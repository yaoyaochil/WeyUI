<template>
  <div style="padding: 20px; width: 100%; height: 500px">
    <w-organization :data="data" @department-add="onDepartMentAdd" @department-delete="onDepartMentDel" @department-edit="onDepartMentEdit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface OrganizationData {
    id: number;
    name: string;
    parentid: number;
    [key: string]: any;
}

// 添加部门事件
const onDepartMentAdd = (data: { parentid: number }) => {
  console.log('新增部门事件：父部门ID', data.parentid)
}

// 删除部门事件
const onDepartMentDel = (data: { id: number }) => {
  console.log('删除部门事件：部门ID', data.id)
}

// 编辑部门事件
const onDepartMentEdit = (data: { id: number }) => {
  console.log('编辑部门事件：部门ID', data.id)
}

const data = ref<OrganizationData[]>([
  {
    id: 1,
    name: '波动网络信息有限公司',
    name_en: '',
    department_leader: [],
    parentid: 0,
    order: 100000000,
  },
  {
    id: 2,
    name: '行政人事',
    name_en: '',
    department_leader: [],
    parentid: 1,
    order: 100000000,
  },
  {
    id: 3,
    name: '董事',
    name_en: '',
    department_leader: [],
    parentid: 1,
    order: 99999000,
  },
  {
    id: 4,
    name: '总裁室',
    name_en: '',
    department_leader: [],
    parentid: 1,
    order: 99998000,
  },
  {
    id: 5,
    name: '信息发展中心',
    name_en: '',
    department_leader: [],
    parentid: 1,
    order: 99997000,
  },
  {
    id: 6,
    name: '商业信息条线',
    name_en: '',
    department_leader: [],
    parentid: 5,
    order: 100000000,
  },
  {
    id: 7,
    name: '策划部',
    name_en: '',
    department_leader: [],
    parentid: 1,
    order: 99996000,
  },
])
</script>

<style scoped lang="scss"></style>
