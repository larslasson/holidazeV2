import React, { useState, useEffect } from 'react'

import Hotels from '../components/establishments';
import establishments from '../data/establishments.json';

export default function Establishments() {
    const [allEstablishments, setallEstablishments] = useState([])
    useEffect(() => {
        setallEstablishments(establishments)
    }, [])

    return (
        <>
            <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126246.83712272257!2d5.339887448332222!3d60.369134945376395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sen!2sno!4v1589894178989!5m2!1sen!2sno" className="gmaps"></iframe>
            <div className="container allestablishments">

                {
                    allEstablishments.map((data) => {
                        return (
                            <Hotels key={data.id}
                                id={data.id}
                                establishmentName={data.establishmentName}
                                imageUrl={data.imageUrl}
                                description={data.description}
                                price={data.price}
                                maxGuests={data.maxGuests}
                                establishmentEmail={data.establishmentEmail}
                            />
                        )
                    }
                    )
                }
            </div>
        </>
    )
}