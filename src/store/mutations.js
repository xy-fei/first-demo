export default {
    // addCart (state, payload) {
    // let cart = null
    // for (let item of state.cartList) {
    //     if (item.iid === payload.iid) {
    //         cart = item// cartList.count += 1
    //     }
    // }
    //mutation唯一目标就是将修改state的状态，每个方法尽可能比较单一
    addCounter (state, payload) {
        payload.count += 1
    },
    addToCar (state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    checkClick (state, payload) {
        let product = state.cartList.find(item => item.iid === payload)
        product.checked = !product.checked
    }
}