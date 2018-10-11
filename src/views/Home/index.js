import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Home extends Component {


    render() {
        return (
            <div class="hero d-flex container m-0 justify-content-center flex-column align-items-center">
                <div class="row text-center">
                    <img className="hero__logo" src={logo} alt="logo" />
                    <div className="text-center w-100">
                        <h1 className="hero__text">SD HACKS LIVE </h1>
                        <h3 className="hero__text hero__small">Welcome to SD Hacks 2018! 👋</h3>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                    .bm-burger-bars {
                        background: #1F6077;
                    }
                `}} />
            </div>
        )
    }
}

export default Home;