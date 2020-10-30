import React, { Component } from 'react';
import HeroComponent from '../component/HeroComponent';
import AboutComponent from '../component/AboutComponent';
import ProfileComponent from '../component/ProfileComponent';
import ExperienceComponent from '../component/ExperienceComponent';
import FooterComponent from '../component/FooterComponent';
import PortfolioComponent from '../component/PortfolioComponent';
import '../component/Custom.css';

class Home extends Component {

    constructor(){
        super();
        this.state = {
            name: "Dafid Prasetyo",
            phone: "085236578588",
            address: "Karangrejo, Blimbingsari, Banyuwangi",
            email: "dafidprasetyo109@gmail.com",
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
                />
                <ExperienceComponent />
                <PortfolioComponent />
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