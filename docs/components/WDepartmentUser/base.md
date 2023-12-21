# 成员管理

## 引入

```js
import { WDepartmentUser } from '@yaoyaochi/weyui'
```

### 使用方法

:::demo
WDepartmentUser/base
:::

## 配置参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| userList | 数据 | Array | — | — |
| searchLoading | 搜索按钮loading | Boolean | — | false |


## 事件

| 事件名称 | 说明 | 回调参数 |
|deleteUser | 删除成员 | (item) |
|onSearch | 搜索 | (value) |