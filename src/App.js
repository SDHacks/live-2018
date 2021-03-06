import React, { Component } from 'react';
import './styles/_base.scss';
import SideBar from './SideBar'
import Countdown from './views/Countdown';
import Announcements from './views/Announcements';
import Links from './views/Links';
import Home from './views/Home';
import Going from './views/Going';
import Schedule from './views/Schedule';
import Contact from './views/Contact';
import {Route, Switch} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false}

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <>
        <SideBar />
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/countdown' component={Countdown}></Route>
            <Route exact path='/announcements' component={Announcements}></Route>
            <Route exact path='/links' component={Links}></Route>
            <Route exact path='/whats' component={Going}></Route>
            <Route exact path='/schedule' component={Schedule}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
