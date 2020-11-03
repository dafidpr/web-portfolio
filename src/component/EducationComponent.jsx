import React from 'react';

function EducationComponent() {
    return (
        <div className="column">
            <div className="card border-radius-6">
                <h3 className="card-header-title ml-4 mt-3">Education</h3>
                <div className="card-content">
                    <div className="xp-actions-history ml-3">
                        <div className="xp-actions-history-list">
                            <div className="xp-actions-history-item">
                                <h6 className="title is-6">2008 - 2014</h6>
                                <p className="mb-5">SDN 2 Kaligung</p>
                            </div>
                        </div>
                        <div className="xp-actions-history-list">
                            <div className="xp-actions-history-item">
                            <h6 className="title is-6">2014 - 2017</h6>
                                <p className="mb-5">SMP Plus Al - Hidayah</p>
                            </div>
                        </div>
                        <div className="xp-actions-history-list">
                            <div className="xp-actions-history-item mb-5">
                            <h6 className="title is-6">2017 - 2020</h6>
                                <p>SMK Muhammadiyah 6 Rogojampi</p>
                                <small>RPL (Rekayasa Perangkat Lunak) </small>
                            </div>
                        </div>
                        <div className="xp-actions-history-list">
                            <div className="xp-actions-history-item">
                            <h6 className="title is-6">2020 - Sekarang</h6>
                                <p>Politeknik Negeri Banyuwangi</p>
                                <small>D3 - Teknik Informatika</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComponent
