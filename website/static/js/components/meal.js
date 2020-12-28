import React, {Component} from 'react';
import { Plus } from 'react-bootstrap-icons';
import MealRating from './meal_rating';

class Meal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className="col mt-3">
                <div className="card">
                    <div className="card-header bg-light-green flex-row d-flex">
                        <span className="no-overflow-field col-10">
                            {this.props.meal.name}
                        </span>
                        <span className="col">
                            <button type="button" className="btn btn-sm btn-dark p-0">
                                <Plus size="25"/>
                            </button>
                        </span>
                    </div>
                    <div className="card-body p-2">
                        <MealRating rating={this.props.meal.rating}/>
                        <div>
                            Ingredients: {this.props.meal.recipes.length}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    } 
}

export default Meal;