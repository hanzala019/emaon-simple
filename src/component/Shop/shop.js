import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import './shop.css';
const Shop = () => {
   let first10 = fakeData.slice(0,10);

   const [products, setProduct] = useState(first10)
   const [cart, setCart] = useState([])

   useEffect(()=>{
    const savedData = getDatabaseCart()
    const productKey = Object.keys(savedData)

    const cartProduct = productKey.map((key)=>{
        const product = fakeData.find(pd => pd.key === key );
        product.quantity = savedData[key]
        console.log(cart)
        return product;
    })
    setCart(cartProduct);
    
},[])


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
   
   
   const addHandler = (product) => {  
       
       const sameProduct = cart.find(pd => pd.key === product.key)
       let count = 1
       let newCart;
       if(sameProduct){
           count = 1 + sameProduct.quantity
           sameProduct.quantity = count 
           const others = cart.filter(pd => pd.key !== product.key)
           
           newCart = [...others, sameProduct] 
           console.log("yey", newCart,product)
       }
       else {
           product.quantity = 1
           newCart = [...cart,product]
           console.log("nay", newCart, product)
       }
       setCart(newCart)
       addToDatabaseCart(product.key, count)
 
    }

    return (
        <div className='container'>
            <div className='shop'>
                
                    {
                        products.map(product => <Product showButton={true} addHandler={addHandler} product={product} key={product.key}></Product>)
                            
                    }
               
            </div>
            
             <div className='cart'>
                
                <h2>Order Summery</h2>
                <h4>Items Ordered:{cart.length}</h4>
                <h5>Item Price:${price} </h5>
                <h5>Shipping Cost: ${shipping}</h5>
                <h4>Total:${total}</h4>

                <Link to='/review'>
                <button>Review Order</button>
                </Link>
                

            </div>
           
            
        </div>
    );
};

export default Shop;