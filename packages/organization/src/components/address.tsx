import { defineComponent, h, inject, ref, watch } from 'vue'
import { Vue3TreeOrg } from 'tim-tree-org'
import 'tim-tree-org/vue3-tree-org.css'
import { OrganizationData, OrganizationTree } from '@/type/organization'
import { transformOrgData } from '../utils/format'
import style from "../style/style.module.scss"

export default defineComponent({
  name: 'Address',
  props: {
    data: {
      type: Array,
      default: () => [] as OrganizationData[] | unknown,
    },
  },
  setup(props) {
    const emit = inject('emit') as any
    const orgDataList = ref<OrganizationTree>(
      transformOrgData(props.data as OrganizationData[]) as OrganizationTree
    )
    // ============= 管理Node部分 ================
    let addNodeModal: any // Modal实例

    // 监听并更新外部传递部门数据
    watch(
      () => props.data,
      (newVal) => {
        orgDataList.value = transformOrgData(newVal as OrganizationData[])
      }
    )

    const menuOption = inject('menuOption') as {
      name: string
      command: string | Function
    }[]

    /**
     * 节点添加事件
     * @param e
     * @param data
     */
    const onNodeAdd = (data: OrganizationTree) => {
      selectNode(data)
      emit('department-add', { parentid: data.id })
    }

    /**
     * 节点删除事件
     * @param data 节点数据
     */
    const onNodeDelete = (data: OrganizationTree) => {
      selectNode(data)
      emit('department-delete', { id: data.id })
    }

    /**
     * 节点编辑事件
     * @param data 节点数据
     */
    const onNodeEdit = (data: OrganizationTree) => {
      selectNode(data)
      emit('department-edit', { id: data.id })
    }

    // ============= 管理Node部分 ================

    // ============= 选择Node部分 ================

    /**
     * 节点点击事件
     * @param e
     * @param data
     */
    const onNodeClick = (e: any, data: any) => {
      console.log('onNodeClick', e, data)
      // 通过data.id找到orgData对应的节点 并配置style: { color: '#fff', background: '#4CAF50' },
      selectNode(data)
    }

    /**
     * 选择节点
     * @param data 节点数据
     */
    const selectNode = (data: any) => {
      if (!data) return
      // 如果是根节点
      if (data.id === 1) {
        orgDataList.value.style = { color: '#fff', background: '#4CAF50' }
        // 同时清除所有子节点的样式
        orgDataList.value.children?.forEach((item: OrganizationTree) => {
          item.style = {}
          if (item.children) {
            item.children.forEach((item2: OrganizationTree) => {
              item2.style = {}
            })
          }
        })
        return
      }
      orgDataList.value.style = {}
      // 遍历所有子节点
      orgDataList.value.children?.forEach((item: OrganizationTree) => {
        const isCurrentNode = item.id === data.id
        item.style = isCurrentNode
          ? { color: '#fff', background: '#4CAF50' }
          : {}

        if (item.children) {
          item.children.forEach((item2: OrganizationTree) => {
            const isCurrentChildNode = item2.id === data.id
            item2.style = isCurrentChildNode
              ? { color: '#fff', background: '#4CAF50' }
              : {}
          })
        }
      })
    }

    const contextmenuClick = (command:any,node:any) => {
      selectNode(node)
    }

    // ============= 选择Node部分 ================

    // ============= 拖拽Node部分 ================
    /**
     * 拖拽节点
     * @param e
     * @param data
     */
    const beforeDragEnd = (node: any, targetNode: any) => {
      console.log('onDragStop', node, targetNode)
      return false
    }

    // ============= 拖拽Node部分 ================

    // ============= 右键菜单部分 ================
    const onContextmenuShow = (command: {command:string,data:any,node:any}) => {
      emit('on-menu-click', command)
    }
    // ============= 右键菜单部分 ================

    return {
      orgDataList,
      onNodeClick,
      onNodeAdd,
      beforeDragEnd,
      onNodeDelete,
      onNodeEdit,
      contextmenuClick,
      menuOption,
      onContextmenuShow
    }
  },
  render() {
    let {
      orgDataList,
      onNodeClick,
      onNodeAdd,
      beforeDragEnd,
      onNodeDelete,
      onNodeEdit,
      menuOption,
      onContextmenuShow
    } = this
    const slots = {
      nodeDraggable: false,
    }

    const menusOption = [
      { name: '复制昵称', command: 'copy' },
      { name: '新增部门', command: 'add' },
      { name: '编辑部门', command: 'edit' },
      { name: '删除部门', command: 'delete' },
      ...menuOption
    ]
    

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Vue3TreeOrg
          nodeDraggable={false}
          data={orgDataList}
          props={{ label: 'name', pid: 'parentid' }}
          defineMenus={menusOption}
          label-class-name={style['drag-org-label']}
          click-delay={0}
          node-add={onNodeAdd}
          node-delete={onNodeDelete}
          node-edit={onNodeEdit}
          onOn-node-click={onNodeClick}
          before-drag-end={beforeDragEnd}
          onOn-contextmenu={onContextmenuShow}
        ></Vue3TreeOrg>
      </div>
    )
  },
})
