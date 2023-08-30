import React from "react";

const bookingFormURL = "https://joshua-ayres-sports-coaching.class4kids.co.uk";

export default function Bookings() {
  return (
    <div className="image featured">
      <iframe
        id="Iframe"
        src={bookingFormURL}
        width="100%"
        height="860px"
        title="A booking form for Joshua Ayres Sports Coaching"
      ></iframe>
    </div>
  );
}