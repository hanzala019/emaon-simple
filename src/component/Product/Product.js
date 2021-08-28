import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, key } = props.product;
    return (
        <div className='products'>
            <div>
                <img src={img} alt='..'/>
            </div>

            <div className="product-name">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>Amount in stock: {stock}</p>
                {props.showButton && <button onClick={()=> props.addHandler(props.product) }> Add to cart</button>}
                
            </div>
             
        </div>
    );
};

export default Product;