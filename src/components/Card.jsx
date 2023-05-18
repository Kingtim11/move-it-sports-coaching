import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import '../styles/test.css';

export default function Card({image, teamMember, description }) {
    return (
        <section className="highlight">
            <div className="image featured"><img src={image} alt="" /></div>
                <h3>{teamMember}</h3>
                <p>{description}</p>
                <ul className="actions">
                    <li>
                        <Link to="/">
                            <Button name="Learn More" buttonStyle="button style1" />
                        </Link>
                    </li>
                </ul>
        </section>
    );
}