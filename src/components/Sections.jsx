import React from "react";
import '../styles/main.css';

export default function Sections({ 
    sectionId, 
    sectionClassName, 
    divClassName, 
    sectionHeader, 
    content }) {
    return (
        <section id={sectionId} className={sectionClassName}>
            <div className={divClassName}>{sectionHeader}</div>
                <div className="container">

                    {content}

                </div>
        </section>
    );
}