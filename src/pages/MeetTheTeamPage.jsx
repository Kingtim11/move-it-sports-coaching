import React from "react";
import Card from '../components/Card';
import Sections from "../components/Sections";
import Josh from "../assets/images/josh.jpeg";
import Abi from "../assets/images/abi.jpeg";
import Neil from "../assets/images/neil.jpeg";
import Hollie from "../assets/images/hollie.jpeg";
import Robert from "../assets/images/robert.jpeg";

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
                                    image={Abi} 
                                    teamMember="Abi - Coach" 
                                    description=<p>
                                        Coach Abi has over 12 years of coaching experience and is a keen triathlete. 
                                        She is also a qualified primary school teacher which she has enjoyed for over 8 years. 
                                        Coach Abi has been a popular coach at Move It for the last three years. 
                                    </p>  
                                />
                            </div>

                            <div className="col-4 col-12-medium">
                                <Card 
                                    image={Neil} 
                                    teamMember="Neil - Coach" 
                                    description=<p>
                                        Coach Neil has over 35 years coaching experience. 
                                        He has worked with all age groups from age 2 to adulthood. 
                                        Coach Neil previously owned a successful sports coaching franchise.
                                    </p>  
                                />
                            </div>

                            <div className="col-4 col-12-medium">
                                <Card 
                                    image={Hollie} 
                                    teamMember="Hollie - Coach" 
                                    description=<p>
                                        Coach Hollie has been part of the Move It! team for the last 4 years. 
                                        She is a qualified primary school teacher with over 10 years experience. 
                                        Coach Hollie enjoys participating in all sports, particularly swimming and running.
                                    </p>  
                                />
                            </div>

                            <div className="col-4 col-12-medium">
                                <Card 
                                    image={Robert} 
                                    teamMember="Robert - Coach" 
                                    description=<p>
                                        Coach Robert has been working with primary aged children for over a year and a half. 
                                        He is currently studying ‘sports coaching’ at a local university. 
                                        Coach Robert is an enthusiastic athlete himself and is proud to represent his university’s football first team.
                                    </p>  
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