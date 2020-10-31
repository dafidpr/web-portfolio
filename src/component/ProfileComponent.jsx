import React from 'react';
import EducationComponent from './EducationComponent';
import PersonalInfoComponent from './PersonalInfoComponent';

function  ProfileComponent(props) {
    return(
        <section className="section bg-muted">
            <div className="row">
                <div className="container">
                    <h3 className="title is-3 mb-6 text-color-dark">Profile</h3>
                    <div className="columns">
                        
                        <PersonalInfoComponent 
                            name={props.name}
                            gender={props.gender}
                            birthday={props.birthday}
                            address={props.address}
                            religion={props.religion}
                            citizenship={props.citizenship}
                            phone={props.phone}
                            email={props.email}
                            hobi={props.hobi}
                        />
                        <EducationComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileComponent;