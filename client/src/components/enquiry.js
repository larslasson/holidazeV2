import React from 'react';
import Card from 'react-bootstrap/Card'

const Enquiry = ({ establishment, clientName, email, checkin, checkout, adults, children, notes }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{establishment}</Card.Title>
                <Card.Text>
                    <b>Name:</b> {clientName}
                </Card.Text>
                <Card.Text>
                    <b>Email:</b>  {email}
                </Card.Text>
                <Card.Text>
                    <b>Adults:</b> {adults}
                </Card.Text>
                <Card.Text>
                    <b>Children:</b> {children}
                </Card.Text>
                <Card.Text>
                    <b>Note:</b> {notes}
                </Card.Text>
                <Card.Text>
                    <b>Check in:</b> {checkin}
                </Card.Text>
                <Card.Text>
                    <b>Check out:</b> {checkout}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Enquiry;