import WCustomMenu from "./custom-menu/src/index.vue";
import WMedia from "./media/src/index.vue";
import WOrganization from "./organization/src/index.tsx";
import WCard from "./card/src/card";
import './style/global.less'


declare module 'vue' {
  export interface GlobalComponents {
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
    WOrganization: typeof WOrganization
    WCard: typeof WCard
  }
}