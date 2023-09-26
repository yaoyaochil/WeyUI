<template>
  <div class="kit-doc">
    <aside>
      <div style="display: block">
        <h3>组件</h3>
        <router-link style="display: block;padding-bottom: 5px" v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
      </div>
    </aside>
    <main>
      <header>
        <div class="header-box"></div>
      </header>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json';
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.kit-doc {
  display: flex;
  min-height: 100vh;

  aside {
    width: 200px;
    padding: 15px;
    //border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    background: #f9fafb;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
    .header-box {
      display: flex;
      flex: 1;
    }
  }
}
</style>
