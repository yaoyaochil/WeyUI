export const getMenuDataApi = () => {
  return {
    "button": [
      {
        "name": "菜单1",
        "sub_button": [
          {
            "type": "click",
            "name": "子菜单1",
            "key": "222"
          }
        ]
      },
      {
        "name": "菜单2",
        "sub_button": [
          {
            "type": "miniprogram",
            "name": "子菜单2",
            "appid": "wxc1ebbc8236ffae2b",
            "pagepath": "/pages/index/index"
          }
        ]
      },
      {
        "type": "click",
        "name": "菜单3",
        "key": "123",
        "sub_button": [

        ]
      }
    ],
    "matchrule": {

    }
  }
}
