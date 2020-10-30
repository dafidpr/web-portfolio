import React from 'react';
import imagePict from '../images/dafidpr2.jpg';


function AboutComponent({ name }) {
    return(
        <div className="section bg-muted">
            <div className="row">
                <div className="container">
                    <h3 className="title is-3 mb-6 text-color-dark">About Me</h3>
                    <div className="columns">
                        <div className="column">
                            <img src={imagePict} alt="Rounded Image" className="rounded-circle mx-auto d-block mt-2" width="150" />
                            <p className="has-text-centered mt-5"><b>D-3 Teknik Informatika</b> </p>
                        </div>
                        <div className="column is-9">
                                <div className="card border-radius-6">
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="columns">
                                                <div className="column ml-2">
                                                    <p> Saya <b>{name}</b>. Mahasiswa D-3 Teknik Informatika di Politeknik Negeri Banyuwangi. Selain mahasiswa, saya adalah seorang freelance web developer. Saya sudah mulai suka dengan coding sejak kelas 2 SMK.</p>
                                                    {/* <a href="#" className="button mt-3 button-special is-danger is-rounded box-shadow-lift">
                                                    <span>Download CV</span></a> */}
                                                </div>
                                                <div className="column">
                                                    <div className="row">
                                                        <strong>PHP</strong>
                                                        <span style={{float: "right"}}>60%</span>
                                                    </div>
                                                    <progress className="progress is-link" value="60" max="100">60%</progress>
                                                    <div className="row">
                                                        <strong>Javascript</strong>
                                                        <span style={{float: "right"}}>40%</span>
                                                    </div>
                                                    <progress className="progress is-warning" value="40" max="100">40%</progress>
                                                    <div className="row">
                                                        <strong>MySQL</strong>
                                                        <span style={{float: "right"}}>50%</span>
                                                    </div>
                                                    <progress className="progress is-danger" value="50" max="100">50%</progress>
                                                    {/* <div className="row">
                                                        <strong>HTML</strong>
                                                        <span style={{float: "right"}}>70%</span>
                                                    </div>
                                                    <progress className="progress is-success" value="70" max="100">70%</progress> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AboutComponent;