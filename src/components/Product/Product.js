import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, brand} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Brand: {brand}</p>
                <p>Price: $ {price}</p>
            </div>
            <button className='button-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;