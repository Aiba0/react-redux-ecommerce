import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Search.css'
import {ProductCard} from "../Product/ProductCard/ProductCard";

class Search extends Component {
    render() {
        return (
            <div>Search page</div>

            // <div className='product-list'>
            //     <h1><span>Главная/ </span>Верхняя одежда</h1>
            //     <div className="product-list__content">
            //         { this.props.products.map((product, idx) => {
            //             return (
            //                 <ProductCard
            //                     product={product}
            //                     key={product.uuid}
            //                 />
            //             )
            //         }) }
            //     </div>
            //
            // </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productByName: state.product.productByName
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
