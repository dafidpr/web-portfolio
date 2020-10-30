import React from 'react';
import logoHtml from '../images/html.png';
import logoCss from '../images/css.png';
import logoJs from '../images/js.png';
import logoBulma from '../images/bul.png';
import logoReact from '../images/react.png';

function FooterComponent({ name, phone, address, email }) {

    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h3 className="subtitle has-text-white">Contact</h3>
                        <p>
                            <span class="icon">
                                <i class="fas fa-home"></i>
                            </span>
                            {address}
                        </p>
                        <p>
                            <span class="icon">
                                <i class="fas fa-phone"></i>
                            </span>
                            Phone : {phone}
                        </p>
                        <p>
                            <span class="icon">
                                <i class="fas fa-envelope"></i>
                            </span>
                            Email : {email}
                        </p>
                    </div>
                    <div className="column">
                        <h3 className="subtitle has-text-white">Built With</h3>
                        <div className="d-flex">
                            <figure className="image mr-1 is-32x32">
                                <img src={logoHtml} />
                            </figure>
                            <figure className="image is-32x32">
                                <img src={logoCss} />
                            </figure>
                            <figure className="image mr-2 is-32x32">
                                <img src={logoBulma} />
                            </figure>
                            <figure className="image is-32x32">
                                <img src={logoJs} />
                            </figure>
                            <figure className="image is-48x48">
                                <img src={logoReact} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-text-centered" style={{ marginBottom: "-60px", marginTop: "90px" }}>
                Developer by <strong><a href="http://github.com/dafidpr" target="_blank" className="has-text-white" rel="noopener noreferrer"> <i className="fas fa-heart has-text-danger"></i> {name}</a></strong> | &copy; Copyright 2020 All right reserved.
            </div>
        </footer>
    )
}
 export default FooterComponent;