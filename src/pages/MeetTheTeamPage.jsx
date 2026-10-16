import React from "react";
import Card from '../components/Card';
import Sections from "../components/Sections";
import Paragraphs from "../components/Paragraphs";
import { team } from "../data/team";

export default function MeetTheTeamPage() {
    const sections = [
        {
            sectionId: 'header',
            sectionClassName: 'wrapper style2'
        },
        {
            sectionId: 'highlights',
            sectionClassName: 'wrapper style3',
            divClassName: 'title',
            sectionHeader: 'Meet the Team',
            content:
                <div className="row aln-center">
                    {team.map(coach => (
                        <div key={coach.name} className="col-4 col-12-medium">
                            <Card
                                image={coach.image}
                                hashString={coach.hashString}
                                teamMember={coach.name}
                                description={<Paragraphs items={coach.bio} />}
                            />
                        </div>
                    ))}
                </div>  
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
                ))
            }
            </div>
        </div>
    );
}