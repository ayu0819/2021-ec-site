import React, {useEffect, useCallback,useState} from 'react';
import { useDispatch } from 'react-redux';
import {TextInput,SelectBox, PrimaryButton} from '../componnents/UIkit';
import {saveProduct} from '../reducks/products/operations';
import {ImageArea, SetSizesArea} from '../componnents/Products';
import {db} from "../firebase/index";


const ProductEdit = () => {
  const dispatch = useDispatch();
   let id = window.location.pathname.split('/product/edit')[1];
   console.log('Before split / ',id);

   if (id !== "") {
     id =  id.split('/')[1]
     console.log("After split / ",id)
   }
    const [name, setName] = useState(""),
          [description, setDescription] = useState(""),
          [category, setCategory] = useState(""),
          [images, setImages] = useState([]),
          [gender, setGender] = useState(""),
          [price, setPrice] = useState(""),
          [sizes, setSizes] = useState([]);

    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])      

    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription])   
    
    const inputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])  

    const categories = [
        {id: "tops", name: "トップス"},
        {id: "shirts", name: "シャツ"},
        {id: "pants", name: "パンツ"},
    ];

    const genders = [
      {id: "all", name: "全て"},
      {id: "male", name: "メンズ"},
      {id: "female", name: "女性"},
  ];

  // firenaseからproduct情報を編集できるようにする関数 useEffect を使う
  useEffect(()=> {
    if (id !== "") {
      db.collection('products').doc(id).get()
      .then(snapshot => {
        const data = snapshot.data();
        // console.log(data)
        setImages(data.images);
        setName(data.name);
        setDescription(data.description);
        setCategory(data.category);
        setGender(data.gender);
        setPrice(data.price);
        // setSizes(data.sizes);
      })
    }
  }, [id]);

 return(
     <section>
         <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
         <div className="c-section-container">
           <ImageArea images={images} setImages={setImages} />
           <TextInput 
             fullWidth={true} label={"商品名"} multiline={false} required={true} rows={1} value={name} type={"text"} onChange={inputName}
           />

　　　　　　　<TextInput 
             fullWidth={true} label={"商品説明"} multiline={true} required={true} rows={5} value={description} type={"text"} onChange={inputDescription}
           />
           <SelectBox
            label={"カテゴリー"} options={categories} required={true} select={setCategory} value={category}
                />
          <SelectBox
            label={"性別"} options={genders} required={true} select={setGender} value={gender}
                />
　　　　　　　<TextInput 
             fullWidth={true} label={"価格"} multiline={false} required={true} rows={1} value={price} type={"number"} onChange={inputPrice}
           />
         <div className="module-spacer--small" />
         <SetSizesArea sizes={sizes} setSizes={setSizes}/>
         <div className="module-spacer--small" />
         <div className="center">
          <PrimaryButton
           label={"商品を保存"}
           onClick={() => dispatch(saveProduct(id,name,description,category,gender,price,images))}
         />
         </div>
         </div>
    
     </section>
 )
}

export default ProductEdit;
