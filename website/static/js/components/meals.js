import React, {Component} from 'react';
import {Basket2} from 'react-bootstrap-icons';
import Meal from './meal';

class Meals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: []
        }
    }

    componentDidMount() {
        this.getMeals();
    }

    getMeals() {
        let endpoint = '/api/1/meals';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => this.setState({meals: data}));
    }

    render() {
        return <React.Fragment>
            <div class="col">
                <div className="border-bottom py-2 d-flex flex-row align-items-center">
                    <h5 className="col">
                        Meals
                    </h5>
                    <span className="col text-right">
                        <button type="button" className="btn btn-light text-dark border">
                            <Basket2 size="30"/>
                        </button>
                    </span>
                </div>
                <div className="row row-cols-5 mt-2">
                    {this.state.meals.map(meal =>
                        <Meal key={meal.name} meal={meal}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    } 
}

export default Meals;