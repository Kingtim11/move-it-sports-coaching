import React from 'react';
import '../styles/main.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Card({ image, teamMember, description }) {
    return (
        <section className="highlight">
            <div className="image featured"> 
                
                <LazyLoadImage
                    alt=''
                    src={image}
                    height='100%'
                    width='100%'
                    effect='blur'
                />
            </div>
            <h3>{teamMember}</h3>
            <p>{description}</p>
        </section>
    );
}
