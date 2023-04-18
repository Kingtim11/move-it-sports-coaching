import React from 'react';

function Button(props) {
    return (
            <button className={props.buttonStyle}>{props.name}</button>
    );
}

export default Button;