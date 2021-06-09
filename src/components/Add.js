import React, { useState } from 'react';

const Add = () => {
    const [text, addText] = useState('');
    const OnClick = (event) => {
        
        addText(event);
    }
    return (
        <div>
            <input type="text" id="listAddText"/>
            <button onClick={OnClick}>Add</button>
        </div>
    );
}
export default Add;