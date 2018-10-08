import React, { Component } from 'react';

class Countdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate: new Date('October 14, 2018 11:00:00'),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.state.endDate);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.endDate), 1000);
    }  

    getTimeUntil() {
        const time = this.state.endDate - Date.now();

        if (time < 0) {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            })
        }
        else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }
    }

    render() {
        return (
            <div class="countdown d-flex container m-0 justify-content-center flex-column align-items-center">
                <div class="countdown__row">
                    <div className="text-center">
                        <h1 className="countdown__header">Countdown </h1>
                    </div>
                    <div className="countdown__container w-100 row">
                        <div className="col-md">
                            <div className="countdown__num">
                                {this.state.days}
                            </div>
                            <div className="countdown__sub">
                                DAY(S)
                            </div>
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                {this.state.hours}
                            </div>  
                            <div className="countdown__sub">
                                HOUR(S)
                            </div>                      
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                {this.state.minutes}
                            </div>      
                            <div className="countdown__sub">
                                MIN(S)
                            </div>                  
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                {this.state.seconds}
                            </div>    
                            <div className="countdown__sub">
                                SEC(S)
                            </div>                    
                        </div>
                    </div>
                    <div className="countdown__copy text-center mt-5">
                        <h2> You can do this! We know you can! 🙌</h2>
                    </div>

                </div>
            </div>
        )
    }
}

export default Countdown;