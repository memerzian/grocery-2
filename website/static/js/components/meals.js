import React, {Component} from 'react';
import {Basket2} from 'react-bootstrap-icons';
import CartModal from './cart_modal';
import Meal from './meal';

class Meals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: [],
            cartModalIsOpen: false
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

    toggleCartModal() {
        this.setState({
            cartModalIsOpen: !this.state.cartModalIsOpen
        });
    }

    render() {
        return <React.Fragment>
            <div className="col">
                <div className="border-bottom py-2 d-flex flex-row align-items-center">
                    <h5 className="col">
                        Meals
                    </h5>
                    <span className="col text-right">
                        <button type="button" className="btn btn-light text-dark border bg-gray" onClick={() => this.toggleCartModal()}>
                            <Basket2 size="30"/>
                        </button>
                    </span>
                </div>
                <div className="row row-cols-5 mt-2">
                    {this.state.meals.map(meal =>
                        <Meal key={meal.name} meal={meal}/>
                    )}
                </div>
                <CartModal
                    isOpen={this.state.cartModalIsOpen}
                    toggleModal={() => this.toggleCartModal()}
                />
            </div>
        </React.Fragment>
    } 
}

export default Meals;