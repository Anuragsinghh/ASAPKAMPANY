import React from "react";
import './footer.css'

import logo from '../../imgs/logo.png';


import { Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    const year = new Date().getFullYear()
    return( 
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" className="mb-4">
                    <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1 className="text-white">ASAP KAMPANY</h1>
                                <p>Since 2020</p>
                            </div>
                            
                        </div>
                        <p className="footer__text mt-4">
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet.
                                
                            </p>
                    </Col>

                    <Col lg="3" className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title mb-1">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>ELECTRIC SERVICES</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>DECOR SERVICES</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>AC SERVICES</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>SALON SERVICES</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" className="mb-4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title mb-1">Useful Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" className="mb-4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title mb-1">Contact Us</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>123 Mumbai, Dombivali, Maharashtra</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-phone-line"></i></span>
                                    <p>913320293</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-mail-line"></i></span>
                                    <p>asapkampany@info</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">Copyright {year} developed by KANS. All rights reserved.</p>

                    </Col>
                 

                </Row>
            </Container>
        </footer>
    )
};
export default Footer;