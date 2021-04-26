import React from 'react';
import {CategoryChip} from '../UIkit';
import styled from 'styled-components';
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

const Contents = styled.div`
  padding-top:2em;
  display: flex;
  flex-wrap        : wrap;
  justify-content: center;
`;

const PopularCategory = () => {

    const Lists1 = [
        {
            icon: <CgIcons.CgGames/>,
            name: 'ゲーム本体',
            path: '/products/?category=games',
        },
        {
            icon: <GiIcons.GiOpenChest/>,
            name: 'ソフト',
            path: '/products/?category=software',
        },
        {
            icon: <FaIcons.FaRobot/>,
            name: 'アクセサリ',
            path: '/products/?category=accessories',
        },
        {
            icon: <GiIcons.GiGems/>,
            name: 'その他',
            path: '/products/?category=other',
        }
    ]
   
 return(
    <div className="common__item">
    <div className="common__center">
     <h2>人気のカテゴリー</h2>
     <Contents>
     {Lists1.map((List,Lists) => (
                   <CategoryChip key={Lists} id={List.id} icon={List.icon}  name={List.name} path={List.path} />
                 ))}
    </Contents>
     </div>
    </div>
 )
}

export default PopularCategory;