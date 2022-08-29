import { Alert } from "bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const NewsLetter = ({ onValidated, status, message }) => { 
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') cleaFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email    
        })
    }

    const cleaFields = () => {
        setEmail('')
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscrib to our new letter</h3>
                        { status === 'sending' && <Alert>Seeding...</Alert> }
                        { status === 'error' && <Alert variant="danger">{message}</Alert> }
                        { status === 'success' && <Alert variant="success">{message}</Alert> }
                    </Col>
                    <Col ms={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
 
export default NewsLetter;