import React from 'react';
import EducationComponent from './EducationComponent';
import PersonalInfoComponent from './PersonalInfoComponent';

function  ProfileComponent({ name, address, phone, email }) {
    return(
        <section className="section bg-muted">
            <div className="row">
                <div className="container">
                    <h3 className="title is-3 mb-6 text-color-dark">Profile</h3>
                    <div className="columns">
                        
                        <PersonalInfoComponent 
                            name={name}
                            gender="Laki-laki"
                            ttl="Banyuwangi, 22 April 2002"
                            address={address}
                            religion="Islam"
                            citizenship="Indonesia"
                            phone={phone}
                            email={email}
                            hobi="Programming, Gym"
                        />
                        <EducationComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileComponent;