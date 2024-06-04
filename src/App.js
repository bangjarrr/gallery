import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const importAll = (r) => r.keys().map(r);

const App = () => {
    const images = importAll(require.context('./gallery', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 w-body mt-5 pt-5" id="gallery">
            <div className="mt-5">
                <Container className="pb-5 mb-5">
                    <Row>
                        <Col>
                            <h1 className="text-center text-warning">My Gallery</h1>
                            <div className="border-bottom"></div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {images.map((image, index) => (
                            <Col md={4} className="my-3" key={index}>
                                <img src={image} alt="rawr" className="img-fluid gallery-img" onClick={() => window.location.href = image} />
                            </Col>
                        ))};

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default App;
