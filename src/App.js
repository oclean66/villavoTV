import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Sidepanel from './components/Sidepanel';
import Centerpanel from './components/Centerpanel';

import Seasons from './components/Shows/Seasons';
import Watch from './components/Shows/Watch';
import Header from './components/Header';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      user: true,

    };
  }
  renderLoginButton(className = '') {

    if (this.user) {
      return (
        <div className="">
          <span> {this.user.displayName || this.user.email || "Guest"} </span>



          <div className="dropdown d-inline">
            <button className="btn btn-sm dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-align-justify"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">

              <Link className="dropdown-item py-0" to="/">Accounts</Link>
              <Link className="dropdown-item py-0" to="/bookmakers">Bookmakers</Link>
              <Link className="dropdown-item py-0" to="/">Events</Link>
              <div className="dropdown-divider"></div>
              <Link onClick={this.handleLogout} className="dropdown-item py-0 my-0" to="/">Logout</Link>
            </div>
          </div>

          {/* <div  className="btn btn-danger btn-sm">Logout</div> */}
        </div>
      );
    } else {
      return (
        <button className={"btn btn-danger " + className} onClick={this.handleAuth} ><i className="fab fa-google"></i> Login with Google</button>
      );
    }
  }
  render() {
    return (
      <Router>
        <div className="layout ">
          <Header handleAuth={this.handleAuth} handleLogout={this.handleLogout} user={this.state.user} renderLoginButton={this.renderLoginButton} />
          {
            this.state.user &&
            <div className="wrapper">
              <Sidepanel />

              <div id="content" className="">
                <Switch>
                  <Route exact path='/' render={props => <Centerpanel addLine={this.addLine}
                    accounts={this.state.accounts} user={this.state.user} />} />
                  <Route exact path="/show/:id/imdb/:imdb" render={props => <Seasons {...props} />} />
                  <Route exact path="/show/:id/imdb/:imdb/season/:sx/episode/:ey" render={props => <Watch {...props} />} />



                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </div>
            </div>
          }
          {
            !this.state.user &&
            <div className="container pt-4">

              <div className="jumbotron bg-dark">
                <h1 className="m-0">Bet<span style={{ color: "#0cd664" }}>Manager</span></h1>
                <p className="lead">It is a <b>notebook</b>, to write down where you have placed your bets in your favorite bookmakers. Create an account and manage your bettor profile.</p>
                <hr className="my-4" />
                <p>Login to start.</p>
                {this.renderLoginButton("btn-lg")}
                {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
              </div>
            </div>
          }
        </div>
      </Router>
    );
  }
}

export default App;
