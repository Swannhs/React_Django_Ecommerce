import React from 'react';
import {Container} from "semantic-ui-react";

const Footer = () => {
    return (
        <div>
            <footer className="footer px-0 px-lg-3">
                <Container fluid>
                    <nav>
                        <p className="copyright text-center">
                            © {new Date().getFullYear()}{" "}
                            made by
                            <a href="https://swann.netlify.app/"> Swann</a>
                        </p>
                    </nav>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
