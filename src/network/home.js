import { request, requestone } from 'network/request'

export function getHomeMul() {
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGood(type,page){
    return requestone({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}