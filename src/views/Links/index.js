import React, { Component } from 'react';

class Countdown extends Component {


    render() {
        return (
            <div class="links d-flex container m-0 justify-content-center flex-column align-items-center">
                <div className="row">
                    <div className="text-center w-100">
                        <h1 className="links__header">
                            Helpful Links
                        </h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <a className="col-md links__e">
                                Mentors
                            </a>
                            <a className="col-md links__e">
                                Map
                            </a>
                            <a className="col-md links__e">
                                Slack
                            </a>
                        </div>
                        <div className="row">
                            <a className="col-md links__e">
                                Software & APIs
                            </a>
                            <a className="col-md links__e">
                                Hardware
                            </a>
                        </div>
                        <div className="row">
                            <a className="col-md links__e">
                                Submit Your Project
                            </a>
                            <a className="col-md links__e">
                                Expo
                            </a>
                        </div>
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

export default Countdown;