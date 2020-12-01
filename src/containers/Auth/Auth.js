import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import classes from './Auth.module.css'
import {login} from "../../store/actions/auth";

class Auth extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.username, this.state.password)
        this.props.login(this.state.username, this.state.password)
    }

    render() {

        if (this.props.isLoggedIn) {
            return <Redirect to={'/products/categories/'}/>
        }

        return (
            <div className={classes.Auth}>
               <div className={classes.AuthContent}>
                    <h1>Войти</h1>

                   <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                       <input
                           name='username'
                           placeholder='Введите admin@inzgiba.me'
                           value={this.state.username}
                           onChange={this.handleChange}
                       />
                       <input
                           type='password'
                           name='password'
                           placeholder='test123123'
                           value={this.state.password}
                           onChange={this.handleChange}
                       />

                       <button className={classes.AuthBtn}>Войти</button>
                   </form>
               </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }

}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Auth) ;
