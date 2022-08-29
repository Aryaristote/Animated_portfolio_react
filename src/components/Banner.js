import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import logo from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullTexte = toRotate[i];
        let updatedText = isDeleting ? fullTexte.substring(0, text.length - 1) : fullTexte.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullTexte) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animated_animated animated_fadeIn" : ""}>
                                    <span className="tagline">Welcom to my Portofolio</span>
                                    <h1>{ `Hi, i'm a Web Developer `}<span className="wrap">{ text }</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse tempore, dolorum illo consectetur porro ipsa voluptas qui ea, voluptatibus enim placeat molestiae, magnam iusto atque laborum. Et, voluptas vero?</p>
                                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Banner;