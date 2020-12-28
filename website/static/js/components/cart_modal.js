import React, {Component} from 'react';
import { X } from 'react-bootstrap-icons';
import {ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: []
        }
    }

    generateGroceryList() {
        let groceryListDictionary = {};
        this.props.mealsInCart.forEach(meal => {
            meal.recipes.forEach(recipe => {
                if (recipe.ingredient.id in groceryListDictionary) {
                    groceryListDictionary[recipe.ingredient.id].quantity += recipe.quantity;
                } else {
                    groceryListDictionary[recipe.ingredient.id] = {
                        "name": recipe.ingredient.name,
                        "quantity": recipe.quantity,
                        "unit": recipe.ingredient.unit.name
                    }
                }
            })
        })
        
        let groceryList = [];
        for (let key in groceryListDictionary) {
            groceryList.push(groceryListDictionary[key]);
        }

        debugger;

        this.setState({
            groceryList: groceryList
        });
    }

    render() {
        return <React.Fragment>
            <Modal size="md" isOpen={this.props.isOpen} toggle={() => this.props.toggleModal()}>
                <ModalHeader>
                    Generate grocery list
                </ModalHeader>
                <ModalBody>
                    {
                        this.props.mealsInCart.length > 0 ?
                        <div>
                            <div>
                                <h6 className="border-bottom pb-1">Meals</h6>
                                <ul className="list-group">
                                    {
                                        this.props.mealsInCart.map(meal =>
                                            <li key={meal.id} className="list-group-item">
                                                <span className="d-flex justify-content-between">
                                                    <span>
                                                        {meal.name}
                                                    </span>
                                                    <span>
                                                        <button type="button" className="btn btn-sm btn-danger p-0" onClick={() => this.props.addMealToCart(this.props.meal)}>
                                                            <X size="25"/>
                                                        </button>
                                                    </span>
                                                </span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            {
                                this.state.groceryList.length > 0 &&
                                <div className="mt-2">
                                    <h6 className="border-bottom pb-1">List</h6>
                                    <ul className="list-group">
                                        {
                                            this.state.groceryList.map(ingredient =>
                                                <li key={ingredient.name} className="list-group-item">
                                                    <span className="d-flex justify-content-between">
                                                        <span>
                                                            {ingredient.name}
                                                        </span>
                                                        <span>
                                                            {ingredient.quantity}
                                                        </span>
                                                        <span>
                                                            {ingredient.unit}
                                                        </span>
                                                        <span>
                                                            <button type="button" className="btn btn-sm btn-danger p-0" onClick={() => this.props.addMealToCart(this.props.meal)}>
                                                                <X size="25"/>
                                                            </button>
                                                        </span>
                                                    </span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            }
                        </div>:
                        <div>
                            Add a meal to the basket
                        </div>
                    }
                </ModalBody>
                <ModalFooter>
                    {
                        this.props.mealsInCart.length > 0 &&
                        <button 
                            type="button"
                            className="btn btn-purple"
                            onClick={() => this.generateGroceryList()}
                        >
                            Generate list
                        </button>
                    }
                    <button type="button" className="btn btn-secondary" onClick={() => this.props.toggleModal()}>
                        Exit
                    </button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    } 
}

export default CartModal;