import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import Banner from '../assets/images/bannerMin.jpg';
import Josh from "../assets/images/josh.JPEG";
import Logo from "../assets/images/moveit3.jpeg";
import Sections from '../components/Sections';
import { FaInstagram } from 'react-icons/fa';

const HomePageSections = [
    {
        sectionId: 'header',
        sectionClassName: 'wrapper',
        content: <LogoSection />
    },
    {
        sectionId: 'intro',
        sectionClassName: 'wrapper style1',
        divClassName: 'title',
        sectionHeader: 'Introduction',
        content: <IntroSection />
            
    },
    {
        sectionId: 'main',
        sectionClassName: 'wrapper style2',
        divClassName: 'title',
        sectionHeader: 'What we offer',
        content: <WhatWeOfferSection />
    },
    {
        sectionId: 'highlights',
        sectionClassName: 'wrapper style3',
        divClassName: 'title',
        sectionHeader: 'Meet the team',
        content: <MeetTheTeamSection />
    },
    {
        sectionId: 'footer',
        sectionClassName: 'wrapper',
        divClassName: 'title',
        sectionHeader: 'Contact',
        content: <ContactSection />
    },
    {
        sectionId: 'footer',
        content: <FooterSection />
    }
]

function LogoSection() {
    return (
        <div className={"container-logo"}>
            <img className="logo" src={Logo} alt="The logo for Move it! Sports Coaching. Children playing different sports."/>
        </div>
    )
}

function IntroSection() {
    return (
        <>
            <p className="style2">
                We are a sports coaching company based in North Kingston. Our mission is to instil a passion for sports and 
                physical activity in children while promoting lifelong participation in exercise through engaging activities 
                like running, dodging, tagging, and ball games.
            </p>
            <Card 
                image={Banner}
                alt={"Children posing for a group photo on a basketball court, in front of the net."}
                hashString={'L3FYfYX-000J00tS00doHD$*8^Mu'}
            />
        </>
    )
}

