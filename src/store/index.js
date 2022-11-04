import { createStore } from 'vuex'

export default createStore({
    state: {
        cartList: {}
    },
    getters: {},
    mutations: {
        addItemToCart(state, payload) {
            const { shopId, productId, productInfo, num } = payload
            let shopInfo = state.cartList[shopId]
            if (!shopInfo) {
                shopInfo = {}
            }
            let product = shopInfo[productId]
            if (!product) {
                product = productInfo
                product.count = 0
                product.checked = true
            }
            product.count += num
            if (product.count < 0) {
                product.count = 0
            }
            shopInfo[productId] = product
            state.cartList[shopId] = shopInfo
            if (product.count === 0) {
                delete state.cartList[shopId][productId]
            }
        },
        clearCartList(state, payload) {
            const { shopId } = payload
            state.cartList[shopId] = {}
        },
        changeCartItemState(state, payload) {
            const { shopId, productId } = payload
            state.cartList[shopId][productId].checked = !state.cartList[shopId][productId].checked
        },
        changeCartAllState(state, payload) {
            let { checkedAll, shopId } = payload
            checkedAll = !checkedAll
            for (let i in state.cartList[shopId]) {
                state.cartList[shopId][i].checked = checkedAll
            }
        }
    },
    actions: {},
    modules: {}
})