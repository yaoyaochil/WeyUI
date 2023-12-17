import { defineComponent, ref } from 'vue'
import { Form, Input, FormItem, Alert, Button } from '@arco-design/web-vue'
import { IconIdcard } from '@arco-design/web-vue/es/icon'
export const addNodeView = defineComponent({
  name: 'addNodeView',
  // 使用emit
  emits: ['onSubmit', 'onCancel'],
  props: {
    pid: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const formData = ref({
      label: '',
      leader: '',
      description: '',
    })

    const onSubmit = () => {
      emit('onSubmit', props.pid, formData.value)
    }

    const onCancel = () => {
      emit('onCancel')
    }

    return {
      formData,
      onCancel,
      onSubmit,
    }
  },
  render() {
    let { formData, onCancel, onSubmit } = this

    const alertSlots = {
      icon: () => <IconIdcard />,
    }
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Alert
          style={{ marginBottom: '15px' }}
          type="info"
          v-slots={alertSlots}
        >
          新增部门
        </Alert>
        <Form model={formData} autoLabelWidth>
          <FormItem required label="部门名称">
            <Input v-model={formData.label} />
          </FormItem>
          <FormItem label="部门负责人">
            <Input v-model={formData.leader} />
          </FormItem>
          <FormItem label="部门描述">
            <Input v-model={formData.description} />
          </FormItem>
          <FormItem>
            <Button style={{ marginRight: '20px' }} onClick={onCancel}>
              取消
            </Button>
            <Button onClick={onSubmit}>增加</Button>
          </FormItem>
        </Form>
      </div>
    )
  },
})