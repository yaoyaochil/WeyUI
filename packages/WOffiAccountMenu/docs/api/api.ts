import service from "../../../../src/utils/request";


// 获取菜单
export const getMenuList = () => {
  return service({
    url: '/wechat/menu/getMenuData',
    method: 'get'
  })
}


// 保存菜单
export const saveMenu = (data: any) => {
  return service({
    url: '/wechat/menu/createMenu',
    method: 'post',
    data
  })
}
