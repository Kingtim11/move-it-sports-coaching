import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import Banner from '../assets/images/banner-web.jpg';
import Logo from "../assets/images/moveit3.jpeg";
import Sections from '../components/Sections';
import ClubList from '../components/ClubList';
import Paragraphs from '../components/Paragraphs';
import { team } from '../data/team';
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
        <section id="features">
            <header className="style1">
                <p>We have a team of dedicated coaches on hand to provide the following sessions</p>
            </header>
            <ClubList />
            <ul className="actions special">
                <li>
                    <Link className="button style1 large" to="/bookings">Bookings</Link>
                </li>
            </ul>
        </section>
    )
}

function MeetTheTeamSection() {
    const leadCoach = team[0];
    return (
        <>
            <div className="row aln-center">
                <div className="col-4 col-12-medium">
                    <Card
                        image={leadCoach.image}
                        hashString={leadCoach.hashString}
                        teamMember={leadCoach.name}
                        description={<Paragraphs items={leadCoach.bio} />}
                    />
                </div>
            </div>
            <ul className="actions">
                <li>
                    <Link className="button style1" to="/meet-the-team">Other Coaches</Link>
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
                                    <h3>Email</h3>
                                    <p>
                                        <a className="link-style2" href="mailto:enquiries@moveitsportscoaching.co.uk">enquiries@moveitsportscoaching.co.uk</a>
                                    </p>
                                </section>
                            </div>
                            <div className="col-6 col-12-small">
                                <section>
                                    <h3>Social</h3>
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
                <li>© {new Date().getFullYear()} Move it! Sports Coaching Ltd. All rights reserved.</li>
                {/*<li>Web Development: <Link className='link-style2' to="https://timking.netlify.app/">Tim King</Link></li>*/}
                <li>Design: <a className="link-style2" href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></li>
                <p>Move it! Sports Coaching Ltd is a company registered in England and Wales with Company Number 14588755</p>
            </ul>
        </div>
    )
}

export default function HomePage() {
    return (
        <div className='homepage'>
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