import React from "react";
import Button from "./Button";

const bookingFormURL = "https://move-it-sports-coaching.classforkids.io/";
const campsBookingURL = "https://move-it-sports-coaching.classforkids.io/camps";
const taxFreeChildcareBookingURL = "https://moveitsportscoaching.magicbooking.co.uk/";

export default function Bookings() {
  return (
    <>
      <div className="row">
        <div className="col-6 col-12-medium">
          <section className="booking-option">
            <h3>Book Your Child's Place</h3>
            <p>
              You can book your child's place for our holiday camps and weekly clubs using the link below,
              or using the booking form further down this page.
            </p>
            <a href={campsBookingURL} target="_blank" rel="noopener noreferrer">
              <Button name="Book Now" buttonStyle="button style1" />
            </a>
          </section>
        </div>
        <div className="col-6 col-12-medium">
          <section className="booking-option">
            <h3>Using Tax-Free Childcare?</h3>
            <p>
              If you would like to pay for a holiday camp using Tax-Free Childcare, please book via the link below.
              The first time you use this link, you will need to create an account.
            </p>
            <a href={taxFreeChildcareBookingURL} target="_blank" rel="noopener noreferrer">
              <Button name="Book with Tax-Free Childcare" buttonStyle="button style1" />
            </a>
          </section>
        </div>
      </div>
      <br /><br />
      <div className="image featured">
        <iframe
          id="Iframe"
          src={bookingFormURL}
          width="100%"
          height="860px"
          title="A booking form for Joshua Ayres Sports Coaching"
          sandbox
        ></iframe>
      </div>
    </>
  );
}
