import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.css';
import { Blurhash } from 'react-blurhash';

export default function Card({ image, alt, hashString, teamMember, description }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [containerSize, setContainerSize] = useState({ height: 300, width: 400 }); // Default size
    const imageRef = useRef(null);
    
    useEffect(() => { 
        if (imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            setContainerSize({ height, width });
        }
    }, [image]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

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
                <img 
                    src={image} 
                    alt={alt} 
                    onLoad={handleImageLoad} 
                    style={{ display: imageLoaded ? 'block' : 'none' }} 
                />
                
            </div>
            <h3>{teamMember}</h3>
            <p>{description}</p>
        </section>
    );
}