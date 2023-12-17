import { defineComponent } from "vue"

/**
 * 卡片组件
 */
export default defineComponent({
    name: 'w-card',
    props: {
        /**
         * 卡片的宽度
         * @default 100
         * @description 卡片的宽度
         */
        width: {
            type: Number,
            default: 100
        },
        /**
         * 卡片的高度
         * @default 100
         * @description 卡片的高度
         */
        height: {
            type: Number,
            default: 100
        },
        /**
         * 卡片的布局
         * @default false
         * @description 是否居中
         */
        center: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        const style = {
            width: `${props.width}px`,
            height: `${props.height}px`,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            alignItems: props.center ? 'center' : 'flex-start',
            borderRadius: '5px',
            boxShadow: 'var(0 0 #0000,0 0 #0000),var(0 0 #0000, 0 0 #0000),var(inset 0 2px 4px 0 rgb(0 0 0 / .05))',
            padding: '10px'
        }
        return () => (
            <>
                <div style={style}>{slots.default && slots.default()}</div>
            </>
        )
    }
})