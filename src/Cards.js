import React from 'react';
import {useCart} from "react-use-cart" 

function Cards(props) {
  const {addItem} = useCart();
  
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-60 shadow" style={{width:"18rem"}}>
            <img src={props.Img} class="card-img-top"/>
                <div className="card-body">
                    <h5 class="card-title">{props.productName}</h5>
                    <p class="card-text">Rs {props.price}</p>
                    <div className='btn1'>
                    <button type="button" class="btn btn-success " onClick={()=>addItem(props.item)}>Add to Cart</button>
                    </div>
                    
                </div>
        </div>
         
    </div>
  )
}

export default Cards
