import React from "react";
import Card from '../components/Card';
import Sections from "../components/Sections";
import Josh from "../assets/images/josh.JPEG";
import Abi from "../assets/images/coachAbi.jpg";
import Neil from "../assets/images/coachNeil.jpg";
import Hollie from "../assets/images/coachHollie.jpeg";
import Robert from "../assets/images/coachRobert.jpg";

export default function WhatWeOfferPage() {

    const teamMembers = [
        {
            image: Josh,
            teamMember: "Josh - Lead Coach",
            description: <>
                Joshua Ayres, lead coach and founder of Move it Sports Coaching.
                <br /><br />
                "I started Move it Sports Coaching over six years ago, previously under a different name, 
                with the single vision to encourage lifelong participation in sport and physical activity for 
                all children".
                <br /><br />
                Coach Josh has over 15 years’ coaching experience and is a qualified primary school teacher 
                with a degree in Physical Education, Sport and Activity.
            </>,
        },
        {
            image: Abi,
            teamMember: "Abi - Coach",
            description: <>
                Coach Abi has over 12 years of coaching experience and is a keen triathlete. 
                She is also a qualified primary school teacher which she has enjoyed for over 8 years. 
                Coach Abi has been a popular coach at Move It for the last three years.
            </>,
        },
        {
            image: Neil,
            teamMember: "Neil - Coach",
            description: <>
                Coach Neil has over 35 years coaching experience. 
                He has worked with all age groups from age 2 to adulthood. 
                Coach Neil previously owned a successful sports coaching franchise.
            </>,
        },
        {
            image: Hollie,
            teamMember: "Hollie - Coach",
            description: <>
                Coach Hollie has been part of the Move It! team for the last 4 years. 
                She is a qualified primary school teacher with over 10 years experience. 
                Coach Hollie enjoys participating in all sports, particularly swimming and running.
            </>,
        },
        {
            image: Robert,
            teamMember: "Robert - Coach",
            description: <>
                Coach Robert has been working with primary aged children for over a year and a half. 
                He is currently studying ‘sports coaching’ at a local university. 
                Coach Robert is an enthusiastic athlete himself and is proud to represent his university’s football first team.
            </>,
        },
        // Add more team members here if needed
    ];

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
                            {teamMembers.map((teamMember, index) => (
                                <div key={index} className="col-4 col-12-medium">
                                    <Card 
                                        image={teamMember.image} 
                                        teamMember={teamMember.teamMember} 
                                        description={teamMember.description}  
                                    />
                                </div>
                            ))}
                        </div>  
                    }
                />

            </div>
        </div>
    )
}
