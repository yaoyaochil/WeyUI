import { defineComponent, provide, ref } from "vue";
import Address from "./components/address";
import { OrganizationData } from "@/type/organization";
import { Empty } from "@arco-design/web-vue";
import { Component } from 'vue';

const WOrganization: Component = defineComponent({
  name: 'WOrganization',
  props: {
    data: {
      type: Array,
      default: () => ([] as OrganizationData[] | unknown),
    },
    menuOption: {
      type: Array,
      default: () => ([] as any[]),
    },
  },
  emits: ['department-add', 'department-edit', 'department-delete','on-menu-click'],
  setup(props,{emit}) {
    provide('emit', emit);
    provide('menuOption', props.menuOption);
    return {
      props
    }
  },
  render() {
    let {props} = this
    const style = {
      display: 'flex',
      gap: '10px',
      width: '100%',
      height: '100%',
      padding: '10px',
      boxSizing: 'border-box' as 'border-box',
      cursor: 'pointer',
      overflow: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <div style={style}>
        {props.data?.length === 0 && <Empty />}
        {props.data?.length > 0 && <Address data={props.data} />}
      </div>
    )
  }
})

export default WOrganization;