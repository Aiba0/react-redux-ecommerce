import React from "react";
import'./ProductCard.css'

export const ProductCard = (props) => {
    const product = props.product
    return (
        <div className='product-card'>
            <div className='info'> </div>
            <div className='product-card__img'>
                <img src={`https://api.doover.tech${product.picture}`} alt=""/>
            </div>
            <div className="product-card__body">
                <p className='product-card__title'>{product.hint.title}</p>
                <span className='product-card__period'><span>Срок доставки / </span>{product.duration / 86400}</span>
                <p className='product-card__price'>{product.price} тг</p>
                <div className='product-card__add-cart'>
                <button className='product-card__add-cart btn' onClick={() => props.addToCart(product)}>
                    &#8853;
                </button>
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}
