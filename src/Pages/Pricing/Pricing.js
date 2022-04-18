import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div>
            <h1>Our Service Pricing</h1>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>Basic</h1>
                            <h2>$24.50 / session</h2>
                            <br />
                        </Card.Title>
                        <Card.Text>
                            <p>Diagnostic Services</p>
                            <p>Professional Consultation</p>
                            <p>Tooth Implants</p>
                            <p>Surgical Extractions</p>
                            <p>Teeth Whitening</p>
                        </Card.Text>
                    </Card.Body>
                    <button className='btn btn-info'>Get Offer</button>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>Premium</h1>
                            <h2>$54.50 / session</h2>
                            <br />
                        </Card.Title>
                        <Card.Text>
                            <p>Diagnostic Services</p>
                            <p>Professional Consultation</p>
                            <p>Tooth Implants</p>
                            <p>Surgical Extractions</p>
                            <p>Teeth Whitening</p>
                        </Card.Text>
                    </Card.Body>
                    <button className='btn btn-info'>Get Offer</button>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>Platinum</h1>
                            <h2>$89.50 / session</h2>
                            <br />
                        </Card.Title>
                        <Card.Text>
                            <p>Diagnostic Services</p>
                            <p>Professional Consultation</p>
                            <p>Tooth Implants</p>
                            <p>Surgical Extractions</p>
                            <p>Teeth Whitening</p>
                        </Card.Text>
                    </Card.Body>
                    <button className='btn btn-info'>Get Offer</button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Pricing;