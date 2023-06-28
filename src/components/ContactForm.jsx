import React, { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

    // i might be wrong here but it looks like you're using classes to determine whether or not the contact form or the 
    // 'thank you your message has been sent' message is displayed. Generally, when you want to render something based on
    // whether or not something is true you would use 'conditional rendering'.
     

    // you don't need lines 15 to 20 if you have a emailSubmitted state and conditionally render.

    
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

           // you need to double check this logic. As this is written you're not actually catching any errors (good job implementing try catch btw), 
            // as fetch promise doesn't reject for 4 or 500 status codes (as you've sent from API) - you need to throw an Error (see my stackoverflow link below).
            // also - on that note - make sure you return res.status.json() from api as atm im pretty sure the browser will 
            // interpret what you've sent as plain text/html and display it (which probably isn't what you want).

            // have a look at this :-
        // https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok

        
        
          .then((response) => {
            if (response.ok) {
              // Display success message
              form.reset();
                // generally you don't really need to console.log things like this as the user won't see it and it doesn't
                // provide much helpful info for the developer.

                // you can setIsEmailSubmitted true in here if response is successful.
             
                
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

        // this setEmail state call is going to run regardless - do you want this? i would probably only run this 
        // if the email submission was successful. See my comment at top for an easier way of doing this.

        setIsEmailSubmitted(!isEmailSubmitted);
      }

 
    
    return (
        // you can conditionally render the form or the div with the message based on whether or not the email submission
        // was successful.
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
