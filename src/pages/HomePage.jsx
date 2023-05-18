import React from 'react';
import '../styles/test.css';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import Team from "../assets/images/team2.jpg";
import Josh from "../assets/images/josh.jpg";
import Jabroni from "../assets/images/jabroni.jpg";
import Bozo from "../assets/images/bozo.jpg";
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
                            <img className="logo" src={Logo} alt="The logo for Move it! Sports Coaching. Children playing."/>
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
                            A sports coaching company based in North Kingston with the aim to install a love of sport 
                            and physical activity in all children to encourage lifelong participation through running, 
                            dodging, tagging and ball games. 
                            </p>
                            <ul className="actions">
                                <li>
                                <Link to='bookings'>
                                    <Button name="Bookings" buttonStyle="button style3 large" />
                                </Link>
                                </li>
                            </ul>
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
                        <div className="image featured">
                            <img src={Team} alt="" />
                        </div>
                        <section id="features">
                                <header className="style1">
                                    <p>We have a team of 5 dedicated coaches on hand to provide the following classess</p>
                                </header>
                                <div className="feature-list">
                                    <div className="row">
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon fa-comment">Multi-skills Camp</h3>
                                                <p>Fun games and activities to develop fundamental movement skills and encouragelifelong involvement in sport.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon solid fa-sync">Dodgeball Club</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon fa-image">Birthday Parties</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon solid fa-cog">Tempus sed pretium orci</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon solid fa-wrench">Aliquam consequat et feugiat</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon solid fa-check">Dolore laoreet aliquam mattis</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <ul className="actions special">
                                <li>
                                    <Link to="/get started">
                                        <Button name="Get Started" buttonStyle="button style1 large" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/more info">
                                        <Button name="More Info" buttonStyle="button style2 large" />
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        </>
                    }
                />
            
                {/* Meet the Team */}
                <Sections 
                    sectionId={'highlights'}
                    sectionClassName={'wrapper style3'}
                    divClassName={'title'}
                    sectionHeader={'Meet the team'}
                    content={
                        <div className="row aln-center">
                            <div className="col-4 col-12-medium">

                                <Card 
                                    image={Josh} 
                                    teamMember="Josh - Head Coach" 
                                    description="Josh is the head coach of Move it! Sports Coaching. He is the PE teacher....." 
                                />

                            </div>
                            <div className="col-4 col-12-medium">
                                <Card 
                                    image={Jabroni} 
                                    teamMember="Jabroni - Coach" 
                                    description="Jabroni has been a coach for almost 3 years and currently works with children...." 
                                />
                            </div>
                            <div className="col-4 col-12-medium">
                                <Card 
                                    image={Bozo} 
                                    teamMember="Bozo - Coach" 
                                    description="Bozo has been a coach for almost 3 years and currently works with children...." 
                                />
                            </div>
                        </div>
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
                        <header className="style1">
                            <h2>Ipsum sapien elementum portitor?</h2>
                            <p>
                                Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
                                Nam pharetra laoreet imperdiet volutpat etiam feugiat.
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
                                                    <Link to="/">info@untitled.tld</Link>
                                                </p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section>
                                                <h3 className="icon solid fa-comment">Social</h3>
                                                <p>
                                                    <Link to="/">@untitled-corp</Link><br />
                                                    <Link to="/">linkedin.com/untitled</Link><br />
                                                    <Link to="/">facebook.com/untitled</Link>
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