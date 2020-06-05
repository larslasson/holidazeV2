import React, { useState, useEffect } from 'react';

import establishments from '../data/establishments.json';

import TypeHead from '../components/typehead';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />

export default function Home() {
    const [allEstablishments, setallEstablishments] = useState(undefined);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);
    const [filteredResults, setfilteredResults] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState('');

    useEffect(() => {
        setallEstablishments(establishments);
    }, [])

    const handleFiltering = (input) => {
        let filteredEstablishments = allEstablishments.filter((value) => {
            return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
        })
        if (input.target.value === '') filteredEstablishments = [];
        setfilteredResults(filteredEstablishments)
        setSearchPhrase(input.target.value)
        setIsResultsFiltered(true)
    }

    return (
        <div className="backgroundHome">
            <div className="container">
                <h1>Search for any accomidation in Bergen!</h1>
                <div className="row homeSearch">
                    <div className="col-sm-1 homeSearch__icon">
                        <i>{mapMarker}</i>
                    </div>
                    <div className="col-sm-11 homeSearch__searchbar">
                        <input type="text" onChange={handleFiltering}
                            className="form-control" placeholder="Search for Hotel name..." />
                    </div>
                </div>
                <div className="row typehead">
                    {
                        (isResultsFiltered) &&
                        <>
                            <h3 className="typehead__header">Results for {searchPhrase}</h3>
                            {
                                (filteredResults.length > 0) ?
                                    filteredResults.map((value, index) => {
                                        return <TypeHead key={index}
                                            id={value.id}
                                            establishmentName={value.establishmentName}
                                        />
                                    }) :
                                    <div className="col-sm-12">No Results</div>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}