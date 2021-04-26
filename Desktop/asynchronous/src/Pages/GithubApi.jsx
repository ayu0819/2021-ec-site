import React from 'react';

const getGithubName = async () => {
    const message = 'ユーザーID:';
    const url = 'https://api.github.com/users/ayu0819';

    const json = await fetch(url)
    .then(res => {
        console.log('非同期処理に成功しました。')
        return res.json()
    }).catch(error => {
        console.error('非同期処理に失敗しました。',error)
        return null
    });

    console.log(message + json.login)
}

const GithubApi = () => {
 return(
    <div className="contents">
     <h1>Github Api</h1>
     <button onClick={getGithubName}>Get Api</button>
    </div>
)
}

export default GithubApi;