import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch, Redirect} from 'react-router-dom'
import GoodsCategoryList from "./containers/Category/CategoryList/CategoryList";
import ProductList from "./containers/Product/ProductList/ProductList";
import Cart from "./containers/Cart/Cart";
import Auth from "./containers/Auth/Auth";
import Search from "./containers/Search/Search";



class App extends Component{

    render() {
        return (
            <Layout>
                <Auth/>
                <Switch>
                    <Route path={'/'} exact component={Auth}/>
                    <Route path={'/products/categories/'} exact component={GoodsCategoryList}/>
                    <Route path={'/products/category/:id'} component={ProductList}/>
                    <Route path={'/Cart'} component={Cart}/>
                    <Route path={'/products/search/:name'} component={Search}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        );
    }

}

export default App;
