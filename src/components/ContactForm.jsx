import React, { useState } from 'react';
import Button from './Button';

// Set VITE_API_URL in a .env.local file to point at a local server, e.g. http://localhost:8080/send-email
const API_URL = import.meta.env.VITE_API_URL || "https://move-it-sports-coaching-api.onrender.com/send-email";
const ENQUIRIES_EMAIL = "enquiries@moveitsportscoaching.co.uk";

export default function ContactForm() {
    const [emailStatus, setEmailStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (emailStatus === 'sending') return;
        setEmailStatus('sending');

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formJson),
            });

            if (response.ok) {
                form.reset();
                setEmailStatus('success');
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            setEmailStatus('failure');
            console.error(error);
        }
    }

    const isSending = emailStatus === 'sending';

    return (
        <section>
            {emailStatus === 'success' ? (
                <h1 className="emailMessage">Thank you! Your message has been sent.</h1>
            ) : (
                <form onSubmit={handleSubmit}>
                    {emailStatus === 'failure' && (
                        <p className="emailMessage" role="alert">
                            Sorry, your message failed to send. Please try again, or email us directly
                            at <a className="link-style2" href={`mailto:${ENQUIRIES_EMAIL}`}>{ENQUIRIES_EMAIL}</a>.
                        </p>
                    )}
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
                                    <li>
                                        <Button type="submit" name={isSending ? "Sending..." : "Send"} buttonStyle="style1" disabled={isSending} />
                                    </li>
                                    <li>
                                        <Button type="reset" name="Reset" buttonStyle="style2" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </form>
            )}
        </section>
    );
}