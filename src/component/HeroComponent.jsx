import React, {useEffect} from 'react';
import imageProfile from '../images/dafidpr.jpg';
import {init} from 'ityped';


function HeroComponent(props) {

    useEffect(() => {
        const element = document.querySelector('#about-me');
        init(element,{
            showCursor:true,
            strings: props.label,
            typeSpeed: 60,
            startDelay: 90,
        });
    });
    
    return (
        <div className="section bg-image">
            <img src={imageProfile} alt="" className="rounded-circle mx-auto d-block" width="150"/>
            <h3 className="title is-4 has-text-centered has-text-white mt-5">{props.name}</h3>
                <div style={{textAlign: "center", marginTop:"-14px"}}>
                <small className="has-text-centered" id="about-me"></small>
            </div>
            <div className="d-flex justify-content-center mt-6">
                <a href="https://instagram.com/dafidpr_" rel="noopener noreferrer" target="_blank" className="has-text-centered">
                    <i className="fab fa-instagram has-text-white fa-2x"></i>
                </a>
                <a href="https://twitter.com/dafidpr" target="_blank" rel="noopener noreferrer" className="has-text-centered">
                    <i className="fab fa-twitter has-text-white ml-4 fa-2x"></i>
                </a>
                <a href="https://github.com/dafidpr" rel="noopener noreferrer" target="_blank" className="has-text-centered">
                    <i className="fab fa-github has-text-white ml-4 fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default HeroComponent;