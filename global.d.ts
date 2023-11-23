import WCustomMenu from './lib/custom-menu/src/index.vue'
import WMedia from './lib/media/src/index.vue'
// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // ElAffix: typeof import('element-plus')['ElAffix']
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
  }

  interface ComponentCustomProperties {
    // $message: typeof import('element-plus')['ElMessage']
  }
}

export {}
