export default {
    // demo:
    dfpt: [
        {
            name: 'list',
            method: 'get',
            url: '/list',
            params: {
                list: 'list', // 不良品信息列表
                page: 1, // 分页索引
                pageSize: 20 // 一页数据量
            },
            desc: '获取不良品列表'
        },
        {
            name: 'getDetailList',
            method: 'post',
            url: '/getDetailList',
            params: {
                id: 0
            },
            desc: '不良品详情',
        },
        {
            name: 'save',
            method: 'post',
            url: '/save',
            params: {
                businessNo: '', // 单号
                canInbound: true, // 是否可以入库
                carrier: '', // 承运方
                dept: '', // 所属工贸
                firstLevelReason: '', // 一级审核原因
                id: '', // id
                inboundReason: '', // 入库审核原因
                inboundType: '', // 机编
                machineCode: '', // 型号
                model: '', // 单号
                problemDesp: '', // 问题描述
                productCategory: '', // 产品大类
                status: 'SUBMIT', // 保存状态 'TEMP' 'SUBMIT'
                treatmentType: '', // 入库后处理措施 'REPAIR' 'RETURN'
                userId: '', // 工号
                userName: '', // 姓名
                photos: [ // 不入库产品问题照片(4张)
                    {
                        photoId: '', // 图片Id
                        type: 'P1' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P2' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P3' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P4' // 图片类型
                    },
                ]
            },
            desc: '不良品提交',
        },
        {
            name: 'temp',
            method: 'post',
            url: '/temp_save',
            params: {
                businessNo: '', // 单号
                canInbound: true, // 是否可以入库
                carrier: '', // 承运方
                dept: '', // 所属工贸
                firstLevelReason: '', // 一级审核原因
                id: '', // id
                inboundReason: '', // 入库审核原因
                inboundType: '', // 机编
                machineCode: '', // 型号
                model: '', // 单号
                problemDesp: '', // 问题描述
                productCategory: '', // 产品大类
                status: 'TEMP', // 保存状态 'TEMP' 'SUBMIT'
                treatmentType: '', // 入库后处理措施 'REPAIR' 'RETURN'
                userId: '', // 工号
                userName: '', // 姓名
                photos: [ // 不入库产品问题照片(4张)
                    {
                        photoId: '', // 图片Id
                        type: 'P1' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P2' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P3' // 图片类型
                    },
                    {
                        photoId: '', // 图片Id
                        type: 'P4' // 图片类型
                    },
                ],
            },
            desc: '不良品保存',
        },
    ]
}