import React from 'react';
import '../styles/main.css';

export default function Card({ image, teamMember, description }) {
    return (
        <section className="highlight">
            <div className="image featured"> 
                <img loading='eager' src={image} alt="" />
            </div>
            <h3>{teamMember}</h3>
            <p>{description}</p>
        </section>
    );
}
