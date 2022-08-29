import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; 

import logo from '../assets/img/logo_rect.svg';
import logo1 from '../assets/img/nav-icon1.svg';
import logo2 from '../assets/img/nav-icon2.svg';
import logo3 from '../assets/img/nav-icon3.svg';


const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={logo1} /></a>
                            <a href="#"><img src={logo2} /></a>
                            <a href="#"><img src={logo3} /></a>
                        </div>
                        <p>CopyRight 2022. All Right reserved to Kalume Ernest Aristote</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;