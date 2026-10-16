import React from 'react';

export default function Button({ buttonStyle, type, name, disabled }) {
    return (
        <button className={buttonStyle} type={type} disabled={disabled}>
            {name}
        </button>
    );
}
