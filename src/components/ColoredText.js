import React from 'react';
import './coloredText.css';

const ColoredText = ({selected}) => {
    return(
        <div className={`${selected.value}`}>
            <h1>{selected.value}</h1>
        </div>
    );
};

export default ColoredText;