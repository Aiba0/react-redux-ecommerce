import React, {Component} from 'react';
import classes from './Layout.module.css'
import Header from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";

class Layout extends Component {

    render() {
        return (
            <div className={classes.Layout}>
                <div className="container">
                    <Header/>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
