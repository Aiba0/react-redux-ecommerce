import React from "react";
import './CartItem.css'

export const CartItem = () => {
    return (
        <div className='cart-item'>
            <div className="cart-info info"> </div>
            <div className="cart-item__img">
                <img src="/" alt=""/>
            </div>
            <div className="cart-item__text">
                <div className="cart-item__title">Рубашка</div>
                <div className="cart-item__period"><span>Срок доставки/ </span> 2 дня</div>
            </div>
            <div className="cart-item__action">
                <button className='cart-item__action-add btn'>
                    &#8853;
                </button>
                <span>1</span>
                <button className='cart-item__action-sub btn'>
                    &#8853;
                </button>
            </div>
            <div className="cart-item__price">2500</div>
            <div className="cart-delete">&times;</div>
        </div>
    )
}
