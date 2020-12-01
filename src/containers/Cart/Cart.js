import React, {Component} from 'react';
import './Cart.css'
import {CartItem} from "./CartItem/CartItem";

class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                <h1>Корзина</h1>
                <div className="cart-content">
                    <div className="cart-content__list">
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div className="cart-content__total total">
                        <p className='total__title'>ИТОГО</p>
                        <div className='total-line'> </div>
                        <p className='total-quantity'>4 вещи</p>
                        <p className='total-amount'>Общая сумма 12 300 тг</p>
                        <button className='total-btn'>Оформить</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
