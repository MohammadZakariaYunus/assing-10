import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card1 from '../../images/card1.jpg';
import Card2 from '../../images/card2.jpg';
import Card3 from '../../images/card3.jpg';

const Services = () => {
    return (
        <div id='services'>
            <h1>Our Service Services</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Card1} />
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
                    <Link to="/checkout">
                        <button className='btn btn-outline-dark'>Check Out</button>
                    </Link>
                </Card >
                <Card>
                    <Card.Img variant="top" src={Card2} />
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
                    <Link to="/checkout">
                        <button className='btn btn-outline-dark'>Check Out</button>
                    </Link>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Card3} />
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
                    <Link to="/checkout">
                        <button className='btn btn-outline-dark'>Check Out</button>
                    </Link>
                </Card>
            </CardGroup >
        </div >
    );
};

export default Services;