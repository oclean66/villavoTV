import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="border-bottom border-dark mt-1 ">
                <div className="d-flex justify-content-between mx-3">
                    <div className="d-inline-block">
                        <div className="btn btn-sm " id="sidebarCollapse">
                            <i className="fas fa-align-justify"></i>
                        </div>
                        <div className="d-inline-block" style={{ verticalAlign: 'middle' }}>
                            <Link to='/'><h4 className="m-0">Villavo <span style={{ color: "#0cd664" }}>TV</span></h4></Link>
                        </div>
                    </div>
                    <div>

                        <div>
                            {this.props.renderLoginButton('btn-sm')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header