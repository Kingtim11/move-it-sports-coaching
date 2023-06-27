import React from "react";
import Sections from "../components/Sections";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Table from "../components/Table";

export default function WhatWeOfferPage() {
    return (
        <div className="bookingpage is-preloaded">
            <div id="page-wrapper">
                
                <Sections 
                    sectionId={'header'}
                    sectionClassName={'wrapper style2'}
                />

                <Sections 
                    sectionId={''}
                    sectionClassName={'wrapper style2'}
                    divClassName={'title'}
                    sectionHeader={'What We Offer'}
                    content={
                        <>
                            <section id="features">
                            <div className="feature-list">
                                <div className="row">
                                    <div className="col-12 col-12-medium">
                                        <section>
                                            <h3 className="icon fa-comment">Multi-skills Camp</h3>
                                            <p>
                                            Join us at Multi Skills Club, running every school holiday at Latchmere School in North Kingston!
                                            <br/><br/>
                                            Experience a day filled with exciting games and activities designed to develop fundamental movement skills and ignite a lifelong passion for sports. Our team of experienced coaches is dedicated to creating a fun-filled environment, making it their mission to ensure everyone has a blast!
                                            <br/><br/>
                                            In the mornings, children will engage in a variety of running, dodging, tagging, and ball games, aimed at enhancing their fundamental movement skills.
                                            <br/><br/>
                                            During the afternoons, the children take the lead, enjoying a wide range of sports games and activities of their choice.
                                            <br/><br/>
                                            Our state-of-the-art facilities include an outdoor sports pitch and a spacious indoor sports hall. Additionally, we offer a diverse selection of gymnastics equipment, available for daily use.
                                            <br/><br/>
                                            To provide the best experience, children will be grouped with others of a similar age.
                                            <br/><br/>
                                            Curious about our schedule? Check out an example timetable for Multi Skills Club below!
                                            </p>
                                        </section>
                                        <Table />
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
                                    <Link to="/bookings">
                                        <Button name="Bookings" buttonStyle="button style1 large" />
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        </>
                    }
                />

            </div>
        </div>
    )
}