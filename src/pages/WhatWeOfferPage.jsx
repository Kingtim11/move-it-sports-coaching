import React from "react";
import { Link } from "react-router-dom";
import Sections from "../components/Sections";
import Button from "../components/Button";
import Table from "../components/Table";

function MultiSkillsCamp() {
    return (
        <section id="multi-skills-camp">
            <h3 className="icon fa-comment">Multi-skills Camp</h3>
            <p>
                Runs every school holiday at Latchmere School in North Kingston.
                <br /><br />
                Fun games and activities to develop fundamental movement skills and encourage lifelong involvement in sport. Run by experienced coaches who are passionate about what they do and make it their mission to ensure everyone has a fun day.
                <br /><br />
                In the morning, the children will play a range of running, dodging, tagging, and ball games to help develop fundamental movement skills.
                <br /><br />
                The afternoons are child led and there will be an opportunity to play a wide range of sports games and activities.
                <br /><br />
                Facilities include an outside sports pitch and a large indoor sports hall. A wide variety of gymnastics equipment is available which can be used daily.
                <br /><br />
                Children will be in groups with children of a similar age.
                <br /><br />
                We are also thrilled to announce some exhilarating additions to our 2024 camps, making the Move it! experience even more enjoyable for your child. 
                New activities include laser tag, inflatables and access to the pupil kitchen where children can create and enjoy healthy snacks. Further additions will be added throughout the year!
                <br /><br />
                An example timetable for Multi Skills Club can be found below.
            </p>
            <Table />
        </section>
    );
}

function DodgeballSection() {
    return (
        <section id="dodgeball">
            <h3 className="icon solid fa-sync">Dodgeball Club</h3>
            <p>
                Join us for our Dodgeball Club, held every Monday evening during term time at Latchmere School Sports Hall from 17:00 to 17:45.
                <br/><br/>
                Experience the thrill of dodgeball through exciting games and activities that promote physical literacy by enhancing skills such as running, jumping, throwing, catching, and dodging.
                <br/><br/>
                Open to children from Year 3 to Year 6.
            </p>
        </section>
    );
}

function BirthdayPartiesSection() {
    return (
        <section id="birthday">
            <h3 className="icon fa-image">Birthday Parties</h3>
            <p>
                We understand that each child is different, so we tailor our birthday parties to suit their specific interests and preferences.
                <br/><br/>
                The most popular party options we receive are either sport-specific parties or multi-skills parties. Our sport-specific parties focus on a particular sport, while our multi-skills parties incorporate a variety of activities such as running, tagging, dodging, and ball games.
                <br/><br/>
                Contact us today to discuss how we can create an unforgettable birthday experience for your child.
            </p>
        </section>
    );
}

function MultiSkillsClub() {
    return (
        <section id="multi-skills-club">
            <h3 className="icon fa-comment">Multi-skills Club</h3>
            <p>
                Join us for our Multi Skills Club, held every Friday morning during term time at Latchmere School Sports Hall from 08:00 to 08:45.
                <br/><br/>
                Play a wide range of running, dodging, tagging and ball games specifically designed to develop fundamental movement skills.
                <br/><br/>
                Open to children from Reception - Year 2. 
                </p>
        </section>
    )
}

export default function WhatWeOfferPage() {

    const sections = [
        {
            sectionId: 'header',
            sectionClassName: 'wrapper style2',         
        },
        {
            sectionClassName: 'wrapper style2',
            divClassName: 'title',
            sectionHeader: 'What We Offer',
            content:
                <>
                    <section id="features">
                        <div className="feature-list">
                            <div className="row">
                                <div className="col-12 col-12-medium">
                                    <MultiSkillsCamp />
                                </div><br/>
                                <div className="col-6 col-12-medium">
                                    <DodgeballSection />
                                </div>
                                <div className="col-6 col-12-medium">
                                    <BirthdayPartiesSection />
                                </div><br />
                                <div className="col-12 col-12-medium">
                                    <MultiSkillsClub />
                                </div>
                            </div>
                        </div>
                        <ul className="actions special">
                            <li>
                                <Link to="/bookings">
                                    <Button name="Bookings" buttonStyle="button style1 large" />
                                </Link>
                            </li>
                        </ul>
                    </section>
                </>
        }
    ];

    return (
        <div className="bookingpage is-preloaded">
            <div id="page-wrapper">
                {sections.map((section, index) => (
                    <React.Fragment key={index}>
                        <Sections 
                            sectionId={section.sectionId}
                            sectionClassName={section.sectionClassName}
                            divClassName={section.divClassName}
                            sectionHeader={section.sectionHeader}
                            content={section.content}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}