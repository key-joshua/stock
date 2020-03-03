import '../style/style.scss'
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { insertIntoStore } from '../redux/action/ItemAction'


class FormContainer extends Component {
    state = {
        id: '',
        name: '',
        price: '$'
    }
    handleChange = (key) => {
        this.setState({
            [key.target.id]: key.target.value
        })
    }
    handleSubmit = (key) => {
        this.setState({ id: '', name: '', price: '$' })
        const { addToStore } = this.props
        const newItem = this.state;
        addToStore(newItem);
        key.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Item Name" type='text' id='name' onChange={this.handleChange} value={this.state.name} required />
                    <input placeholder="Item Price" type='text' id='price' onChange={this.handleChange} value={this.state.price} required />
                    <button id="insert" className="btn"> Add Item</button>
                </form>
                <div id="copyright"> Developed By Josue @Copyright 2020</div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        addToStore: (newItem) => { dispatch(insertIntoStore(newItem)) }                // Hiden Way
        //addToStore: (newItem) => { dispatch({ type: 'ADD_ITEM', newItem: newItem}) } // Clear Way
    }
}
export default connect(null, mapDispatch)(FormContainer);
