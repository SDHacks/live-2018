import React, { Component } from 'react';
import announcements from '../../static/accouncements.json';
import Announcement from './Announcement';

class Countdown extends Component {


    renderAnnouncements() {

        if (announcements.length < 1) {
            return (<div class="announcements__small">
                No Announcements Right Now, Happy Hacking! 😄
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
            <div className="announcements d-flex container m-0 justify-content-center flex-column align-items-center">
                <div className="row mb-5">
                    <div className="text-center">
                        <h1 className="announcements__header">
                            Announcements
                        </h1>
                    </div>
                </div>
                {this.renderAnnouncements()}
            </div>
        )
    }
}

export default Countdown;