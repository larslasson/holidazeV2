import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />

const Hotels = ({ establishmentName, imageUrl, id, description, maxGuests, price, establishmentEmail }) => {
    return (
        <div className="row hotels">
            <div className="col-sm-4 hotels__image">
                <img className="card-img" src={imageUrl} alt={'Hotel' + id} />
            </div>
            <div className="col-sm-4 hotels__midCol">
                <i>{star}</i>
                <i>{star}</i>
                <i>{star}</i>
                <i>{star}</i>
                <h4>{establishmentName}</h4>
                <p>{description}</p>
                <p>Email: {establishmentEmail}</p>
            </div>
            <div className="col-sm-4 hotels__rightCol">
                <p>Max guests: {maxGuests}</p>
                <h4>${price}</h4>
                <p>Price for 1 night</p>
                <Link to={`/hotel-specific/${id}`} className="hotels__button">More details</Link>
            </div>
        </div>
    )
}

export default Hotels;