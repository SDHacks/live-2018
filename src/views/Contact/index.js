import React, { Component } from 'react';

class Contact extends Component {


    render() {
        return (
            <div className="live-page announcements d-flex container m-0 justify-content-center flex-column align-items-center">
                <div className="row">
                    <div className="text-center">
                        <h1 className="announcements__header">
                            Couldn't find what you need? Message us on <a className="announcements__link" href="https://join.slack.com/t/sdhacks2018/shared_invite/enQtNDQ4ODE3NDUxMTIzLTU4YTRkZjJmMDUwZWIwMDYyMmRmNTBmYzgzNDhiZjQ4NjYxMzllMDliOTI2MzEwOGMzNTliMDc5OGQ3ZGRjYjk">Slack</a> 💬
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;