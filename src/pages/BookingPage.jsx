import React from "react";
import Bookings from "../components/Bookings";

function BookingPage() {
    return (
        <div className="bookingpage is-preloaded">
            <div id='page-wrapper'>
                <section id="header" className="wrapper"></section>

                <section className="wrapper style4">
                    <div className="title">Bookings</div>
                        <div className="container">
                        
                            <Bookings /> 
        
                        </div>
                </section>

                
            </div>
        </div>
        
    );
}

export default BookingPage;