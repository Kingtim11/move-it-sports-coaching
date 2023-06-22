import React, { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

    let contactFormClass = 'contactForm';
    let submitAlertClass = 'submitAlert'
    if(isEmailSubmitted) {
        submitAlertClass += ' submitAlert--active'
        contactFormClass += ' contactForm--active'
    }

    //HandleSubmit and POST to the server.
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
      
        fetch('https://move-it-sports-coaching-api.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formJson),
        })
          .then((response) => {
            if (response.ok) {
              // Display success message
              form.reset();
              console.log('Thank you, your message has been sent to Move it! Sports Coaching.');
            } else {
              // Display error message
              console.log('An error occurred while sending the email.');
            }
          })
          .catch((error) => {
            console.error(error);
            alert('An error occurred while sending the email.');
          });

        setIsEmailSubmitted(!isEmailSubmitted);
      }
       
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <section className={contactFormClass}>
                    <div className="row gtr-50">

                        <div className="col-6 col-12-small">
                            <input
                                required
                                name="postName"
                                type="text" 
                                className="name" 
                                id="contact-name" 
                                placeholder="Name" 
                            />
                        </div>

                        <div className="col-6 col-12-small">
                            <input 
                                required
                                name="postEmail"
                                type="email" 
                                className="email" 
                                id="contact-email" 
                                placeholder="Email"   
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                required
                                name="postContent" 
                                className="message" 
                                id="contact-message" 
                                placeholder="Message" 
                                rows="4"
                            />
                        </div>

                        <div className="col-12">
                            <ul className="actions"> 
                                <li><Button type="submit" name="Send" buttonStyle="style1" /></li>
                                <li><Button type="reset" name="Reset" buttonStyle="style2" /></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <div className={submitAlertClass}>
                    <h1 className="emailSent">Thank You! Your message has been sent.</h1>
                </div>

            </form>
        </section>  
    );
}