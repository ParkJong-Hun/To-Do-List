//리액트, 리액트의 useEffect, useState를 가져옴
import React, { useEffect, useState } from 'react';
//Firebase의 Firestore를 가져옴
import {dbService} from '../fbase';

//리스트 표시 함수
const List = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        dbService.collection("list").onSnapshot(snapshot => {
            const listArray = snapshot.docs.map(doc => ({text: doc.text, ...doc.data()}));
            setLists(listArray);
        })
    }, []);
    //Firebase의 list 컬렉션의 모든 문서를 하나하나 state로 선언한 lists라는 배열에 저장
    return (
        //lists의 요소를 하나하나 thelist라는 변수에 담아서, ViewList에 thelist를 프롭으로
        //전달하여 실행
        <div>
            {lists.map((thelist) => (
                <ViewList list = {thelist}/>
            ))}
        </div>
    );
}

//렌더링되는 각 하나의 리스트
const ViewList = ({list}) => {
    //수정 버튼 눌렀는지 체크하는 것.
    const [isEdit, EditSwitch] = useState(false);
    const [editText, EditText] = useState(list.text);
    //삭제 버튼 함수. list의 해당 리스트가 담겨져있는 문서를 삭제
    const Delete = () => {
        dbService.collection("list").doc("list_" + list.text).delete();
    }
    //수정 버튼 함수. list의 해당 리스트의 내용을 수정
    const Edit = () => {
        if(isEdit) {
            //첫 번째 방법 : 기존의 것을 삭제하고 새로 만들기
            dbService.collection("list").doc("list_" + editText).set({text: editText});
            dbService.collection("list").doc("list_" + list.text).delete();
            
            //두 번째 방법 : 기존의 것의 document 이름과 필드 내용을 수정.
            //dbService.collection("list").doc("list_" + list.text).update({text: editText});
            //dbService.collection("list").doc("list_" + list.text).
        }
        EditSwitch(!isEdit);
    }
    const OnChange = (event) => {
        EditText(event.target.value);
    }
    //리스트 내용과 삭제 버튼, 수정 버튼을 렌더링
    //수정 버튼 클릭될 때와 클릭 안될 때 보이는 게 달라지게 함.
    return(
        <div>
            {isEdit ? <input type="text" value={editText} onChange={OnChange}/> : list.text}
            <button onClick={Edit}>{isEdit ? "완료" : "수정"}</button>
            {isEdit ? null : <button onClick={Delete}>취소</button>}
            
        </div>
    );
}
export default List;