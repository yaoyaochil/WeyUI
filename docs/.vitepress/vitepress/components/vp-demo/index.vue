<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <Example :path="path" />
      <a-divider class="m-0" />
      <div class="op-btns">
        <a-tooltip content="复制代码">
					<icon-copy :size="16" class="op-btn" @click="copyCode" />
        </a-tooltip>
        <a-tooltip content="查看源代码">
					<icon-code-square :size="16" class="op-btn" @click="toggleSourceVisible()" />
        </a-tooltip>
      </div>
			<div class="fade" :style="`${sourceVisible?'height:450px':'height:0px'}`">
				<SourceCode v-show="sourceVisible" :source="source" />
			</div>
      <Transition>
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
					<icon-caret-up :size="16" />
          <span>隐藏源代码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { Message } from '@arco-design/web-vue';
import Example from './vp-example.vue'
import SourceCode from './vp-source-code.vue'


const props = defineProps<{
  rawSource: string // 源码
  source: string
  path: string
  description?: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const copyCode = async () => {
  if (!isSupported) {
		Message.error('浏览器不支持复制')
  }
  try {
    await copy()
		Message.success('复制成功')
  } catch (e: any) {
		Message.error('复制失败')
  }
}
</script>
<style lang="scss" scoped>
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);
  height: 100%;
  width: auto;
  .m-0 {
    margin: 0;
  }
  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}

.fade {
	transition: height .5s;
	overflow: auto;
}
</style>
