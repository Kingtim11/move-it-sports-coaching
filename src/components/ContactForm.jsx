import React from 'react';
import Button from './Button';

//Set up a server using Node/Express and nodemailer?

export default function ContactForm() {
    //Add a "Thank you, for your enquiry" message underneath the "Send" button instead of an alert. Use onClick to show a hidden message.

    function handleSubmit(e) {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        form.reset();
        alert("Thank you, your message has been sent to Move it! Sports Coaching.")
    }

    return (
        <section>
            <form method="post" onSubmit={handleSubmit}>
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
                            type="text" 
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
            </form>
        </section>  
    );
}