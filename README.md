# WeyUI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/yaoyaochil/WeyUI.svg)](https://github.com/yaoyaochil/WeyUI/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/yaoyaochil/WeyUI.svg)](https://github.com/yaoyaochil/WeyUI/issues)
[![GitHub Forks](https://img.shields.io/github/forks/yaoyaochil/WeyUI.svg)](https://github.com/yaoyaochil/WeyUI/network)
![项目截图](./logo.svg)

## 项目简介

WeyUI 是一个使用 Vite、Vue 3、Arco.Design UI 和 TypeScript 开发的项目，旨在为微信平台开发提供各种组件，使开发更加便捷。

## 特点

- 使用 Vue 3 的 Composition API 构建
- 基于 TypeScript，提供类型安全
- 快速开发，使用 Vite 构建工具
- 针对微信公众号、企业微信、微信小程序后台管理组件的特定需求定制

## 安装

你可以通过以下命令安装 WeyUI：

```bash
# 目前还没有上线npm 后续期待
npm install @yaoyaochi/weyui
```

## 使用
```vue
<template>
  <custom-menu @submitData="subMenuData" />
</template>

<script setup>
import { CustomMenu } from '@yaoyaochi/weyui'
import '@yaoyaochi/weyui/style.css'
const subMenuData = async(menuData) => {
  console.log(menuData)
}
</script>

<style scoped lang="scss">

</style>
```

## 贡献
如果你想为 WeyUI 贡献代码或报告问题，请查看我们的 贡献指南。

## 许可证
这个项目使用 MIT 许可证。

## 作者
- 作者名字：[Tim Wang](https://github.com/yaoyaochil)
- 邮箱：wangrui19970405@gmail.com
- 更多信息
- 项目链接：[GitHub](https://github.com/yaoyaochil/WeyUI)
- 问题和反馈：[GitHub Issues](https://github.com/yaoyaochil/WeyUI/issues)
