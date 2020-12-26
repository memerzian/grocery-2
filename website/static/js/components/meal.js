import React, {Component} from 'react';
import { Plus } from 'react-bootstrap-icons';

class Meal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className="col mt-3">
                <div className="card">
                    <div className="card-header">
                        <span>
                            {this.props.meal.name}
                        </span>
                        <span className="float-right">
                            <button type="button" className="btn btn-sm btn-dark p-0">
                                <Plus size="25"/>
                            </button>
                        </span>
                    </div>
                    <div className="card-body">
                        {this.props.meal.rating}
                    </div>
                </div>
            </div>
        </React.Fragment>
    } 
}

export default Meal;