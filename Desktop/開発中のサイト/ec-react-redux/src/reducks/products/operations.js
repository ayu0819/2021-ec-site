import { db, FirebaseTimestamp } from "../../firebase"
import {push} from 'connected-react-router'
import {fetchProductsAction} from "./action"

const productsRef = db .collection('products')

export const fetchProducts = () => {
    return async (dispatch) => {
      productsRef.orderBy('updated_at', 'desc').get()
        .then(snapshots => {
          const productList = []
          snapshots.forEach(snapshot => {
            const product = snapshot.data()
            productList.push(product)
          })
          dispatch(fetchProductsAction(productList))
        })
    }
  }

export const saveProduct = (id,name, description, category, gender, price,images) => {
    return async (dispatch) => {
      const timestamp = FirebaseTimestamp.now()

      const data = {
          category : category,
          description : description,
          images: images,
          gender : gender,
          name : name ,
        //   ↓文字列を数値にしたいので10進数に変更
          price : parseInt(price,  10),
          updated_at: timestamp
      }

  if (id === "") {
        //   新規データを作るけれど、自動idを採番したい
        const ref = productsRef.doc()
        //   自動idを取得
          const id = ref.id
        //   データの中に今作成したidを入れる
          data.id = id
        //   新規作成の時にtimestampを入れたい
          data.created_at = timestamp
  }

    //   Firebaseにデータをsetしたらdispatchでhomeに戻る、失敗したら 例外処理 をする {marge: true} で更新する部分の身を更新させる
      return productsRef.doc(id).set(data, {marge: true})
      .then(()=>{
          dispatch(push('/'))
      }).catch((error)=>{
          throw new Error(error)
      })
    }
}


