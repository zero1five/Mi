import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        carPanelData: [],
        carTimer: null,
        carShow: false,
    },
    getters: {
        /* 计算购物车内的商品总数 */
        totleCount(state) {
            let count = 0;
            state.carPanelData.forEach((goods) => {
                count += goods.count;
            })
            return count;
        },
        /* 计算购物车内的商品总价 */
        totlePrice(state) {
            let price = 0;
            state.carPanelData.forEach((goods) => {
                price += goods.goods_price * goods.count;
            })
            return price;
        }
    },
    mutations: {
        /* 增加购物车的商品 */
        addPanelData(state,data) {
            let bOff = true;
            state.carPanelData.forEach((goods) => {
                if (goods.goods_id === data.goods_id) {
                    goods.count ++ ;
                    bOff =false;
                }
            })
            if(bOff) {
                let goodsData = data;
                Vue.set(goodsData,'count',1);
                state.carPanelData.push(goodsData);
            }
            
        },
        /* 删除购物车里的商品 */
        delCarPanelData(state,id) {
            state.carPanelData.forEach((goods,index) => {
                if (goods.goods_id === id) {
                    state.carPanelData.splice(index,1);
                    return;
                }
            })            
        },
        showCar(state) {
            clearTimeout(state.carTimer);
            state.carShow = true;
        },
        hideCar(state) {
            state.carTimer = setTimeout(() => {
                state.carShow = false;
            }, 1000);
        }
    }
})

export default store