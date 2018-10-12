import React, { Component } from 'react';
import data from '../../static/schedule.json';

class Going extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            now: new Date("Fri Oct 12 2018 12:59:50 GMT-0700 (Pacific Daylight Time)"),
         };
    }

    updateContact() {

    }

    moveHour() {
        this.setState({currIndex: this.state.now.getHours()})
        this.updateContact()
    }

    tick() {
        const now = this.state.now;
        now.setSeconds(now.getSeconds() + 1);
        this.setState({now})
            if (now.getMinutes() === 0 && now.getSeconds() === 0) {
            this.moveHour()
        }
    }

    componentDidMount() {
        const currDay = new Date().getDate() - 12;

        if (currDay >= 2 && currDay <= 4) {
            this.setState({currDay})
        }

        this.setState({data: data[currDay]});

        setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div className="live-page announcements d-flex container m-0 justify-content-center flex-column align-items-center">
                <div className="row">
                    <div className="text-center">
                        <h1 className="announcements__header">
                            What's Going On?
                        </h1>

                    </div>
                </div>
            </div>
        )
    }
}

export default Going;