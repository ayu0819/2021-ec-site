import React,{useState} from 'react';
import * as AiIcons from "react-icons/ai";
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import HTMLReactParser from 'html-react-parser';
// Modal
import Modal from 'react-modal';
Modal.setAppElement('#root')

const media = {
  sp: '@media(max-width: 650px)'
}

const Chip = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    border: solid 2px #ea352d;
    background-color: #fff;
    border-radius:1em;
    padding: 0.5em;
    margin: 1em 0;
    p {
        padding-left: 0.5em;
        color: #ea352d;
    }
`;

const Btn = styled.div`
  background: #ea352d;
  margin: 1.5em auto 0;
  padding: 1.1em 3em;
  transition: all ease-out .3s;
  color: #fff;
  text-align: center;
  width: 100%;
  max-width: 5em;
  border-radius:2em;
  :hover{
    background: #aa2e28;
    transition: all ease-out .3s;
    label{
      font-size: 1.2em;
    }
  }
`;

const ModalItem = styled.div`
    padding: 2em;
    text-align:center;
    ${media.sp} {
    padding: 0.3em !important;
   }
    p {
        text-align: left;
        padding: 3em 0;
        ${media.sp} {
    font-size: 3.5vw;
   }
    }
    h2 {
    ${media.sp} {
    font-size: 4vw !important;
   }
   }
`;

const Icon = styled.p`
    padding-left: 1em;
`;

const ModalBack = styled.div`
    text-align: center;
`;

    // -------------------------------------
    //  returnCodeToBr関数
    //  HTML-react-parser で 正規表現を使用して <br> タグを開業につける
    // -------------------------------------  
    const returnCodeToBr = (text) => {
        if(text === "") {
          return text
        } else {
          return HTMLReactParser(text.replace(/\r?\n/g,'<br />'))
        }
      };

const NotificationChip = (props) => {
    const dispatch = useDispatch();

    // -----------------------------------------
    // Modal
    // -----------------------------------------
    const [modalIsOpen, setModalIsOpen] = useState(false)

 return (
<>
        <Chip onClick={() => setModalIsOpen(true)}>
            <Icon><AiIcons.AiFillNotification /></Icon>
            <p>{props.subject}</p>
        </Chip>

              {/* Modal */}
<Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} 
      onRequestClose={() => setModalIsOpen(false)}
      style={
       {
         overlay: {
           backGroundColor: 'grey'
         },
         content: {
           color: 'orange',
          //  width: '100%',
          //  maxWidth: '600px',
           height: 'auto',
           borderRadius: '0.5em',
           zIndex: '9999'
       }
      }
     }
      
      >
          <ModalItem>
 <h2>{props.subject}</h2>
 <p>{returnCodeToBr(props.text)}</p>
 </ModalItem>
 <div>
   <Btn onClick={() => setModalIsOpen(false)}>Close</Btn>
 </div>
</Modal>
{/* /Modal */}
</>
    );
};

export default NotificationChip;