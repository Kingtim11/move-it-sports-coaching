import React from 'react';

function ContactForm() {
    return (
        <section>
            <form method="post" action="#">
                <div className="row gtr-50">
                    <div className="col-6 col-12-small">
                        <input type="text" className="name" id="contact-name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-small">
                        <input type="text" className="email" id="contact-email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <textarea className="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" className="style1" value="Send" /></li>
                            <li><input type="reset" className="style2" value="Reset" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>  
    );
}

export default ContactForm;