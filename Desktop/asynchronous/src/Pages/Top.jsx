import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Lists = styled.ul`
   text-align: center;
   li {
       margin: 0 auto;
       margin: 1em 0;
   }
`;

const Top = () => {
 return(
     <div className="contents">
    <Lists>
     <li><Link to="/synchronous">同期処理</Link></li>
     <li><Link to="/ajax">非同期処理</Link></li>
     <li><Link to="/githubapi">Github API</Link></li>
     <li><Link to="/youtubeapi">YouTube API</Link></li>
     <li><Link to="/jokejson">Joke Json API</Link></li>
    </Lists>
    </div>
)
}

export default Top;