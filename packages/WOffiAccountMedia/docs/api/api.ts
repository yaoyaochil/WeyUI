// 获取其它素材列表
import service from "../../../../src/utils/request";


// 获取素材列表
export const getMediaList = (data: any) => {
  return service({
    url: '/wechat/media/getMediaList',
    method: 'post',
    data
  })
}

// 根据素材id获取素材详情
export const getMediaById = (data: any) => {
  if (data.type === 'video') {
    return service({
      url: '/wechat/media/getMediaByID',
      method: 'post',
      data
    })
  }
  return service({
    url: '/wechat/media/getMediaByID',
    method: 'post',
    data,
    responseType: 'blob'
  })
}

// 删除素材
export const deleteMedia = (data: any) => {
    return service({
        url: '/wechat/media/deleteMediaByID',
        method: 'post',
        data
    })
}
