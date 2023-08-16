import React from "react";
import Bookings from "../components/Bookings";
import Sections from "../components/Sections";

export default function BookingPage() {

    const sections = [
        {
            sectionId: 'header',
            sectionClassName: 'wrapper style2'
        },
        {
            sectionClassName: 'wrapper style1',
            divClassName: 'title',
            sectionHeader: 'Bookings',
            content:
                <Bookings />
        }
    ];

    return (
        <div className="bookingpage is-preloaded">
            <div id='page-wrapper'>

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