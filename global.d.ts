import WCustomMenu from './lib/custom-menu/src/index.vue'
import WMedia from './lib/media/src/index.vue'
import WOrganization from './lib/organization/src/index.vue'
import WCard from './lib/card/src/card'
// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // ElAffix: typeof import('element-plus')['ElAffix']
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
    WOrganization: typeof WOrganization
    WCard: typeof WCard
  }

  interface ComponentCustomProperties {
    // $message: typeof import('element-plus')['ElMessage']
  }
}

export {}
