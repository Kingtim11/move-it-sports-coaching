import React, { useState, useRef } from 'react';
import '../styles/main.css';
import { Blurhash } from 'react-blurhash';

function useImageLoader(imageRef) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [containerSize, setContainerSize] = useState({ height: 460, width: null });

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    React.useEffect(() => {
        if (imageRef.current) {
            const { height, width } = imageRef.current.getBoundingClientRect();
            setContainerSize({ height, width });
        }
    }, [imageRef]);

    return { imageLoaded, containerSize, handleImageLoad };
}

export default function Card({ image, alt, hashString, teamMember, description }) {
    const imageRef = useRef(null);
    const { imageLoaded, containerSize, handleImageLoad } = useImageLoader(imageRef);

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