// 获取其它素材列表
import service from "../../../../src/utils/request";

export const getMediaOtherList = async (type: string) => {
  if (type === 'image') {
    return {
      total_count: 20,
      item_count: 20,
      item: [
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0ByYokUjsICtHyKg",
          "name": "素材01",
          "update_time": "2023-10-15T14:30:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/4A47A0DB6E60853DEDFCFDF08A5CA249_1690128964755.png"
        },
        {
          "media_id": "jOkUjsICtHyKgByYokUjsICtHyKgQFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWx",
          "name": "素材02",
          "update_time": "2023-10-15T14:35:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/FB5C81ED3A220004B71069645F112867_1693641651991.png"
        },
        {
          "media_id": "zTAxNpOYV7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0jOkUjsICtHyKgRmfS_G5f2",
          "name": "素材03",
          "update_time": "2023-10-15T14:40:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/10FB15C77258A991B0028080A64FB42D_1693641655297.png"
        },
        {
          "media_id": "V7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYjOkUjsICtHyKg",
          "name": "素材04",
          "update_time": "2023-10-15T14:45:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/09DD8C2662B96CE14928333F055C5580_1693641659926.png"
        },
        {
          "media_id": "ICtHyKgFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxjOkUjs",
          "name": "素材05",
          "update_time": "2023-10-15T14:50:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/F19C9085129709EE14D013BE869DF69B_1693641670107.png"
        },
        {
          "media_id": "QFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxICtHyKgjOkUjs",
          "name": "素材06",
          "update_time": "2023-10-15T14:55:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/4A47A0DB6E60853DEDFCFDF08A5CA249_1690128964755.png"
        },
        {
          "media_id": "DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxQFq6QzlaKCWjOkUjsICtHyKg3R0",
          "name": "素材07",
          "update_time": "2023-10-15T15:00:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/FB5C81ED3A220004B71069645F112867_1693641651991.png"
        },
        {
          "media_id": "0131Z0RmfS_G5f2zTAxNpOYV7rkWxjOkUjsICtHyKgFq6QzlaKCWQ3R0DiujI",
          "name": "素材08",
          "update_time": "2023-10-15T15:05:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/10FB15C77258A991B0028080A64FB42D_1693641655297.png"
        },
        {
          "media_id": "jOkUjsICtHyKgFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWx",
          "name": "素材09",
          "update_time": "2023-10-15T15:10:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/09DD8C2662B96CE14928333F055C5580_1693641659926.png"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0ByYokUjsICtHyKg",
          "name": "素材10",
          "update_time": "2023-10-15T15:15:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/4A47A0DB6E60853DEDFCFDF08A5CA249_1690128964755.png"
        },
        {
          "media_id": "jOkUjsICtHyKgByYokUjsICtHyKgQFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWx",
          "name": "素材11",
          "update_time": "2023-10-15T15:20:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/FB5C81ED3A220004B71069645F112867_1693641651991.png"
        },
        {
          "media_id": "zTAxNpOYV7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0jOkUjsICtHyKgRmfS_G5f2",
          "name": "素材12",
          "update_time": "2023-10-15T15:25:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/10FB15C77258A991B0028080A64FB42D_1693641655297.png"
        },
        {
          "media_id": "V7rkWxQFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYjOkUjsICtHyKg",
          "name": "素材13",
          "update_time": "2023-10-15T15:30:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/09DD8C2662B96CE14928333F055C5580_1693641659926.png"
        },
        {
          "media_id": "ICtHyKgFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxjOkUjs",
          "name": "素材14",
          "update_time": "2023-10-15T15:35:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/F19C9085129709EE14D013BE869DF69B_1693641670107.png"
        },
        {
          "media_id": "QFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxICtHyKgjOkUjs",
          "name": "素材15",
          "update_time": "2023-10-15T15:40:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/4A47A0DB6E60853DEDFCFDF08A5CA249_1690128964755.png"
        },
        {
          "media_id": "DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxQFq6QzlaKCWjOkUjsICtHyKg3R0",
          "name": "素材16",
          "update_time": "2023-10-15T15:45:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/FB5C81ED3A220004B71069645F112867_1693641651991.png"
        },
        {
          "media_id": "0131Z0RmfS_G5f2zTAxNpOYV7rkWxjOkUjsICtHyKgFq6QzlaKCWQ3R0DiujI",
          "name": "素材17",
          "update_time": "2023-10-15T15:50:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/10FB15C77258A991B0028080A64FB42D_1693641655297.png"
        },
        {
          "media_id": "jOkUjsICtHyKgFq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWx",
          "name": "素材18",
          "update_time": "2023-10-15T15:55:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/09DD8C2662B96CE14928333F055C5580_1693641659926.png"
        },
        {
          "media_id": "Fq6QzlaKCWQ3R0DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxICtHyKgjOkUjs",
          "name": "素材19",
          "update_time": "2023-10-15T16:00:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/F19C9085129709EE14D013BE869DF69B_1693641670107.png"
        },
        {
          "media_id": "DiujI0131Z0RmfS_G5f2zTAxNpOYV7rkWxQFq6QzlaKCWjOkUjsICtHyKg3R0",
          "name": "素材20",
          "update_time": "2023-10-15T16:05:00Z",
          "url": "https://img.imdodo.com/openapitest/upload/cdn/4A47A0DB6E60853DEDFCFDF08A5CA249_1690128964755.png"
        }
      ]
    }
  }
  if (type === 'voice') {
    return {
      total_count: 20,
      item_count: 20,
      item: [
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材01",
          "update_time": 1697454979,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材02",
          "update_time": 1697454980,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材03",
          "update_time": 1697454981,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材04",
          "update_time": 1697454982,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材05",
          "update_time": 1697454983,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材06",
          "update_time": 1697454984,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材07",
          "update_time": 1697454985,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材08",
          "update_time": 1697454986,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材09",
          "update_time": 1697454987,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材10",
          "update_time": 1697454988,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材11",
          "update_time": 1697454989,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材12",
          "update_time": 1697454990,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材13",
          "update_time": 1697454991,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材14",
          "update_time": 1697454992,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材15",
          "update_time": 1697454993,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材16",
          "update_time": 1697454994,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材17",
          "update_time": 1697454995,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材18",
          "update_time": 1697454996,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkUH7-HhkCi-Im1rlj3eKmVcZdgKp_mXfgNoMsDuWD4rC",
          "name": "音频素材19",
          "update_time": 1697454997,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkcpR-yfCFBYVzm2ij4x7SjVoEV9-Qzfx2WfY64j1O_3N",
          "name": "音频素材20",
          "update_time": 1697454998,
          "url": "https://member.kjzc.club/test01.mp3"
        }
      ]
    }
  }
  if (type === 'video') {
    return {
      total_count: 20,
      item_count: 20,
      item: [
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材01",
          "update_time": 1697454979,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材02",
          "update_time": 1697454980,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材03",
          "update_time": 1697454981,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材04",
          "update_time": 1697454982,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材05",
          "update_time": 1697454983,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材06",
          "update_time": 1697454984,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材07",
          "update_time": 1697454985,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材08",
          "update_time": 1697454986,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材09",
          "update_time": 1697454987,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材10",
          "update_time": 1697454988,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材11",
          "update_time": 1697454989,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材12",
          "update_time": 1697454990,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材13",
          "update_time": 1697454991,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材14",
          "update_time": 1697454992,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材15",
          "update_time": 1697454993,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材16",
          "update_time": 1697454994,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材17",
          "update_time": 1697454995,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材18",
          "update_time": 1697454996,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材19",
          "update_time": 1697454997,
          "url": "https://member.kjzc.club/test01.mp3"
        },
        {
          "media_id": "RmfS_G5f2zTAxNpOYV7rkQ0qNqKyq-FNR81CKgJ9dDhbEJM_sunnIR3y8e9oVw_o",
          "name": "视频素材20",
          "update_time": 1697454998,
          "url": "https://member.kjzc.club/test01.mp3"
        }
      ]
    }
  }
  return {
    total_count: 0,
    item_count: 0,
    item: []
  }
}

// 获取图文素材列表
export const getMediaNewsList = async () => {
  return [
    {}
  ]
}

// 获取单个素材
export const getMedia = async (data: any) => {
  if (data.type === 'video' || data.type === 'news') {
    return service({
      url: '/wechat/media/getMediaByID',
      method: 'post',
      data,
    })
  }
  return service({
    url: '/wechat/media/getMediaByID',
    method: 'post',
    data,
    responseType: 'blob'
  })
}
