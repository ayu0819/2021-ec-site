// Storeの初期状態 必要な状態を管理
// products users にディレクトリを分ける
const initialState = {
    users: {
        isSignedIn: false,
        role: "",
        uid: "",
        username: ""
    },
    products: {
        list: []
    }
};

export default initialState