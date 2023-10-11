/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [{
    title: '自定义菜单',
    name: 'WOffiAccountMenu',
    path: '/components/WOffiAccountMenu',
    component: () => import('packages/WOffiAccountMenu/docs/README.md'),
  },{
    title: '素材管理',
    name: 'WOffiAccountMedia',
    path: '/components/WOffiAccountMedia',
    component: () => import('packages/WOffiAccountMedia/docs/README.md'),
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
