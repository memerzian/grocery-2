import React, {Component} from 'react';
import { X } from 'react-bootstrap-icons';
import {ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';
import Loader from 'react-loader-spinner';

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: [],
            emailModalIsOpen: false
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

        this.setState({
            groceryList: groceryList
        });
    }

    toggleEmailModal() {
        this.setState({
            emailModalIsOpen: !this.state.emailModalIsOpen
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
                        this.state.groceryList.length > 0 &&
                        <button 
                            type="button"
                            className="btn btn-info"
                            onClick={() => this.toggleEmailModal()}
                        >
                            Email
                        </button>
                    }
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
            <EmailModal 
                mealsInCart={this.props.mealsInCart}
                groceryList={this.state.groceryList}
                isOpen={this.state.emailModalIsOpen}
                toggleModal={() => this.toggleEmailModal()}
            />
        </React.Fragment>
    } 
}

class EmailModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipient: "",
            loading: false
        }
    }

    sendEmail() {
        this.setState({
            loading: true
        });

        let meals = this.props.mealsInCart.map(object => ({...object}));
        meals.forEach(meal => {
            delete meal['id'];
            delete meal['recipes'];
        });

        let body = {
            "recipient": "mattemerzian@gmail.com",
            "list_items": this.props.groceryList,
            "meals": meals
        }

        fetch('api/1/lists/', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            this.setState({
                loading: false
            });

            this.props.toggleModal();
        })
    }

    updateRecipient(value) {
        this.setState({
            recipient: value
        });
    }

    render() {
        return <React.Fragment>
            <Modal size="md" isOpen={this.props.isOpen} toggle={() => this.props.toggleModal()}>
                <ModalBody>
                    {
                        this.state.loading ?
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        /> :
                        <div className="form-group">
                            <label>Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="name@gmail.com"
                                value={this.state.recipient}
                                onChange={(e) => this.updateRecipient(e.target.value)}
                                onKeyPress={(e) => (e.key === 'Enter' ? this.sendEmail() : null)}
                            />
                        </div>
                    }
                </ModalBody>
                <ModalFooter>
                    {
                        this.state.recipient.length > 0 && !this.state.loading &&
                        <button 
                            type="button"
                            className="btn btn-info"
                            onClick={() => this.sendEmail()}
                        >
                            Send
                        </button>
                    }
                    <button type="button" className="btn btn-secondary" onClick={() => this.props.toggleModal()}>
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    } 
}

export default CartModal;