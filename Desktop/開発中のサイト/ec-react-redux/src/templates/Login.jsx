import React from 'react';
// import {useDispatch} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../reducks/users/operations"


const Login = () => {
const dispatch = useDispatch()
const selector = useSelector(state => state); // 現在のStoreの状態を取得する


 return(
     <div>
         <h2>ログイン</h2>
         <button onClick={() => dispatch(signIn()) }>
           ログインする
         </button>
     </div>
 )
}

export default Login;


// 以前作成してたもの

// import React from 'react';
// // import {useDispatch} from "react-redux";
// import {useDispatch, useSelector} from "react-redux";
// import {push} from 'connected-react-router';
// import {signInAction} from "../reducks/users/actions";

// const Login = () => {
// const dispatch = useDispatch()
// const selector = useSelector(state => state); // 現在のStoreの状態を取得する

//  console.log(selector.router) // StoreのRouterを取得する

//  return(
//      <div>
//          <h2>ログイン</h2>
//          <button onClick={() => {
//          dispatch(signInAction({uid:"00001",username: "Ayu"}));
//          dispatch(push('/'))
//           }}>
//            ログインする
//          </button>
//      </div>
//  )
// }

// export default Login;