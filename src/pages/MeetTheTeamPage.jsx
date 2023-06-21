import React from "react";
import Card from '../components/Card';
import Sections from "../components/Sections";
import Josh from "../assets/images/josh.JPEG";

export default function WhatWeOfferPage() {
    return (
        <div className="bookingpage is-preloaded">
            <div id="page-wrapper">
                
                <Sections 
                    sectionId={'header'}
                    sectionClassName={'wrapper style2'}
                />

                <Sections 
                    sectionId={'highlights'}
                    sectionClassName={'wrapper style3'}
                    divClassName={'title'}
                    sectionHeader={'Meet the Team'}
                    content={
                        <div className="row aln-center">
                            <>
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
                            </>


                        </div>

                        
                    }
                />

            </div>
        </div>
    )
}