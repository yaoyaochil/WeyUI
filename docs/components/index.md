### 快速上手

::: tip 提示

@yaoyaochi/weyui 基于 vue3 + ts + ArcoDesign 开发的高度定制化的组件库

:::

### 安装

```bash:no-line-numbers
npm install @yaoyaochi/weyui -S
```


### 使用

```js
// main.ts
import WeyUI from '@yaoyaochi/weyui'
import '@yaoyaochi/weyui/style.css'
const app = createApp(App)
app.use(WeyUI)
app.mount('#app')
```

### WeyUI组件库 Volar 类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions: {
  "types": [
    "@yaoyaochi/weyui/components.d.ts",
    ],
}

```

### docs文档结构目录
```
├─ examples               # Demo组件自动解析此文件夹下的所有.vue文件
├─ components             # .md文件
├─ public                 # 静态资源文件
├─ .vitepress
│  ├─ config              # 插件配置
|  │  ├─ global.ts        # 全局变量定义
|  │  └─ plugins.ts       # 自定义.md文件渲染
│  ├─ theme               # 主题配置
│  ├─ utils               # 文档展开隐藏代码高亮
│  ├─ vitepress
|  │  ├─ vp-demo          # Demo组件源码
|  │  ├─ style            # Demo组件样式
|  │  └─ index.ts         # 暴露Demo组件
│  └─ config.ts           # vitepress配置文件
├─ index.md               # 文档home页面
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件（支持tsx）
```

### Git 提交规范（PR提交规范）

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;


### 关联项目推荐

- [PowerX 一款以企业微信为基础的微信私域运营开放平台，帮助企业实现引流获客、精细运营。](https://github.com/ArtisanCloud/PowerX)
- [PowerWechat 一款基于WeChat SDK for Golang，支持小程序、微信支付、企业微信、公众号等全微信生态](https://github.com/ArtisanCloud/PowerWeChat)
