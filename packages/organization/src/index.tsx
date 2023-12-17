import { defineComponent, provide, ref } from "vue";
import Address from "./components/address";
import { OrganizationData } from "@/type/organization";
import { Empty } from "@arco-design/web-vue";

export default defineComponent({
  name: 'Organization',
  props: {
    data: {
      type: Array,
      default: () => ([] as OrganizationData[] | unknown),
    }
  },
  emits: ['department-add', 'department-edit', 'department-delete'],
  setup(props,{emit}) {
    provide('emit', emit);
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
      boxShadow: '0 0 4px #ccc',
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