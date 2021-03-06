// actions と initialState を読み込む
import * as Actions from './actions'
import initialState from './store/initialState'

export const UserReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state, // initialState reducers は initialState を上書きしてしまう 必ずstateを書くこと
                ...action.payload  // actionの情報
            }
        case Actions.SIGN_OUT:
            return {
                ...action.payload  // actionの情報
            }
            default:
                return state
    }
}