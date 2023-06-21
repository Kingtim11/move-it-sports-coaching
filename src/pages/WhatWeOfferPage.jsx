import React from "react";
import Sections from "../components/Sections";

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
                />

            </div>
        </div>
    )
}