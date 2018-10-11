import React, { Component } from 'react';
import announcements from '../../static/accouncements.json';
import Announcement from './Announcement';

class Countdown extends Component {


    renderAnnouncements() {

        if (announcements.length < 1) {
            return (<div class="announcements__small">
                No Announcements Right Now, Happy Hacking!
                <span role="img" aria-label="">😄</span>
            </div>)
        }

        return announcements.map((x, i) => {
            return (
                <Announcement data={x} key={i} />
            )
        })
        
    }

    render() {
        return (
            <div className="live-page announcements container m-0">
                <div className="row mb-5">
                        <h1 className="announcements__header text-center w-100">
                            Announcements
                        </h1>
                </div>
                {this.renderAnnouncements()}
            </div>
        )
    }
}

export default Countdown;