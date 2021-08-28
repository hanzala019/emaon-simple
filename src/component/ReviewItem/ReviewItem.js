import React, { useState } from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const style = {borderBottom: '1px solid grey', margin: '10px 50px', textAlign: 'left', display: 'flex', padding: '10px 25px', width:'75%'}
    const btnStyle = { padding:'8px',
        backgroundColor: 'rgb(1, 18, 37)',
        color: '#fafafa',
        fontSize: '15px'}

       
        
        
    return (
        <div style={style}>

             <div style={{padding: '10px 25px'}}> 
            <img src={props.product.img} alt='...'/>
            </div>

           <div>
           <h2>{props.product.name}</h2>
           <h3>{props.product.category}</h3>
           <h4>Quantity:{props.product.quantity}</h4>
           <button onClick={()=> props.removeProduct(props.product.key)} style={btnStyle}>Remove</button>
       </div>
           </div>
    );
};

export default ReviewItem;