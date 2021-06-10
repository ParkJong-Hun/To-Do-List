import React, { useState } from 'react';
import {dbService} from '../fbase';

const Add = () => {
    const [text, addText] = useState('');
    //Add 버튼 클릭
    const OnClick = (event) => {
        //list 컬렉션의 list_텍스트 문서의 text 필드에다가 입력한 값 저장
        dbService.collection("list").doc("list_" + text).set({
            text: text
        })
    }
    //텍스트 입력 바뀜
    const OnChange = (event) => {
        console.log(event.target.value);
        addText(event.target.value);
    }
    return (
        <div>
            <input type="text" id="listAddText" onChange={OnChange}/>
            <button onClick={OnClick}>Add</button>
        </div>
    );
}
export default Add;