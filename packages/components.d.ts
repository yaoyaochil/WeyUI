import WCustomMenu from "./custom-menu/src/index.vue";
import WMedia from "./media/src/index.vue";

declare module 'vue' {
  export interface GlobalComponents {
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
  }
}