function WhatWeOfferSection() {
    return (
        <>
            <section id="features">
                <header className="style1">
                    <p>We have a team of dedicated coaches on hand to provide the following sessions</p>
                </header>
                <div className="feature-list">
                    <div className="row">
                        <div className="col-12 col-12-medium">
                            <section>
                                <HashLink className='link-style1' to='/what-we-offer/#multi-skills-camp'><h3 className="icon fa-comment">Multi-skills Camp</h3></HashLink>
                                <p>
                                Runs every school holiday at Latchmere School in North Kingston.<br /><br />
                                Enjoy a variety of engaging games and activities designed to develop fundamental 
                                movement skills and foster a lifelong passion for sports.
                                </p>
                            </section>
                        </div><br/>
                        <div className="col-6 col-12-medium">
                            <section>
                            <HashLink className='link-style1' to='/what-we-offer/#dodgeball'><h3 className="icon solid fa-sync">Dodgeball Club</h3></HashLink>
                                <p>
                                Join us for our Dodgeball Club, held every Monday evening during term time at Latchmere School Sports Hall from 17:00 to 17:45.
                                <br/><br/>
                                Experience the thrill of dodgeball through exciting games and activities that promote physical literacy by enhancing skills such as running, jumping, throwing, catching, and dodging.
                                <br/><br/>
                                Open to children from Year 3 to Year 6.
                                </p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                            <HashLink className='link-style1' to='/what-we-offer/#birthday'><h3 className="icon fa-image">Birthday Parties</h3></HashLink>
                                <p>
                                We understand that each child is different, so we tailor our birthday parties to suit their specific interests and preferences.
                                <br/><br/>
                                The most popular party options we receive are either sport-specific parties or multi-skills parties. Our sport-specific parties focus on a particular sport, while our multi-skills parties incorporate a variety of activities such as running, tagging, dodging, and ball games.
                                <br/><br/>
                                Contact us today to discuss how we can create an unforgettable birthday experience for your child.
                                </p>
                            </section>
                        </div><br />
                        <div className="col-6 col-12-medium">
                            <section>
                                <HashLink className='link-style1' to='/what-we-offer/#hockey'><h3 className="icon fa-comment">Hockey Club</h3></HashLink>
                                <p>
                                Join us for our Hockey Club, held every Wednesday morning during term time at Latchmere School Sports Pitch from 08:00 to 08:45.
                                <br/><br/>
                                Fun hockey sessions designed to be both challenging and enjoyable. The children will get an opportunity to develop their skills and play mini matches.
                                <br/><br/>
                                Open to children from Year 3 to Year 6. 
                                </p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                <HashLink className='link-style1' to='/what-we-offer/#multi-skills-club'><h3 className="icon fa-comment">Multi-skills Club</h3></HashLink>
                                <p>
                                Join us for our Multi Skills Club, held every Friday morning during term time at Latchmere School Sports Hall from 08:00 to 08:45.
                                <br/><br/>
                                Play a wide range of running, dodging, tagging and ball games specifically designed to develop fundamental movement skills.
                                <br/><br/>
                                Open to children from Reception - Year 2. 
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                <ul className="actions special">
                    <li>
                        <Link to="bookings">
                            <Button name="Bookings" buttonStyle="button style1 large" />
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}

function MeetTheTeamSection() {
    return (
        <>
            <div className="row aln-center">
                <div className="col-4 col-12-medium">
                    <Card
                        image={Josh}
                        hashString="LzOyO^i_?^bb?^W;t8ofIVkCV?n%"
                        teamMember="Josh - Lead Coach" 
                        description={
                        <>
                            Joshua Ayres, lead coach and founder of Move it Sports Coaching.
                            <br/><br/>
                            "I started Move it Sports Coaching over six years ago, previously under the name ‘Joshua Ayres Sports Coaching’, 
                            with the single vision to encourage lifelong participation in sport and physical activity for 
                            all children".
                            <br/><br/>
                            Coach Josh has over 15 years coaching experience and is a qualified primary school teacher 
                            with a degree in Physical Education, Sport and Activity.
                        </>
                        }
                    />
                </div>
            </div>
            <ul className="actions">
                <li>
                    <Link to="/meet-the-team">
                        <Button name="Other Coaches" buttonStyle="button style1" />
                    </Link>
                </li>
            </ul>
        </>
    )
}

function ContactSection() {
    return (
        <>
            <header id='contact' className="style1">
                <h2>Want to get in touch?</h2>
                <p>
                    Please fill out the form below or email us at enquiries@moveitsportscoaching.co.uk.
                </p>
            </header>
            <div className="row">
                <div className="col-6 col-12-medium">
                    {/* Contact Form */}
                    <ContactForm />
                </div>
                <div className="col-6 col-12-medium">
                    {/* Contact - Phone possiblly coming later.*/}
                    <section className="feature-list small">
                        <div className="row">
                            <div className="col-6 col-12-small">
                                <section>
                                    <h3 className="icon solid fa-envelope">Email</h3>
                                    <p>
                                        <Link className='link-style2' to="mailto:enquiries@moveitsportscoaching.co.uk">enquiries@moveitsportscoaching.co.uk</Link>
                                    </p>
                                </section>
                            </div>
                            <div className="col-6 col-12-small">
                                <section>
                                    <h3 className="icon solid fa-comment">Social</h3>
                                    <a href="https://www.instagram.com/moveitsportscoaching/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={20} color="currentColor" />
                                        <p style={{color: 'white'}}>Follow us on Instagram</p>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
        </>
    )
}

function FooterSection() {
    return (
        <div id="copyright">
            <ul>
                <li>© 2023 Move it! Sports Coaching Ltd. All rights reserved.</li>
                {/*<li>Web Development: <Link className='link-style2' to="https://timking.netlify.app/">Tim King</Link></li>*/}
                <li>Design: <Link className='link-style2' to="http://html5up.net">HTML5 UP</Link></li>
                <p>Move it! Sports Coaching Ltd is a company registered in England and Wales with Company Number 14588755</p>
            </ul>
        </div>
    )
}

export default function HomePage() {
    return (
        <div className='homepage is-preload'>
            <div id='page-wrapper'>
                {HomePageSections.map((section, index) => (
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