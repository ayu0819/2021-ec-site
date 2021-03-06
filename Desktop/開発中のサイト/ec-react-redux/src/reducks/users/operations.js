import {signInAction} from './actions';
import {push} from 'connected-react-router';
import {auth,db, FirebaseTimestamp} from "../../firebase/index";

// 認証リッスンの作成
export const listenAuthState = () => {
    return async (dispatch) => {
      return auth.onAuthStateChanged(user => {
          if (user) {
              // users collection から ユーザーの uid に対してget()メソッドを使いユーザーの情報をとってくる
            const uid = user.uid
            db.collection('users').doc(uid).get()
              .then(snapshot => {
                  const data = snapshot.data()

                  dispatch(signInAction({
                      isSignedIn: true,
                      role: data.role,
                      uid: uid,
                      username: data.username,
                  }));

                //   dispatch(push('/'))
              })
          } else {
              dispatch(push('/signin'))
          }
      })
    }
}

// Reset Password operation
export const  resetPassword = (email) => {
    return async (dispatch) => {
        if (email === "") {
         alert("必須項目が見入力です");
         return false
        } else {
            auth.sendPasswordResetEmail(email)
            .then (()=> {
                alert('入力されたアドレスにパスワードリセット用のパスワードを送りました。')
                dispatch(push('/signin'))
            }).catch (() => {
                alert('パスワードリセットに失敗しました。');
            })
        }
    }
}

export const signIn = (email,password) => {
    return async (dispatch) => {
      // Validation
      if(email === "" || password === "") {
        alert("必須項目が見入力です");
        return false
    }
      
    return auth.signInWithEmailAndPassword(email, password)
      .then(result => {
          const user = result.user

          if (user) {
              const uid = user.uid
              db.collection('users').doc(uid).get()
                .then(snapshot => {
                    const data = snapshot.data()

                    dispatch(signInAction({
                        isSignedIn: true,
                        role: data.role,
                        uid: uid,
                        username: data.username,
                    }));

                    dispatch(push('/'))
                })
          }
      })
    }
}

export const signUp = (username, email, password, confirmPassword) => {
   return async (dispatch) => {
       // Validation
       if(username === "" || email === "" || password === "" || confirmPassword === "") {
           alert("必須項目が見入力です");
           return false
       }

       if (password !== confirmPassword) {
           alert("パスワードが一致しません");
           return false
       }

       return auth.createUserWithEmailAndPassword(email,password)
        .then(result => {
            const user = result.user

            if (user) {
                const uid = user.uid
                const timestamp = FirebaseTimestamp.now()

                const userInitialData = {
                    created: timestamp,
                    email: email,
                    role: "customer",
                    uid: uid,
                    updated_at: timestamp,
                    username: username
                }
                db.collection('users').doc(uid).set(userInitialData)
                 .then(() => {
                     dispatch(push('/'))
                 })
            }
        })
   }
}

// sign out 関数 の作成
export const signOut = () => {
    return async (dispatch) => {
      auth.signOut()
      .then(() => {
          dispatch(push('/signin'))
      })
    }
}