import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../scss/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import GroceryApplication from './components/grocery_application';


ReactDOM.render(
    <React.Fragment>
        <GroceryApplication/>
    </React.Fragment>
    , document.getElementById('reactEntry')
)