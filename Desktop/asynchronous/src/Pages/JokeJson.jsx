import React from 'react';
import Axios from "axios";

const JokeJson = () => {

    const getJoke = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                console.log(response)
            }
        );
       };

 return(
    <div className="contents">
     <h1>Joke Api</h1>
     <button onClick={getJoke}>Get Api</button>
    </div>
)
}

export default JokeJson;