import React, {Component} from 'react';
import Meals from './meals';
import SideBar from './side_bar';

class GroceryApplication extends Component {
    render() {
        return <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/static/images/carrot.svg" alt="" width="30" height="24" class="d-inline-block align-top mr-2"/>
                        Grocery plan
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                        </ul>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a target="_blank" class="nav-link" href="/doc/swagger">API docs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-full">
                <div class="d-flex flex-row">
                    <SideBar/>
                    <Meals/>
                </div>
            </div>
        </React.Fragment>
    } 
}

export default GroceryApplication;