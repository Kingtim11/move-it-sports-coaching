import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Paragraphs from './Paragraphs';
import { clubs } from '../data/clubs';

// Lists every club. The Home page shows summaries that link to the What We Offer page;
// the What We Offer page shows the full details, plus any extra content passed in via `extras`.
export default function ClubList({ detailed = false, extras = {} }) {
    return (
        <div className="feature-list clubs">
            <div className="row">
                {clubs.map(club => {
                    const paragraphs = [
                        ...club.paragraphs,
                        ...(detailed && club.moreParagraphs ? club.moreParagraphs : []),
                        ...(club.note ? [club.note] : []),
                    ];
                    return (
                        <div key={club.id} className={club.fullWidth ? 'col-12' : 'col-6 col-12-medium'}>
                            <section id={detailed ? club.id : undefined}>
                                {detailed ? (
                                    <h3>{club.title}</h3>
                                ) : (
                                    <HashLink className="link-style1" to={`/what-we-offer/#${club.id}`}>
                                        <h3>{club.title}</h3>
                                    </HashLink>
                                )}
                                <p><Paragraphs items={paragraphs} /></p>
                                {detailed && extras[club.id]}
                            </section>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
