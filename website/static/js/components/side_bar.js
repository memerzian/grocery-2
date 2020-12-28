import React, {Component} from 'react';
import {ChevronDoubleLeft, ChevronDoubleRight, Journal, Tag} from 'react-bootstrap-icons';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    collapseSideBar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let collapseClass = this.state.isOpen ? "col-2" : "";
        return <React.Fragment>
            <nav class={`navbar d-flex flex-column d-md-block navbar-light bg-light min-vh-100 border-right ${collapseClass}`}>
                <div className="d-flex align-items-end flex-column">
                    <button type="button" className="btn btn-light text-dark bg-gray" onClick={() => this.collapseSideBar()}>
                        {
                            this.state.isOpen ?
                            <ChevronDoubleLeft size="20"/> :
                            <ChevronDoubleRight size="20"/>
                        }
                    </button>
                </div>
                <div>
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link">
                                <span>
                                    <Journal size="20" />
                                    {
                                        this.state.isOpen &&
                                        <span class="ml-2">Ingredients</span>
                                    }
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <span>
                                    <Tag size="20" />
                                    {
                                        this.state.isOpen &&
                                        <span class="ml-2">Units</span>
                                    }
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