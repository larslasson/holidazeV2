import React, { useState, useEffect } from 'react';

import establishments from '../data/establishments.json';

import SpecificHotel from '../components/specificHotel';

export default function HotelSpecific(props) {
    const [specificEstablishment, setspecificEstablishment] = useState([]);

    useEffect(() => {
        let filteredArray = establishments.filter((value) => {
            return props.match.params.id === value.id
        })
        setspecificEstablishment(filteredArray)
    }, [props])

    return (
        <div className="container specificHotel">
            {
                specificEstablishment.map((data) => {
                    return (
                        <SpecificHotel key={data.id}
                            id={data.id}
                            establishmentName={data.establishmentName}
                            imageUrl={data.imageUrl}
                            description={data.description}
                            price={data.price}
                            maxGuests={data.maxGuests}
                            establishmentEmail={data.establishmentEmail}
                            selfCatering={data.selfCatering}
                        />
                    )
                }
                )
            }
        </div>
    )
}