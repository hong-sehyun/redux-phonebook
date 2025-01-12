import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const ContactItem = ({ item }) => {
    return (
        <Card className='card'>
            <Row>
                <Col lg={2}>
                    <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
                </Col>
                <Col lg={10}>
                    <div>{item.name}</div>
                    <div>{item.phoneNumber}</div>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactItem