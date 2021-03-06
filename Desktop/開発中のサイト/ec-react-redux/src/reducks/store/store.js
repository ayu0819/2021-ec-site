import {
    createStore as reduxCreateStore, // 同名関数を使うため、名前を変更
    combineReducers, 
    applyMiddleware // ② redux から middleware 読込
} from "redux";
import {UserReducer} from "../reducers";
import {connectRouter, routerMiddleware} from 'connected-react-router' // ② connected-react-router から router import
import thunk from "redux-thunk"; // 非同期処理のthunkをimportする ⇨ applyMiddleware で 引数 として受け取る

export default function createStore(history) { //② history 追加
    return reduxCreateStore(
        combineReducers({ //combineReducersでまとめで読み込む
            router: connectRouter(history), //② router 追加
             users: UserReducer,
        }),
        applyMiddleware( //② applyMiddleware 追加
            routerMiddleware(history), // router を ミドルウェア として使う宣言
            thunk // 引数 として受け取る
        )
    )
}