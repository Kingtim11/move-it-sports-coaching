import React from "react";
import Bookings from "../components/Bookings";
import Sections from "../components/Sections";

export default function BookingPage() {
    return (
        <div className="bookingpage is-preloaded">
            <div id='page-wrapper'>

            <Sections 
                sectionId={'header'}
                sectionClassName={'wrapper style2'}
            />

            <Sections
                sectionId={''}
                sectionClassName={'wrapper style1'}
                divClassName={'title'}
                sectionHeader={'Bookings'}
                content={
                    <Bookings />
                }
             />
            
            </div>
        </div>
        
    );
}