import { request, request1 } from './axios'
export function getHomeMultidata () {
    return request({
        url: '/home/multidata'
    })
}
export function getHomedata (type, page) {
    return request1({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
