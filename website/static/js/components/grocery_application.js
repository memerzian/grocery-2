import React, {Component} from 'react';
import Meals from './meals';
import SideBar from './side_bar';

class GroceryApplication extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/static/images/carrot.svg" alt="" width="30" height="24" className="d-inline-block align-top mr-2"/>
                        Grocery plan
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a target="_blank" className="nav-link" href="/doc/swagger">API docs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-full">
                <div className="d-flex flex-row">
                    <SideBar/>
                    <Meals/>
                </div>
            </div>
        </React.Fragment>
    } 
}

export default GroceryApplication;