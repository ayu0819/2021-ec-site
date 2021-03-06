// send to Reducer
// アプリからStoreにデータを送る payload の役割

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
};

// 依頼の種類を定義する 関数に文字列を入れる
export const SIGN_OUT = "SIGN_OUT";
// SIGN_OTO のアクションを関数として定義する 引数は不要(決まった値があるから) 情報はログアウト後は空になる
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            uid: "",
            username: ""
        }
    }
};