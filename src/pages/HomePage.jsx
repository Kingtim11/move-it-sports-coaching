import React from 'react';
import '../styles/test.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import Banner from '../assets/images/bannerImage.jpg';
import Josh from "../assets/images/josh.JPEG";
import Logo from "../assets/images/moveit3.jpeg";
import Sections from '../components/Sections';



export default function HomePage() {
    return (
        <div className='homepage is-preload'>
            <div id='page-wrapper'>

                {/* Header */}
                <Sections 
                    sectionId={'header'}
                    sectionClassName={'wrapper'}
                    content={
                        //Logo
                        <div className={"container-logo"}>
                            <img className="logo" src={Logo} alt="The logo for Move it! Sports Coaching. Children playing different sports."/>
                        </div>
                    }
                />

                {/* Intro */}
                <Sections 
                    sectionId={'intro'} 
                    sectionClassName={'wrapper style1'}
                    divClassName={'title'}
                    sectionHeader={'Introduction'}
                    content={
                        <>
                            <p className="style2"> {/* Adjust the font size and remove border. */}
                            We are a sports coaching company based in North Kingston. Our mission is to instill a passion for sports and 
                            physical activity in children while promoting lifelong participation in exercise through engaging activities 
                            like running, dodging, tagging, and ball games.
                            </p>

                            <div className="image featured">
                            <img src={Banner} alt="" style={{ borderRadius: '5px' }} />
                        </div>
                            
                        </>
                    }
                     />
                
                {/* Main */}
                <Sections 
                    sectionId={'main'}
                    sectionClassName={'wrapper style2'}
                    divClassName={'title'}
                    sectionHeader={'What we offer'}
                    content={
                        //Update with only 3 features. Birthday parties - Dogdeball club with Multiskills Camp above or below.
                        <>
                        
                        <section id="features">
                            <header className="style1">
                                <p>We have a team of dedicated coaches on hand to provide the following classess</p>
                            </header>
                            <div className="feature-list">
                                <div className="row">
                                    <div className="col-12 col-12-medium">
                                        <section>
                                            <h3 className="icon fa-comment">Multi-skills Camp</h3>
                                            <p>Enjoy a variety of engaging games and activities designed to develop essential 
                                            movement skills and foster a lifelong passion for sports.</p>
                                        </section>
                                    </div><br/>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-sync">Dodgeball Club</h3>
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
                                            <h3 className="icon fa-image">Birthday Parties</h3>
                                            <p>
                                            
                                            We understand that each child is different, so we tailor our birthday parties to suit their specific interests and preferences.
                                            <br/><br/>
                                            The most popular party options we receive are either sport-specific parties or multi-skills parties. Our sport-specific parties focus on a particular sport, while our multi-skills parties incorporate a variety of activities such as running, tagging, dodging, and ball games.
                                            <br/><br/>
                                            Contact us today to discuss how we can create an unforgettable birthday experience for your child.
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
                    }
                />
            
                {/* Meet the Coach */}
                <Sections 
                    sectionId={'highlights'}
                    sectionClassName={'wrapper style3'}
                    divClassName={'title'}
                    sectionHeader={'Meet the coach'}
                    content={
                        <>
                        <div className="row aln-center">
                            <div className="col-4 col-12-medium">

                                <Card 
                                    image={Josh} 
                                    teamMember="Josh - Lead Coach" 
                                    description=<p>Joshua Ayres, lead coach and founder of Move it Sports Coaching.
                                    <br/><br/>
                                    "I started Move it Sports Coaching over six years ago, previously under a different name, 
                                    with the single vision to encourage lifelong participation in sport and physical activity for 
                                    all children".
                                    <br/><br/>
                                    Coach Josh has over 15 years’ coaching experience and is a qualified primary school teacher 
                                    with a degree in Physical Education, Sport and Activity.</p>  
                                />

                            </div>
                        </div>
                        <ul className="actions">
                            <li>
                                <Link to="/meet-the-team">
                                    <Button name="Learn More" buttonStyle="button style1" />
                                </Link>
                            </li>
                        </ul>
                        </>
                    }
                />
                
                {/* Footer */}
                <Sections 
                    sectionId={'footer'}
                    sectionClassName={'wrapper'}
                    divClassName={'title'}
                    sectionHeader={'Contact'}
                    content={
                    <>
                        <header className="style1" id='contact'>
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

                                {/* Contact - Phone possiblly coming later. Update instagram icon and link for social.*/}
                                <section className="feature-list small">
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <section>
                                                <h3 className="icon solid fa-envelope">Email</h3>
                                                <p>
                                                    <Link to="mailto:enquiries@moveitsportscoaching.co.uk">enquiries@moveitsportscoaching.co.uk</Link>
                                                </p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section>
                                                <h3 className="icon solid fa-comment">Social</h3>
                                                <p>
                                                
                                                    <Link to="/">instagram.com/untitled</Link>
                                                    
                                                </p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            
                                        </div>
                                        
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div id="copyright">
                            <ul>
                                <li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </>
                    }
                />
                
            </div>
        </div>
    );
}