import React from 'react';

export default function Button(props) {

    return (
            <button className={props.buttonStyle} type={props.type}>  
                {props.name}  
            </button>
    );
}