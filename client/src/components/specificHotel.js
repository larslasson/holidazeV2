import React from 'react';

import Swal from 'sweetalert2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />

const SpecificHotel = ({ establishmentName, imageUrl, id, description, price, establishmentEmail, selfCatering }) => {

    const modal = () => {
        Swal.fire({
            title: `<strong>Book your stay at ${establishmentName} now!</strong>`,
            html:
                `<form method="POST" action="http://localhost/holidaze/enquiry-success.php" class="enquiry">
              <div class="row d-none"> 
              <label for="establishment">Establishment:</label>
              <input type="text" name="establishment" id="establishment" value="${establishmentName}" readonly />
              </div>
              <div class="row">
                  <div class="col-3">
              <label for="clientName">Full name:</label>
              </div>
              <div class="col-9">
              <input type="text" name="clientName" id="clientName" />
              </div>
              </div>
              <div class="row">
              <div class="col-3">
              <label for="email">Email Address:</label>
              </div>
              <div class="col-9">
              <input type="text" name="email" id="email" />
              </div>
              </div>
              <div class="row">
              <div class="col-3">
              <label for="adults">Adults:</label>
              </div>
              <div class="col-9">
              <input type="number" name="adults" id="adults" />
              </div>
              </div>
              <div class="row">
              <div class="col-3">
              <label for="children">Children:</label>
              </div>
              <div class="col-9">
              <input type="number" name="children" id="children" />
              </div>
              </div>
              <div class="row">
              <div class="col-3">
              <label for="note">Note:</label>
              </div>
              <div class="col-9">
              <input type="text" name="notes" id="notes" />
              </div>
              </div>
              <div class="row ">
                  <div class="col-3">
              <label for="checkin">Check-in:</label>
              </div>
              <div class="col-9">
              <input type="date" name="checkin" id="checkin" />
              </div>
              </div>
              <div class="row">
              <div class="col-3">
              <label for="checkout" class="checkOut">Check-out:</label>
              </div>
              <div class="col-9">
              <input type="date" name="checkout" id="checkout" />
              </div>
              </div>
              <div class="row">
                  <div class="col-12">
              <input type="submit" class="enquiry__submit" value="Book"/>     
              </div> 
              </div>
            </form>`,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false
        })
    }

    return (

        <>
            <div className="row">
                <div className="col-sm-12">
                    <h2>{establishmentName} <i>{star}</i>
                        <i>{star}</i>
                        <i>{star}</i>
                        <i>{star}</i>
                    </h2>
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-8 specificHotel__image">
                    <img className="img-fluid" src={imageUrl} alt={'Hotel' + id} />
                </div>
                <div className="col-sm-4">
                    <div className="image-container">
                        <img className="img-fluid" src={"https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt={'Character' + id} />
                        <div className="after"><p>View All Photos</p></div>
                    </div>
                    <div className="image-container">
                        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126246.83712272257!2d5.339887448332222!3d60.369134945376395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sen!2sno!4v1589894178989!5m2!1sen!2sno" className="specificGmaps"></iframe>
                        <div className="after"><p>View On Map</p></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row specificHotel__room">
                <div className="col-sm-6">
                    <h3>Standard Room</h3>
                </div>
                <div className="col-sm-3 specificHotel__price">
                    <h3>$ {price}</h3>
                </div>
                <div className="col-sm-3 specificHotel__button">
                    <button type="button" onClick={modal}>Book Now</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <h3>Description:</h3>
                </div>
                <div className="col-sm-9">
                    <p>{description}
                    Conveniences include phones, as well as safes and desks.Amenities Be sure to enjoy recreational amenities including a fitness center and bicycles to rent. This hotel also features complimentary wireless Internet access, concierge services, and an arcade/game room. </p> <p>Dining Grab a bite to eat at the hotel's restaurant, which features a bar, or stay in and take advantage of room service (during limited hours). Quench your thirst with your favorite drink at a bar/lounge. Buffet breakfasts are available daily for a fee.Business, Other Amenities Featured amenities include a 24-hour business center, dry cleaning/laundry services, and a 24-hour front desk. Self parking (subject to charges) is available onsite.</p>

                    <p>Email: {establishmentEmail}</p>
                    <p>Self Catering: {selfCatering}</p>
                </div>
            </div>
        </>
    )
}

export default SpecificHotel;