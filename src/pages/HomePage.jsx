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


function HomePage() {
    return (
        
        <div className='homepage is-preload'>
            <div id='page-wrapper'>

                {/* Header */}
                <section id="header" className="wrapper">
                
                {/* Logo */}
                    <div id="logo" />		 
                </section>

                {/* Intro */}
                <section id="intro" className="wrapper style1">
                    <div className="title">Introduction</div>
                    <div className="container">
                        <p className="style1">
                            So in case you were wondering what this is all about ...
                        </p>
                        <p className="style2">
							We provide sports coaching for children and young adults<br className="mobile-hide" />
							of between ages 5 - 11
						</p>
						<p className="style3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dolores ad magni fugit sed eaque quisquam tempora eum ducimus suscipit,
                            blanditiis eligendi veritatis molestiae qui? Recusandae at eius cumque rem? Qui!
                        </p>
                        <ul className="actions">
							<li>
                                <Button name="Bookings" buttonStyle="button style3 large" />
                            </li>
						</ul>
                    </div>
                </section>

                {/* Main */}
                <section id="main" className="wrapper style2">
                    <div className="title">what we offer</div>
                        <div className="container">

                            {/* Image */}
                            <div className="image featured">
                                <img src={Team} alt="" />
                            </div>

                            {/* Features */}
                            <section id="features">
                                <header className="style1">
                                    <p>We have a team of 5 dedicated coaches on hand to provide blah blah blah</p>
                                </header>
                                <div className="feature-list">
                                    <div className="row">
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon fa-comment">Lorem Ipsum</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon solid fa-sync">Lorem ipsum dolor sit veroeros</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-medium">
                                            <section>
                                                <h3 className="icon fa-image">Pretium phasellus justo lorem</h3>
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
                    </div>
                </section>
            
                {/* Meet the Team */}
                <section id="highlights" className="wrapper style3">
                    <div className="title">Meet the team</div>
                    <div className="container">
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
                    </div>
                </section>

                {/* Footer */}
                <section id="footer" className="wrapper">
                    <div className="title">Contact</div>
                    <div className="container">
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

                                {/* Contact */}
                                <section className="feature-list small">
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <section>
                                                <h3 className="icon solid fa-home">Mailing Address</h3>
                                                <p>
                                                    Untitled Corp<br />
                                                    1234 Somewhere Rd<br />
                                                    Nashville, TN 00000
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
                                            <section>
                                                <h3 className="icon solid fa-envelope">Email</h3>
                                                <p>
                                                    <Link to="/">info@untitled.tld</Link>
                                                </p>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section>
                                                <h3 className="icon solid fa-phone">Phone</h3>
                                                <p>
                                                    (000) 555-0000
                                                </p>
                                            </section>
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
                    </div>
                </section>

            </div>
        </div> 
    );
}

export default HomePage;