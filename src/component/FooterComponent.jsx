import React from 'react';
import logoHtml from '../images/html.png';
import logoCss from '../images/css.png';
import logoJs from '../images/js.png';
import logoBulma from '../images/bul.png';
import logoReact from '../images/react.png';

function FooterComponent(props) {

    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h3 className="subtitle has-text-white">Contact</h3>
                        <p>
                            <span className="icon">
                                <i className="fas fa-home"></i>
                            </span>
                            {props.address}
                        </p>
                        <p>
                            <span className="icon">
                                <i className="fas fa-phone"></i>
                            </span>
                            Phone : <a href={"http://wa.me/" + props.phone} className="has-text-white" target="_blank" rel="noopener noreferrer" >{props.phone}</a> 
                        </p>
                        <p>
                            <span className="icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            Email : <a href={"mailto:" + props.email} className="has-text-white">{props.email}</a> 
                        </p>
                    </div>
                    <div className="column">
                        <h3 className="subtitle has-text-white">Built With</h3>
                        <div className="d-flex">
                            <figure className="image mr-1 is-32x32">
                                <img alt="Logo HTML Pict" src={logoHtml} />
                            </figure>
                            <figure className="image is-32x32">
                                <img alt="Logo CSS Pict" src={logoCss} />
                            </figure>
                            <figure className="image mr-2 is-32x32">
                                <img alt="Logo Bulma Pict" src={logoBulma} />
                            </figure>
                            <figure className="image is-32x32">
                                <img alt="Logo Javascript Pict" src={logoJs} />
                            </figure>
                            <figure className="image is-48x48">
                                <img alt="Logo React Js Pict" src={logoReact} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-text-centered" style={{ marginBottom: "-60px", marginTop: "90px" }}>

                Developer by <strong><a href="https://github.com/dafidpr/web-portfolio" target="_blank" className="has-text-white" rel="noopener noreferrer"> <i className="fas fa-heart has-text-danger"></i> {props.name}</a></strong> | &copy; Copyright 2020 All right reserved. <br/> 
                
            </div>
        </footer>
    )
}
 export default FooterComponent;