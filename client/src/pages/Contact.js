import React, { useState } from 'react';

export default function Contact() {

    // eslint-disable-next-line
    const [name, setname] = useState('');
    const [nameError, setnameError] = useState(true);
    const [emailError, setemailError] = useState(true);
    const [messageError, setmessageError] = useState(true);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {
            case 'clientName':
                value !== '' ? setnameError(false) : setnameError(true)
                break;
            case 'email':
                emailPattern.test(value) ? setemailError(false) : setemailError(true)
                break;
            case 'message':
                value !== '' ? setmessageError(false) : setmessageError(true)
                break;
            default:
                break;
        }
        setname(value)
    }

    return (
        <div className="container contact">
            <div className="col-sm-10">
                <h4>Contact us with any questions you have regarding our services. We are happy to assist you
            choosing the perfect hotel.<br /><br />
            Please not we are a Third party booking service and are unable to assist after the hotel has been
            booked. Please contact them directly for assistance with Your booking. </h4>
            </div>
            <form method="POST" action="http://localhost/holidaze/contact-success.php">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="clientName">Full name:</label><br />
                        <input type="text"
                            name="clientName"
                            id="clientName"
                            onChange={handleChange}
                        />
                        <p className={(nameError) ? 'error' : 'error__hide'}>Please enter your Name</p>
                    </div>
                    <div className="col-sm-6">
                        <label for="email">Email Address:</label><br />
                        <input type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                        />
                        <p className={(emailError) ? 'error' : 'error__hide'}>Please enter a valid email</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="message">Message:</label><br />
                        <textarea
                            name="message"
                            id="message"
                            rows="8"
                            onChange={handleChange}
                        ></textarea>
                        <br />
                        <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message</p>
                        <input type="submit" className="contact__submit" disabled={nameError || emailError || messageError} /></div>
                </div>
            </form>
        </div>
    )
}