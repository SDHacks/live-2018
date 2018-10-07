import React, { Component } from 'react';

class Countdown extends Component {

    render() {
        return (
            <div class="countdown d-flex container m-0 justify-content-center flex-column align-items-center">
                <div class="countdown__row">
                    <div class="text-center">
                        <h1 className="countdown__header">Countdown </h1>
                    </div>
                    <div class="countdown__container w-100 row">
                        <div class="col-md">
                            <div className="countdown__num">
                                X
                            </div>
                            <div className="countdown__sub">
                                DAYS
                            </div>
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                YY
                            </div>  
                            <div className="countdown__sub">
                                HOUR(S)
                            </div>                      
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                ZZ
                            </div>      
                            <div className="countdown__sub">
                                MIN(S)
                            </div>                  
                        </div>
                        <div class="col-md">
                            <div className="countdown__num">
                                SS
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