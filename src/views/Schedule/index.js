import React, { Component } from 'react';

class Countdown extends Component {

    render() {
        return (
            <div class="live-page schedule d-flex container justify-content-center flex-column align-items-center">
                <div className="row">
                    <div className="text-center">
                        <h1 className="schedule__header">
                            Full Schedule
                        </h1>
                    </div>
                </div>
                <div class="container w-100 mt-5 px-4">
                <div class="row">
                  <div class="col-md-4 schedule__border">
                    <div class="container-fluid">  
                      <div class="text-center">
                        <h3> Friday, October 12 </h3>
                      </div>
                      <ul class="schedule__list">
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            5:30 pm
                            <div class="schedule__list-item-muted">
                              to 8 pm
                            </div>
                          </span>
                          <span class="schedule__list-item_text">
                            Check-in & Dinner
                          </span>
                        </li>
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            6:30 pm
                            <div class="schedule__list-item-muted">
                              to 8:30 pm
                            </div>
                          </span>
                          <span class="schedule__list-item_text">
                            CSE Alumni Reunion
                          </span>
                        </li>
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            8 pm
                          </span>
                          <span class="schedule__list-item_text">
                            Opening Ceremony
                          </span>
                        </li>
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            9 pm
                          </span>
                          <span class="schedule__list-item_text">
                            Hacking Begins
                          </span>
                        </li>
                    
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            9 pm
                            <div class="schedule__list-item-muted">
                              to 10 pm
                            </div>
                          </span>
                          <span class="schedule__list-item_text">
                            Virtual Reality and Gaming Workshop
                          </span>
                        </li>
                    
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            9 pm
                            <div class="schedule__list-item-muted">
                              to 10 pm
                            </div>
                          </span>
                          <span class="schedule__list-item_text">
                            Team Mixer
                          </span>
                        </li>
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            10 pm
                            <div class="schedule__list-item-muted">
                              to 10:45 pm
                            </div>
                          </span>

                          <span class="schedule__list-item_text">
                            CSES Android Workshop
                          </span>
                        </li>
                        <li class="schedule__list-item">
                          <span class="schedule__list-item_time">
                            10:45 pm
                            <div class="schedule__list-item-muted">
                              to 11:30 pm
                            </div>
                          </span>

                          <span class="schedule__list-item_text">
                            IEEE / HKN Arduino Workshop
                          </span>
                        </li>                       
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 schedule__border"> 
                    <div class="text-center">
                      <h3> Saturday, October 13 </h3>
                    </div>
                    <ul class="schedule__list">
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          5:30 am

                          <div class="schedule__list-item-muted">
                            to 6:30 am
                          </div>
                        </span>

                        <span class="schedule__list-item_text">
                          Sunrise Campus Tour
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          7 am

                          <div class="schedule__list-item-muted">
                            to 8:30 am
                          </div>
                        </span>

                        <span class="schedule__list-item_text">
                          Breakfast
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          8:30 am
                        </span>
                        <a class="schedule__list-item_text text-muted" href="assets/ece.pdf" target="_blank">
                          <u>ECE Alumni Mixer</u>
                        </a>
                      </li>
                       <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          10 am
                        </span>

                        <span class="schedule__list-item_text">
                          Northrop Grumman Workshop
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          11:30 am
                        </span>

                        <span class="schedule__list-item_text">
                          Lunch
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          6:30 pm

                          <div class="schedule__list-item-muted">
                            8:00 pm
                          </div>
                        </span>

                        <span class="schedule__list-item_text">
                          Sunset Walk to Gliderport
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          6:30 pm

                          <div class="schedule__list-item-muted">
                            to 8:30 pm
                          </div>
                        </span>
                        <span class="schedule__list-item_text">
                          Dinner
                        </span>
                      </li>                      
                    </ul>
                  </div>
                  <div class="col-md-4 schedule__border">  
                    <div class="text-center">
                      <h3> Sunday, October 14 </h3>
                    </div>
                    <ul class="schedule__list">
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          12 am
                        </span>

                        <span class="schedule__list-item_text">
                          Primal Scream & Donuts
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          7 am
                        </span>

                        <span class="schedule__list-item_text">
                          Breakfast
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          9 am
                        </span>
                        <span class="schedule__list-item_text">
                          Submissions Due
                        </span>
                      </li>
                       <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          10 am
                        </span>

                        <span class="schedule__list-item_text">
                          Hacking Ends
                        </span>
                      </li>  
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          10 am
                        </span>

                        <a class="schedule__list-item_text text-muted" href="https://www.sdhacks.io/espresso" target="_blank">
                          <u>Espresso Startup Expo</u>
                        </a>
                      </li> 
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          10:30 am
                        </span>

                        <span class="schedule__list-item_text">
                          Lunch
                        </span>
                      </li>  
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          11 am

                          <div class="schedule__list-item-muted">
                            to 1:30 pm
                          </div>
                        </span>

                        <span class="schedule__list-item_text">
                          Judging Period
                        </span>
                      </li>
                      <li class="schedule__list-item">
                        <span class="schedule__list-item_time">
                          1:30 pm
                          <div class="schedule__list-item-muted">
                            to 3 pm
                          </div>
                        </span>

                        <span class="schedule__list-item_text">
                          Demos & Closing Ceremony
                        </span>
                      </li>                     
                    </ul>
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
