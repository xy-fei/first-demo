import axios from 'axios'



export function request (config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })

}
export function request1 (config) {
    return new Promise((resolve, reject) => {
        const instance1 = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })
        instance1(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
    // 2. axios的请求拦截器
    // 2.1 请求拦截
    //   instance1.interceptors.request.use(config => {
    //     return config
    //   }, error => {
    //     // console.log(error);
    //   })
    //    // 2.2 响应拦截
    //    instance.interceptors.response.use(res => {
    //     return res.data
    //   }, err => {
    //     console.log(err);
    //   })



}

