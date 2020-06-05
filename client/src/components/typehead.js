import React from 'react';
import { Link } from 'react-router-dom';

const TypeHead = ({ establishmentName, id }) => {
    return (
        <Link to={`/hotel-specific/${id}`} className="typehead__button col-sm-12">
            {establishmentName}
            <hr />
        </Link>
    )
}

export default TypeHead;