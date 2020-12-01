import React, {Component} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import Search from "../searchForm/SearchForm";
import {logout} from "../../store/actions/auth";

 class Header extends Component {

     render() {
        return (
            <div className="header">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <NavLink to="/" className="navbar__link">Главная</NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/cart" className="navbar__link">Корзина
                                {
                                    this.props.cart.length
                                        ? <span>({this.props.cart.length})</span>
                                        : null
                                }
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <h1 className="logo">
                    <NavLink to="/">Concept</NavLink>
                </h1>
                <div className='header__actions'>
                    <Search/>
                    <div className="user-list">
                        { this.props.isLoggedIn
                            ? <button className="user-list__link" onClick={this.props.logout}>Выйти</button>
                            : <NavLink to='/' className="user-list__link">Войти</NavLink>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {

    console.log('state.cart.cartNumber', state.cart.cartNumber)
    return {
        isLoggedIn: state.auth.isLoggedIn,
        cart: state.cart.cartNumber
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
