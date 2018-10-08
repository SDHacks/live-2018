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
                            <a className="col-md links__e" href="https://join.slack.com/t/sdhacks2018/shared_invite/enQtNDQ4ODE3NDUxMTIzLTU4YTRkZjJmMDUwZWIwMDYyMmRmNTBmYzgzNDhiZjQ4NjYxMzllMDliOTI2MzEwOGMzNTliMDc5OGQ3ZGRjYjk">
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
                    <div class="text-center w-100 links__copy">
                        Need anything else? Check out our <a> helpdesk</a> or message us on <a href="https://join.slack.com/t/sdhacks2018/shared_invite/enQtNDQ4ODE3NDUxMTIzLTU4YTRkZjJmMDUwZWIwMDYyMmRmNTBmYzgzNDhiZjQ4NjYxMzllMDliOTI2MzEwOGMzNTliMDc5OGQ3ZGRjYjk">Slack</a> 📝
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