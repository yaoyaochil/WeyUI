import WCustomMenu from "./custom-menu/src/index.vue";
import WMedia from "./media/src/index.vue";
import WOrganization from "./organization/src/index.vue";

declare module 'vue' {
  export interface GlobalComponents {
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
    WOrganization: typeof WOrganization
  }
}