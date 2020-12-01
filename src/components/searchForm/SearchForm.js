import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {searchProductByName} from "../../store/actions/product";
import './SearchForm.css'

class SearchForm extends Component {

    state = {
        value: '',
    }
    onHandleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    onHandleSubmit = (e) => {
        e.preventDefault()
        this.props.searchProductByName(this.state.value)
        console.log(this.props)
    };

    render() {
        // console.log('productByName: ', this.props.productByName)

        return (
            <div className='search'>
                <form
                    onSubmit={this.onHandleSubmit}
                    className='form-group'>
                    <input
                        onChange={this.onHandleChange}
                        className='form-control'
                        type="text"
                        placeholder='Найти вещь'/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
        return {
            ...state,
            productByName: state.product.productByName
        }
}

function mapDispatchToProps(dispatch) {
        return {
            searchProductByName: value => dispatch(searchProductByName(value))
        }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
