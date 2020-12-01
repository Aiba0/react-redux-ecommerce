import React from "react";
import './CategoryItem.css'
import {NavLink} from "react-router-dom";

const CategoryItem = ({category}) => {
    return (
        <NavLink to={'/products/category/' + category.uuid}>
            <div className='card'>
                <div className="card-img">
                    <img src={`https://api.doover.tech${category.picture}`} alt='img'/>
                </div>
                    <div className='card-body'>
                        <h2 className='card-body__title'>{category.name}</h2>
                        <p>Architect & Engineer</p>
                    </div>
            </div>
        </NavLink>
    )
}

export default CategoryItem;
