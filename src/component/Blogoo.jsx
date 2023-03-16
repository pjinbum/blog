import React from "react";
import './Blogoo.css'
import { useState } from "react";

function Blogoo(){
  
     const [title , setTitle] = useState([
        'Title1' ,
        'Title2' ,
        'Title3' ,
     ])
     
    //  여기다 스테이트 두개

    //모달창을 띄우기 위한 상태값
     let [modal,setModal] =useState(false);
     //모달창에 표시될 제목 글의 인덱스
     let [modalTitle , setModalTitle] = useState(0);


     let name = [
        '이름1' ,
        '이름2' ,
        '이름3'
     ]


    return(
     <div>
        <div className="nav">
           <h1>Blog</h1>
        </div>

        {
            title.map((item , i)=>{
                return(
                    <div key={i} className="list" onClick={()=>{                        
                        // modal && modalTitle === i ? setModal(false) : (setModal(true),setModalTitle(i))
                        if(modal && modalTitle === i){
                            setModal(false)
                        } else {
                            setModal(true);
                            setModalTitle(i)
                        }
                      
                    }} >
                        <h4 >{item}</h4>
                        <p>안녕하세요 저는 {name[i]}입니다.</p>                       
                        <button onClick={function(){
                         
                        }}>글 삭제</button>
                       
                       


                      
                    </div>
                )
            })

            
            
        }
      
        {/* 맵함수 밖에 */}
        {
            modal && <Modal modalTitle={modalTitle} title={title} closeModal={()=> setModal(false)}></Modal>
        }
     
     </div>
    )
}

// ---------------------------------------------------------------------

function Modal(props){

    return(
        <div className="modal">
          <h4>{props.title[props.modalTitle]}</h4>
          <p>content</p>
          <button onClick={props.closeModal}>닫기</button>
        </div>
    )
}




export default Blogoo ;