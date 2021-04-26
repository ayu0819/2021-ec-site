import React,{useEffect} from 'react';
import { fetchPopularData } from '../Api';



const YouTubeApi = () => {
    // useEffect(() => {
    //     fetchPopularData().then((res) => {
    //         console.log('data', res)
    //     })
    // }, [])

    const date = () => {
        fetchPopularData().then((res) => {
            console.log('data', res)
        })
    }



 return(
    <div className="contents">
     <h1>YouTube Api</h1>
     <button onClick={date}>Get Api</button>
    </div>
)
}

export default YouTubeApi;