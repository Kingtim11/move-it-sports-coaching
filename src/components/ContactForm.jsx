import React, { useState } from 'react';
import Button from './Button';

const API_URL = "https://move-it-sports-coaching-api.onrender.com/send-email";
//const DEV_URL = 'http://localhost:8080/send-email';

export default function ContactForm() {
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const [isEmailFailed, setIsEmailFailed] = useState(false)

    //HandleSubmit and POST to the server.
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
      
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    setIsEmailSubmitted(true);
                    setIsEmailFailed(false); // Reset email failed status
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                setIsEmailFailed(true);
                console.error(error);
            });       
    }

    if(!isEmailSubmitted && !isEmailFailed) {
        return (
            <section>
                <form onSubmit={handleSubmit}>
                    <section>
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
                    
                </form>
            </section>  
        );
    } 
        return(
            <div>
            {isEmailFailed ? (
                <h1 className="emailMessage">Email failed to send. Please try again later.</h1>
            ) : (
                <h1 className="emailMessage">Thank you! Your message has been sent.</h1>
            )}
        </div>
        );
}