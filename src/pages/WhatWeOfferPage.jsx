import React from "react";
import { Link } from "react-router-dom";
import Sections from "../components/Sections";
import ClubList from "../components/ClubList";
import Timetable from "../components/Timetable";

// Extra Multi-skills Camp content shown below its description on this page only
function MultiSkillsCampDetails() {
    return (
        <>
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
        </>
    );
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
                <section id="features">
                    <ClubList detailed extras={{ 'multi-skills-camp': <MultiSkillsCampDetails /> }} />
                    <ul className="actions special">
                        <li>
                            <Link className="button style1 large" to="/bookings">Bookings</Link>
                        </li>
                    </ul>
                </section>
        }
    ];

    return (
        <div className="subpage">
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
