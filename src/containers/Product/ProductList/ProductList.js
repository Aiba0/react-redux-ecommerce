import React, {Component} from 'react';
import {connect} from 'react-redux'
import './ProductList.css'
import {fetchProductsById} from "../../../store/actions/product";
import {ProductCard} from "../ProductCard/ProductCard";
import {addToCart} from "../../../store/actions/cart";


class ProductList extends Component {

     componentDidMount() {
        this.props.fetchProductsById(this.props.match.params.id)
    }

    render() {
        return (
            <div className='product-list'>
                <h1><span>Главная/ </span>Верхняя одежда</h1>
                <div className="product-list__content">
                { this.props.products.map((product, idx) => {
                    return (
                        <ProductCard
                            product={product}
                            key={product.uuid}
                            addToCart={this.props.addToCart}
                        />
                    )
                }) }
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        products: state.product.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProductsById: id => dispatch(fetchProductsById(id)),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
