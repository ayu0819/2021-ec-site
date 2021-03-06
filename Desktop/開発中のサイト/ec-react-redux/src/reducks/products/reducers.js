// actions と initialState を読み込む
import * as Actions from './actions'
import initialState from '../store/initialState'

// Base
// export const ProductReducer = (state = initialState.products, action) => {
//    switch (action.type) {
//        default: 
//        return state
//    }
// }

export const ProductReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return {
                ...state,
                list: action.payload
            };
        default: 
        return state
    }
 }