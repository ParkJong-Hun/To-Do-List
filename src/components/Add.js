import React, { useState } from 'react';
import {dbService} from '../fbase';

const Add = () => {
    const [text, addText] = useState('');
    //Add 버튼 클릭
    const OnClick = () => {
        //list 컬렉션의 list_텍스트 문서의 text 필드에다가 입력한 값 저장
        if(text !== "") {
            dbService.collection("list").doc("list_" + text).set({
                text: text
            })
        }
        addText("")
    }
    //Enter 입력
    const OnKeyPress = (event) => {
        if(event.key === "Enter") {
            OnClick();
        }
    }
    //텍스트 입력 바뀜
    const OnChange = (event) => {
        //입력한 값을 text에 저장
        addText(event.target.value);
    }
    return (
        <div>
            <input type="text" id="listAddText" onChange={OnChange} onKeyPress={OnKeyPress} placeholder="Please add something"/>
            <button onClick={OnClick}>Add</button>
        </div>
    );
}
export default Add;