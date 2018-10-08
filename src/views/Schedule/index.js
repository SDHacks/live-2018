import React, { Component } from 'react';

class Countdown extends Component {

    render() {
        return (
            <div class="schedule d-flex container m-0 justify-content-center flex-column align-items-center">
                <div className="row">
                    <div className="text-center">
                        <h1 className="schedule__header">
                            Full Schedule
                        </h1>
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