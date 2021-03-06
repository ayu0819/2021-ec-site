// useCallbackはstrageに使う
import React from 'react';


const ImagePreView = (props) => {
return (
 // onClick イベントでは、propsで渡されたdeleteを呼び出す。delete関数にははpropsで渡されたidをもつ
 <div className="p-media__thumb" onClick={() => props.delete(props.id)}>
    <img slt="プレビュー画像" src={props.path} / >
 </div>
)
}

export default ImagePreView;