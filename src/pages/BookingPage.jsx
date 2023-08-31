import React from "react";
import { Link } from "react-router-dom";
import Bookings from "../components/Bookings";
import Sections from "../components/Sections";
 
export default function BookingPage() {
    function FooterSection() {
        return (
            <div id="copyright">
                <ul>
                    <li>© 2023 Move it! Sports Coaching Ltd. All rights reserved.</li>
                    <li>Design: <Link className='link-style2' to="http://html5up.net">HTML5 UP</Link></li>
                    <li>Web Development: <Link className='link-style2' to="https://timking.netlify.app/">Tim King</Link></li>
                </ul>
                <ul>
                    <li>Move it! Sports Coaching Ltd is a company registered in England and Wales with Company Number 14588755</li>
                </ul>
            </div>
        )
    }

    const sections = [
        {
            sectionId: 'header',
            sectionClassName: 'wrapper style2'
        },
        {
            sectionClassName: 'wrapper style1',
            divClassName: 'title',
            sectionHeader: 'Bookings',
            content: <Bookings />
        },
        {
            sectionId: 'footer',
            content: <FooterSection />
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