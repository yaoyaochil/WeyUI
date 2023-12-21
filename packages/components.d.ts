import './style/global.less'
import WCustomMenu from "./custom-menu/src/index.vue";
import WMedia from "./media/src/index.vue";
import WOrganization from "./organization/src/index.tsx";
import WCard from "./card/src/card";
import WDepartmentUser from "./department-user/index.tsx";



declare module 'vue' {
  export interface GlobalComponents {
    WCustomMenu: typeof WCustomMenu
    WMedia: typeof WMedia
    WOrganization: typeof WOrganization
    WCard: typeof WCard
    WDepartmentUser: typeof WDepartmentUser
  }
}