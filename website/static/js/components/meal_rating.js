import React, {Component} from 'react';
import { Plus, StarFill } from 'react-bootstrap-icons';
import { types } from 'util';
import PropTypes from 'prop-types';

class MealRating extends Component {
    // static PropTypes = {
    //     /**
    //      * Rating number
    //      */
    //     rating
    // }
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            {[...Array(this.props.rating).keys()].map(star =>
                <span className="text-gold" key={star}>
                    <StarFill/>
                </span>
            )}
        </React.Fragment>
    } 
}

export default MealRating;