import React, { Component } from 'react';
import './Cover.css';
import Particles from "react-particles-js";
import football_player from "../../images/football_player_icon.svg";

const particlesOptions = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 900
            }
        },
    }
};

class Cover extends Component {
    render() {
        return (
            <div className='cover-container'>

                <div id='motto-container'>
                    <h2 id='motto'>Your one stop shop for fantasy football information.</h2>
                </div>
                <div>
                    <Particles className='particles' params={particlesOptions} />
                    <img src={football_player} alt='football player' id='football-player'/>
                </div>
            </div>
        )
    }
}

export default Cover;