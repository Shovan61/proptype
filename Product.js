import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ id, image, url, name, price }) => {
    console.log(id, image, url, name, price);
    const urlvalidate = image && image.url;
    return (
        <article className='product'>
            <img
                src={urlvalidate || defaultImage}
                alt={name || 'Default Product'}
            />
            <h4>{name || 'Default Product'}</h4>
            <p>{price || 3.99}</p>
        </article>
    );
};

Product.prototype = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
};

export default Product;
