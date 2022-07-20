import { request } from 'network/request'

export function getHomeMul() {
    return request({
        url: '/home/multidata'
    })
}