import React, { Component } from 'react';
import HeroComponent from '../component/HeroComponent';
import AboutComponent from '../component/AboutComponent';
import ProfileComponent from '../component/ProfileComponent';
import ExperienceComponent from '../component/ExperienceComponent';
import FooterComponent from '../component/FooterComponent';
import '../component/Custom.css';

class Home extends Component {

    constructor(){
        super();
        this.state = {
            name: "Dafid Prasetyo",
            phone: "6285236578588",
            address: "Karangrejo, Blimbingsari, Banyuwangi",
            email: "dafidprasetyo109@gmail.com",
            gender: "Laki-laki",
            birthday: "Banyuwangi, 22 April 2002",
            citizenship: "Indonesia",
            religion: "Islam",
            hobi: "Programming, Gym",
            label: ["Hello i'm Freelance Web Developer", "and i'm Informatics Engineering Students"]
        };
    }

    render() {
        return (
            <div>
                <HeroComponent 
                    name={this.state.name} 
                    label={this.state.label} 
                />
                <AboutComponent name={this.state.name}/>
                <ProfileComponent 
                    name={this.state.name}
                    address={this.state.address}
                    phone={this.state.phone}
                    email={this.state.email}
                    religion={this.state.religion}
                    citizenship={this.state.citizenship}
                    gender={this.state.gender}
                    birthday={this.state.birthday}
                    hobi={this.state.hobi}
                />
                <ExperienceComponent />
                <FooterComponent 
                    name={this.state.name}
                    phone={this.state.phone}
                    email={this.state.email}
                    address={this.state.address}
                />
            </div>
        )
    }
}

export default Home;