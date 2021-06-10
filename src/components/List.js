import React from 'react';
import {dbService} from '../fbase';

const List = () => {
    const ListOpen = () => {
        dbService.collection("list").get().
    }
    return (
        <div>
            <p>{ListOpen}</p>
        </div>
    );
}
export default List;