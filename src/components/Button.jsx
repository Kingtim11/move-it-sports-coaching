import React from 'react';

export default function Button({ buttonStyle, type, name }) {
    return (
        <button className={buttonStyle} type={type}>
            {name}
        </button>
    );
}