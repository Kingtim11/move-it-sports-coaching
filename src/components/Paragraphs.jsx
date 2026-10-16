import React from 'react';

// Renders a list of strings as one block, separated by blank lines
export default function Paragraphs({ items }) {
    return items.map((item, index) => (
        <React.Fragment key={index}>
            {index > 0 && <><br /><br /></>}
            {item}
        </React.Fragment>
    ));
}
