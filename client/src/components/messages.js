import React from 'react';
import Card from 'react-bootstrap/Card'

const Messages = ({ clientName, email, message }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{clientName}</Card.Title>
                <Card.Text>
                    {email}
                </Card.Text>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Messages;