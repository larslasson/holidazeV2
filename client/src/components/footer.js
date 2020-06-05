import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h3>Holidaze</h3>
                        <p>Lorem ipsum laierh pasir apijser psers lalser ale lname monaer oijh erap</p>
                    </div>
                    <div className="col-sm-3 footer__newsletter">
                        <h3>Newsletter</h3>
                        <input type="text" placeholder="Email..."></input>
                        <button type="button">Subscribe</button>
                    </div>
                    <div className="col-sm-3">
                        <h3>Collaborators</h3>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="col-sm-3 footer__social">
                        <h3>Follow us</h3>
                        <i>{facebook}</i>
                        <i className="footer__social--middle">{twitter}</i>
                        <i>{instagram}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;