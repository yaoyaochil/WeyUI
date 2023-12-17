# 企业微信组织架构

## 引入

```js
import { WOrganization } from '@yaoyaochi/weyui'
```

### 使用方法

:::demo
WOrganization/base
:::

### 配置参数

| 参数 | 说明     | 类型  | 可选值 | 默认值                                      |
| ---- | -------- | ----- | ------ | ------------------------------------------- |
| data | 部门数据 | Array | —      | `OrganizationData[]` `根据微信官方结构使用` |

### 事件

| 事件名称          | 说明                 | 回调参数                       |
| ----------------- | -------------------- | ------------------------------ |
| department-add    | 添加部门(基于父部门) | `{parentid:number}` `父部门id` |
| department-delete | 删除部门             | `{id:number}` `部门id`         |
| department-edit   | 编辑部门             | `{id:number}` `部门id`         |
