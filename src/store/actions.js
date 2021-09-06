import { reject, resolve } from "core-js/fn/promise"

export default {
    addcart (context, payload) {
        return new Promise((resolve, reject) => {
            let cart = context.state.cartList.find(item => item.iid === payload.iid)
            if (cart) {
                context.commit('addCounter', cart)
                resolve('当前商品数量+1')
            }
            else {
                payload.count = 1

                context.commit('addToCar', payload)
                resolve('添加了新的商品')
            }
        })




    }
}