import React from "react";
import { Link } from "react-router-dom";
import Sections from "../components/Sections";
import Timetable from "../components/Timetable";

function MultiSkillsCamp() {
    return (
        <section id="multi-skills-camp">
            <h3 className="icon fa-comment">Multi-skills Camp</h3>
            <p>
                Runs every school holiday at Latchmere School in North Kingston.
                <br /><br />
                Our Ofsted-registered Multi-skills Camp is a fun-filled, active holiday camp designed to keep children moving, engaged and having fun throughout the school holidays. With a predominantly sports-focused programme and a fantastic range of enrichment activities, every day offers something different.
                <br /><br />
                Children take part in exciting games and activities designed to develop fundamental movement skills, build confidence, encourage teamwork and inspire a lifelong enjoyment of sport and physical activity. Our experienced coaches are passionate about what they do and make it their mission to ensure every child has a fun, positive and memorable day.
                <br /><br />
                Alongside running, dodging, tagging and ball games, children have the opportunity to take part in a wide range of sports, challenges and enrichment activities. Depending on the programme, these can include swimming, laser tag, inflatables, inflatable slip-and-slides, arts and crafts, gardening, cheerleading, smoothie making, axe throwing and more. We are always looking for new and exciting ways to enhance the Move It! experience.
                <br /><br />
                We aim to provide a varied and inclusive holiday experience where children can try new activities, develop new skills, make friends and grow in confidence.
                <br /><br />
                Tax-Free Childcare vouchers are accepted.
            </p>

            <h3>What to expect</h3>

            <h4>A morning packed with movement and fun</h4>
            <p>
                Mornings are focused on developing fundamental movement skills through a variety of energetic games and activities, including running, dodging, tagging, throwing, catching and ball games. Children learn through play while building the skills and confidence they need to enjoy a wide range of sports.
            </p>

            <h4>Afternoons led by the children</h4>
            <p>
                Afternoons are more child-led, giving children the opportunity to choose from a wide range of sports games, activities and enrichment sessions. This allows them to explore their interests, try something new or simply enjoy their favourite activities with friends.
                <br /><br />
                Enrichment activities are optional, giving children the flexibility to get involved in the activities that appeal to them.
            </p>

            <h4>Groups based on age</h4>
            <p>
                Children are placed into groups with others of a similar age, helping them feel comfortable, make friends and enjoy activities that are appropriate for their stage of development.
            </p>

            <h4>Fantastic facilities</h4>
            <p>Children have access to an excellent range of facilities, including:</p>
            <ul>
                <li>Outdoor sports pitch</li>
                <li>Large indoor sports hall</li>
                <li>Swimming pool</li>
                <li>Pupil kitchen</li>
                <li>Dedicated art room</li>
                <li>Allotment patch</li>
                <li>A wide range of gymnastics equipment</li>
            </ul>
            <p>
                These facilities allow us to offer a diverse programme of sports, games, creative activities and enrichment experiences throughout the camp.
            </p>

            <h4>A different experience every day</h4>
            <p>
                With a combination of sport, active games and enrichment activities, no two days need to be the same. Whether your child loves sport, enjoys getting creative, wants to try something completely new or simply wants to have fun with friends, there is something for everyone.
                <br /><br />
                An example timetable for Multi-skills Camp can be found below.
            </p>
            <Timetable />
        </section>
    );
}

function FootballSection() {
    return (
        <section id="football">
            <h3 className="icon fa-comment">Football Club</h3>
            <p>
                Join us for our Football Club, held every Monday morning during term time at Latchmere School from 08:00 - 08:40.
                <br/><br/>
                Fun football sessions designed to be both challenging and enjoyable. The children will develop their football skills through a range of activities and games, finishing with opportunities to play mini matches.
                <br/><br/>
                Open to children from Reception - Year 2.
            </p>
        </section>
    );
}

function DodgeballSection() {
    return (
        <section id="dodgeball">
            <h3 className="icon solid fa-sync">Dodgeball Club</h3>
            <p>
                Join us for our Dodgeball Club, held every Wednesday evening during term time at Latchmere School from 15:30 - 16:25.
                <br/><br/>
                Experience the thrill of dodgeball through exciting games and activities that promote physical literacy by enhancing skills such as running, jumping, throwing, catching, and dodging.
                <br/><br/>
                Open to children from Year 3 to Year 6.
            </p>
        </section>
    );
}

function HockeySection() {
    return (
        <section id="hockey">
            <h3 className="icon solid fa-sync">Hockey Club</h3>
            <p>
                Join us for our Hockey Club, held every Wednesday morning during term time at Latchmere School Sports Pitch from 08:00 to 08:45.
                <br/><br/>
                Fun hockey sessions designed to be both challenging and enjoyable. The children will get an opportunity to develop their skills and play mini matches.
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
                                    <FootballSection />
                                </div>
                                <div className="col-6 col-12-medium">
                                    <DodgeballSection />
                                </div><br />
                                <div className="col-6 col-12-medium">
                                    <HockeySection />
                                </div>
                                <div className="col-6 col-12-medium">
                                    <MultiSkillsClub />
                                </div><br />
                                <div className="col-12 col-12-medium">
                                    <BirthdayPartiesSection />
                                </div>
                            </div>
                        </div>
                        <ul className="actions special">
                            <li>
                                <Link className="button style1 large" to="/bookings">Bookings</Link>
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