import React, {Component} from 'react';
import {connect} from "react-redux"
import classes from './CategoryList.module.css'
import CategoryItem from "../CategoryItem/CategoryItem";
import {fetchCategories} from "../../../store/actions/product";

class CategoryList extends Component {


     componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div className={classes.goodsCategoryList}>
                <h1>Категории</h1>
                <div className={classes.goodsCategoryListWrap}>
                        {
                            this.props.categories.map((category, index) => {
                            return <CategoryItem
                                category={category}
                                key={category.uuid}
                            />
                        })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.product.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
