import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getIsSignedIn} from "./reducks/users/selectors";
import {listenAuthState} from "./reducks/users/operations";
// Authはユーザーがログインしているかを判定したい
// ログインしてないなら listenAuchStateを呼び出す仕組みを作る

const Auth = ({children}) => {
    const dispatch = useDispatch();
    // reduxのStateを取得
    const selector = useSelector((state) => state);
    // isSingedIn を取得
    const isSingedIn = getIsSignedIn(selector);

    useEffect(() => {
        if (!isSingedIn) {
            dispatch(listenAuthState())
        }
    }, []);

    if (!isSingedIn) {
        return <></>
    } else {
        return children
    }
}

export default Auth;