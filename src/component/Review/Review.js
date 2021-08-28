import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([])

    
   let price = 0
   let shipping = 0
   let total = 0
   for (let i = 0; i < cart.length; i++) {
 
       const newProduct = cart[i].price*cart[i].quantity;
       const shippingCost = cart[i].shipping
       price = Math.round(price + newProduct)
       shipping = shipping + shippingCost
       total = Math.round(price + shipping)
 
   }

   const confirmButton = () => {
       setCart([])
       processOrder()
   }
    
    const removeProduct = (productKey) => {
        console.log("removed", cart)
       const newCart = cart.filter(pd => pd.key !== productKey)
       setCart(newCart) 
       removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const savedData = getDatabaseCart()
        const productKey = Object.keys(savedData)

        const cartProduct = productKey.map((key)=>{
            const product = fakeData.find(pd => pd.key === key );
            product.quantity = savedData[key]
            return product;
        })
        setCart(cartProduct);
        console.log(cart)
    },[])
    return (
        <div>
            <h1>ORDER REVIEWING: {cart.length}</h1>
                <div className='container'>
                <div className='shop'> 
                    {cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)}
                </div>
                 
             <div className='cart'>
                
                <h2>Order Summery</h2>
                <h4>Items Ordered:{cart.length}</h4>
                <h5>Item Price:${price} </h5>
                <h5>Shipping Cost: ${shipping}</h5>
                <h4>Total:${total}</h4>
                <Link to='/..'>
                <button onClick={confirmButton}>Confirm Order</button>
                </Link>
                

            </div>
            </div>
        </div>
    );
};

export default Review;