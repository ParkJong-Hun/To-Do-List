import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import {dbService} from '../fbase';

const List = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        dbService.collection("list").onSnapshot(snapshot => {
            const listArray = snapshot.docs.map(doc => ({text: doc.text, ...doc.data()}));
            setLists(listArray);
        })
    }, []);
    return (
        <div>
            {lists.map((thelist) => (
                <ViewList list = {thelist}/>
            ))}
        </div>
    );
}

const ViewList = ({list}) => {
    const Delete = () => {
        dbService.collection("list").doc("list_" + list.text).delete();
    }
    return(
        <div>
            {list.text}<button onClick={Delete}>취소</button>
        </div>
    );
}
export default List;