import React, { Component } from 'react';

class Announcement extends Component {

    render() {
        return (
            <div className="announcement w-50 d-flex flex-column">
                <div className="announcement__text">                
                    {this.props.data.text}
                    
                    {this.props.data.sub && <div className="announcement__sub">
                        {this.props.data.sub}
                    </div>}
                </div>

            </div>
        )
    }
}

export default Announcement;