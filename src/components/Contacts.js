import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import contactimg from '../assets/img/contactimg.svg';


export const Contacts = () => {
    const formInitialDetails = { 
        firstName:'',
        lastName:'',
        email: '',
        phone:'',
        message: '',
    }

    const { formDetails, setFFormDetails } = useState(formInitialDetails);
    const { buttonText, setbuttonText } = useState('Send');
    const { status, setStatus } = useState({});

    const onFormUpdate = (category, value) => {
        setFFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setbuttonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setbuttonText("Send");
        let result = response.json();
        setFFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successufully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, try again' });
        }
    };

    return (
        <section className="contact">
            <Row className="align-items-center">
                <Col md={6}>
                    <img className="background-image-right" src={contactimg} alt="logo" />
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col ms={6} className="px-1">
                                <input type="text" value={formDetails.firstName}
                                    placeholder="First name"
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                />
                            </Col>
                            <Col ms={6} className="px-1">
                                <input type="text" value={formDetails.lastName}
                                    placeholder="Last name"
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                />
                            </Col>
                            <Col ms={6} className="px-1">
                                <input type="email" value={formDetails.email}
                                    placeholder="Email"
                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                />
                            </Col>
                            <Col ms={6} className="px-1">
                                <input type="Phone" value={formDetails.phone}
                                    placeholder="Phone"
                                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                                />
                            </Col>
                            <Col ms={6} className="px-1">
                                <textarea name="message" id="" value={formDetails.message} rows="6"
                                onChange={(e) => onFormUpdate('message', e.target.value)}
                                ></textarea>
                                <button type="submit"><span>{ buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                        <p className={status.sucess === false ? " danger" : "success"}>{ status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </section>
    );
}
 
export default Contacts;