import React, {Component} from 'react';
import {ChevronDoubleLeft, Journal, Tag} from 'react-bootstrap-icons';

class SideBar extends Component {
    render() {
        return <React.Fragment>
            <nav class="navbar col-2 d-flex flex-column d-md-block navbar-light bg-light min-vh-100 border-right">
                <div className="d-flex align-items-end flex-column">
                    <button type="button" className="btn btn-light text-dark">
                        <ChevronDoubleLeft size="20"/>
                    </button>
                </div>
                <div>
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link">
                                <span>
                                    <Journal size="20" />
                                    <span class="ml-2">Ingredients</span>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <span>
                                    <Tag size="20" />
                                    <span class="ml-2">Units</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    } 
}

export default SideBar;