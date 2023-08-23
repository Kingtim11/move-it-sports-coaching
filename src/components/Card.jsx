import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.css';
import { Blurhash } from 'react-blurhash';

export default function Card({ image, alt, hashString, teamMember, description }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ height: 300, width: 400 }); // Default size

    useEffect(() => { 
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = image;

        if (imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            setContainerSize({ height, width });
        }
    }, [image]);

    return (
        <section className="highlight">
            <div className="image featured" ref={imageRef}>
                {!imageLoaded && (
                    <Blurhash
                        src={image}
                        hash={hashString}
                        height={containerSize.height}
                        width={containerSize.width}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                )}
                {imageLoaded && <img src={image} alt={alt} />}
            </div>
            <h3>{teamMember}</h3>
            <p>{description}</p>
        </section>
    );
}
