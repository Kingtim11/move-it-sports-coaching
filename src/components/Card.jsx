import React from 'react';
import '../styles/Main.css';

export default function Card({image, teamMember, description }) {
    return (
        <section className="highlight">
            <div className="image featured"><img src={image} alt="" /></div>
                <h3>{teamMember}</h3>
                <p>{description}</p>
                
        </section>
    );
}